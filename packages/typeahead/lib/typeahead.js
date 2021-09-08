import {html, css, LitElement} from 'lit';
import {customElement, property, state} from 'lit/decorators.js';
import styleVars from './styleVars.js';

@customElement('pouch-typeahead')
export default class Typeahead extends LitElement {
  // Form related properties/methods
  static formAssociated = true;

  get form() { 
    return this._internals.form;
  }

  get type() { 
    return this.localName;
  }

  get validity() {
    return this._internals.validity;
  }

  get validationMessage() {
    return this._internals.validationMessage;
  }

  get willValidate() {
    return this._internals.willValidate;
  }

  checkValidity() { 
    return this._internals.checkValidity();
  }

  reportValidity() {
    return this._internals.reportValidity();
  }

  // Style related properties
  static styles = [
    styleVars,
    css`
    :host {
      position: relative;
    }

    :host .typeahead__input {
      display: flex;
      align-items: center;
      padding: 4px;
      
      color: var(--typeahead-input-field-color);
      background: var(--typeahead-input-field-background);
      border: var(--typeahead-input-field-border);
      border-radius: var(--typeahead-input-field-border-radius);
      font-family: var(--typeahead-input-field-font-family);
    }

    :host .typeahead__selected {
      flex: 0 1 auto;
      padding: .25em .5em;
      margin-right: .5em;

      color: var(--typeahead-input-selected-color);
      background: var(--typeahead-input-selected-background);
      border: var(--typeahead-input-selected-border);
      border-radius: var(--typeahead-input-selected-border-radius);
      font-family: var(--typeahead-input-selected-font-family);
    }

    :host .typeahead__selected button {
      border: none;
      margin-left: .25em;
      border-radius: 1em;
      font-weight: bold;

      color: var(--typeahead-input-selected-remove-button-color);
      background-color: var(--typeahead-input-selected-remove-button-background);
      font-family: var(--typeahead-input-selected-remove-button-font-family);
    }

    :host .typeahead__input pouch-typeahead-query {
      flex: 1;
      font-size: 1em;
      line-height: 1.8em;
    }

    :host .typeahead__options {
      list-style: none;
      padding: 0;
      margin: 0;
      position: relative;
      top: 100%;
      max-height: 0;
      overflow: hidden;
      transition: max-height 333ms ease-in-out;
    }

    :host(:focus-within) .typeahead__options {
      max-height: 300px;
    }

    :host .typeahead__option {
      padding: 0;
      margin-bottom: .25em;
      /* Unselected item background variable */
    }

    :host .typeahead__option button {
      border-radius: 0;
      width: 100%;
      font-size: 1em;
      line-height: 1.4em;
      text-align: left;
      padding: .25em 1em;

      color: var(--typeahead-option-color);
      background: var(--typeahead-option-background);
      border: var(--typeahead-option-border);
      font-family: var(--typeahead-option-font-family);
    }

    :host .typeahead__option[aria-selected] button {
      color: var(--typeahead-option-selected-color);
      background: var(--typeahead-option-selected-background);
      border: var(--typeahead-option-selected-border);
      font-family: var(--typeahead-option-selected-font-family);
    }

    :host .typeahead__option[aria-selected] button:before {
      position: absolute;
      left: .25em;

      content: var(--typeahead-option-selected-icon);
      color: var(--typeahead-option-selected-icon-color);
    }

    :host .typeahead__option button:hover {
      cursor: pointer;
      background: var(--typeahead-option-hover-background);
      /* Hovered item background variable */
    }
  `];

  @property()
  name = "";

  @property({reflect: true})
  value = '';

  @property({type: Object})
  options = {};

  @state()
  _query = '';

  @state()
  _internals;

  @property({attribute: false, type: Array})
  get _selected () {
    return this.value.split(',').filter(key => key);
  }

  constructor() {
    super();
    this._internals = this.attachInternals();
  }

  _onOptionClicked(evt) {
    const { optionKey } = evt.target.dataset;

    if (this._selected.includes(optionKey))
      this._removeSelection(optionKey)
    else
      this._addSelection(optionKey);

    this._notifyOfChange();
  }

  _addSelection(optionKey) {
    this.value = [...this._selected, optionKey].join(',');
  }

  _removeSelection(optionKey) {
    this.value = this._selected
      .filter(key => key !== optionKey)
      .join(',');
  }

  _notifyOfChange() {
    this.dispatchEvent(new InputEvent('change'));
    this.requestUpdate();
  }

  _onUpdateQuery(evt) {
    this._query = evt.target.value;
    this.requestUpdate();
  }

  _renderOptions() {
    let queriedOptions = (this._query)
      ? Object.keys(this.options)
        .filter(key => this.options[key].toLowerCase().includes(this._query.toLowerCase()))
        .reduce((dict, key) => ({
          ...dict,
          [key]: this.options[key]
        }), {})
      : this.options;

    return Object.keys(queriedOptions).map(key => html`
      <li
        class="typeahead__option"
        ?aria-selected="${this._selected.includes(key)}">
        <button
          @click="${this._onOptionClicked}"
          data-option-key="${key}">
          ${this.options[key]}
        </button>
      </li>
    `);
  }

  render() {
    const selectedItems = this._selected.map(key =>
      html`
        <span class="typeahead__selected">
          <span>${this.options[key]}</span>
          <button
            data-option-key="${key}"
            @click="${this._onOptionClicked}">
            &times;
          </button>
        </span>
    `);

    return html`
      <div class="typeahead__input">
        ${selectedItems}
        <pouch-typeahead-query
          name="${this.name}.query"
          @keyup="${this._onUpdateQuery}" />
      </div>
      <ul class="typeahead__options" part="options">
        ${this._renderOptions()}
      </ul>
    `;
  }
}


@customElement('pouch-typeahead-query')
class TypeaheadQuery extends LitElement {
  static styles = css`
    input {
      width: 100%;
      border: none;
      margin: 0;
      padding: 0;
      font-size: 1em;
    }

    input:focus-visible::parent {
      outline: 3px solid orange;
    }

    input:focus,
    input:focus-visible {
      outline: none;
    }
  `;

  @property({reflect: true})
  value = '';

  @property()
  name = '';

  onChange(evt) {
    this.value = evt.target.value;

    this.dispatchEvent(new InputEvent('keyup'));
  }

  render() {
    return html`<input
      type="text"
      name="${this.name}.query"
      id="${this.name}.query"
      @keyup="${this.onChange}" />
    `;
  }
}
