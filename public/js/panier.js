/**
 * Marché San-Pédro — panier (localStorage)
 */
(function () {
  const STORAGE_KEY = 'marche-sp-panier';

  function load() {
    try {
      return JSON.parse(localStorage.getItem(STORAGE_KEY) || '{}');
    } catch {
      return {};
    }
  }

  function save(panier) {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(panier));
    window.dispatchEvent(new CustomEvent('panier:change', { detail: panier }));
  }

  function getQty(id) {
    return load()[id] || 0;
  }

  function setQty(id, qty) {
    const panier = load();
    qty = Math.max(0, Math.floor(Number(qty) || 0));
    if (qty === 0) delete panier[id];
    else panier[id] = qty;
    save(panier);
    return qty;
  }

  function add(id, delta) {
    return setQty(id, getQty(id) + delta);
  }

  function clear() {
    save({});
  }

  function countItems() {
    return Object.values(load()).reduce((s, q) => s + q, 0);
  }

  function countLines() {
    return Object.keys(load()).length;
  }

  /** Format CFA: 1 250 FCFA */
  function formatCFA(n) {
    const rounded = Math.round(n);
    return (
      rounded.toString().replace(/\B(?=(\d{3})+(?!\d))/g, '\u00a0') + ' FCFA'
    );
  }

  /** Totals given products array + panier map */
  function totals(products) {
    const panier = load();
    let min = 0,
      est = 0,
      max = 0;
    for (const p of products) {
      const q = panier[p.id] || 0;
      if (!q) continue;
      min += q * p.prixMinimum;
      est += q * p.prixEstime;
      max += q * p.prixMaximum;
    }
    return { min, est, max, items: countItems(), lines: countLines() };
  }

  window.MarchePanier = {
    load,
    save,
    getQty,
    setQty,
    add,
    clear,
    countItems,
    countLines,
    formatCFA,
    totals,
  };
})();
