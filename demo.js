import simpleSelect from "./select.js"

const selectElements = document.querySelectorAll('[data-custom]');

selectElements.forEach(selectElement => {
    new simpleSelect(selectElement);
});