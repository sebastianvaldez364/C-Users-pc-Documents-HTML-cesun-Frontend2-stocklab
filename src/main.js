import './scss/main.scss';
import { Offcanvas, Tooltip } from 'bootstrap'; // Offcanvas activa sus atributos data-bs-*
import { initThemeToggle } from './js/theme.js';

initThemeToggle();
document.querySelectorAll('[data-bs-toggle="tooltip"]').forEach((el) => new Tooltip(el));