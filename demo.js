import simpleSelect from "./simple-select-js/simple-select.js"

const selectElements = document.querySelectorAll('[data-custom]');

selectElements.forEach(selectElement => {
    new simpleSelect(selectElement);
});