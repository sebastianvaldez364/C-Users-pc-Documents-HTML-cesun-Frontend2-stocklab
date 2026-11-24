import './scss/main.scss';
import { Modal, Offcanvas, Toast, Tooltip } from 'bootstrap'; // Offcanvas activa sus atributos data-bs-*
import { initThemeToggle } from './js/theme.js';
import { initProductForm } from './js/product-form.js';
import { initSearch } from './js/search.js';

initThemeToggle();
document.querySelectorAll('[data-bs-toggle="tooltip"]').forEach((el) => new Tooltip(el));

const filterRows = initSearch();
initProductForm({ Modal, Toast, onChange: filterRows });