const stateFor = (stock) => {
  if (stock === 0) return 'agotado';
  if (stock < 10) return 'bajo';
  return 'disponible';
};

function createRow({ sku, nombre, categoria, stock }) {
  const row = document.querySelector('#rowTemplate').content.cloneNode(true);
  const estado = stateFor(Number(stock));

  // textContent (nunca innerHTML) para evitar inyección de HTML (XSS)
  Object.entries({ sku, nombre, categoria, stock }).forEach(([field, value]) => {
    row.querySelector(`[data-field="${field}"]`).textContent = value;
  });

  const badge = row.querySelector('.status-badge');
  badge.classList.add(`status-badge--${estado}`);
  badge.textContent = estado.charAt(0).toUpperCase() + estado.slice(1);

  return row;
}

function bumpLowStock() {
  const kpi = document.querySelector('#kpiLow');
  if (!kpi) return;
  const current = Number(kpi.textContent.replace(/[^\d]/g, ''));
  kpi.textContent = (current + 1).toLocaleString('en-US');
}

export function initProductForm({ Modal, Toast, onChange }) {
  const form = document.querySelector('#productForm');
  const modal = Modal.getOrCreateInstance('#productModal');
  const toast = Toast.getOrCreateInstance('#saveToast');
  const tbody = document.querySelector('#productTable tbody');

  form.addEventListener('submit', (event) => {
    event.preventDefault();

    if (!form.checkValidity()) {
      form.classList.add('was-validated');
      form.querySelector(':invalid')?.focus();
      return;
    }

    const data = Object.fromEntries(new FormData(form));
    tbody.prepend(createRow(data));

    if (stateFor(Number(data.stock)) === 'bajo') bumpLowStock();

    form.reset();
    form.classList.remove('was-validated');
    modal.hide();
    toast.show();
    onChange?.();
  });
}