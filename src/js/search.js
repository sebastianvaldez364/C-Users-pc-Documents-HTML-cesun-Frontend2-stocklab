export function initSearch() {
  const input = document.querySelector('#searchInput');
  const tbody = document.querySelector('#productTable tbody');
  const emptyRow = document.querySelector('#noResults');

  const filterRows = () => {
    const query = input.value.trim().toLowerCase();
    let visible = 0;

    tbody.querySelectorAll('tr:not(#noResults)').forEach((row) => {
      const sku = row.children[0].textContent.toLowerCase();
      const name = row.children[1].textContent.toLowerCase();
      const match = sku.includes(query) || name.includes(query);
      row.hidden = !match;
      if (match) visible += 1;
    });

    emptyRow.hidden = visible > 0;
  };

  input.addEventListener('input', filterRows);
  return filterRows;
}