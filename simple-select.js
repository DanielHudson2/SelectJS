export default class simpleSelect {
    constructor(element) {
        this.element = element;
        this.options = formatOptions(element.querySelectorAll('option'));

        this.simpleSelectJsElement = document.createElement('div');
        this.simpleSelectJsLabel = document.createElement('span');
        this.simpleSelectJsOptions = document.createElement('ul');

        setupCustomElement(this);

        element.style.display = 'none';
        element.after(this.simpleSelectJsElement);
    }

    get selectedOption() {
        return this.options.find(option => option.selected);
    }

    
    selectValue(value) {
        const newSelectedOption = this.options.find(option => {
            return option.value === value;
        });
        const prevSelectedOption = this.selectedOption;
        prevSelectedOption.selected = false;
        prevSelectedOption.element.selected = false;

        newSelectedOption.selected = true;
        newSelectedOption.element.selected = true;

        this.simpleSelectJsLabel.innerText = newSelectedOption.label;
    }
}

function setupCustomElement(select) {
    select.simpleSelectJsElement.classList.add('simple-select-js-container')
    select.simpleSelectJsElement.tabIndex = 0;
    select.simpleSelectJsLabel.classList.add('simple-select-js-label')
    select.simpleSelectJsOptions.classList.add('simple-select-js-options')

    select.simpleSelectJsLabel.innerText = select.selectedOption.label;

    select.options.forEach(option => {
        const simpleSelectJsOption = document.createElement('li');
        simpleSelectJsOption.classList.add('simple-select-js-option');
        simpleSelectJsOption.classList.toggle('selected', option.selected);
        simpleSelectJsOption.innerText = option.label;
        simpleSelectJsOption.dataset.value = option.value;
        simpleSelectJsOption.addEventListener('click', () => {
            select.simpleSelectJsOptions.querySelector(`[data-value='${select.selectedOption.value}']`).classList.remove('selected')
            select.selectValue(option.value);
            simpleSelectJsOption.classList.add('selected');
            select.simpleSelectJsOptions.classList.remove('active');
        })
        select.simpleSelectJsOptions.append(simpleSelectJsOption);
    });

    select.simpleSelectJsElement.append(select.simpleSelectJsLabel)
    select.simpleSelectJsElement.append(select.simpleSelectJsOptions)

    select.simpleSelectJsLabel.addEventListener('click', () => {
        select.simpleSelectJsOptions.classList.toggle('active');
    });

    select.simpleSelectJsElement.addEventListener('blur', () => {
        select.simpleSelectJsOptions.classList.remove('active');
    });
}

function formatOptions(optionElements) {
    return [...optionElements].map(optionElement => {
        return {
            value: optionElement.value,
            label: optionElement.label,
            selected: optionElement.selected,
            element: optionElement
        }
    })
}