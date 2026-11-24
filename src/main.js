import './scss/main.scss';
import { Offcanvas, Tooltip } from 'bootstrap'; // Offcanvas activa sus atributos data-bs-*

document.querySelectorAll('[data-bs-toggle="tooltip"]').forEach((el) => new Tooltip(el));