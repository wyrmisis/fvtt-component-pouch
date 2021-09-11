import {html, css, LitElement} from 'lit';
import {customElement, property, state } from 'lit/decorators.js';
import styleVars from './styleVars.js';

@customElement('pouch-filter-table')
export default class FilterList extends LitElement {
  // Style related properties
  static styles = [
    styleVars,
    css`
    :host {
      position: relative;
    }

    :host .filter-table {
      padding: 0;
    }

    :host .filter-table__row {
      display: grid;
      grid-template-columns: repeat(auto-fit, minmax(50px, 1fr));
    }

    :host .filter-table__column {

    }
  `];

  @property()
  name;

  @property()
  titles;

  @property()
  data = [];

  @property()
  actions;

  @property()
  templates;

  @state()
  _query = '';

  @state()
  get _titles() {
    if (this.titles) return this.titles;

    return Object.keys(this.data[0])
      .reduce(
        (titles, key) => ({ ...titles, [key]: key }),
        {}
      );
  }

  @state()
  get _titleKeys () {
    if (!this.titles) return Object.keys(this.data[0]);

    return Object.keys(this.titles);
  }

  _onQuery(evt) {
    this._query = evt.target.value;
    this.requestUpdate();
  }

  _renderHeaderCell(key) {
    console.info(this._titles, key, this._titles[key]);

    return html`
      <div
        class="filter-table__column"
        part="${this.name}-${this.key}">
        ${this._titles[key]}
      </div>
    `;
  }

  _renderHeaderRow() {
    return html`
      <li class="filter-table__row filter-table__row--header">
        ${this._titleKeys.map((key) => this._renderHeaderCell(key))}
      </li>
    `;
  }

  _renderRows() {
    return this.data.map(item => html`
      <li class="filter-table__row">
        ${this._titleKeys.map(key => html`
          <div class="filter-table__column">
            ${this.templates?.[key]
              ? this.templates[key](item[key], key, item)
              : item[key]
            }
          </div>
        `)}
      </li>
    `);
  }

  _renderEmpty() {

  }

  _renderNoMatches() {

  }

  render() {
    // requestAnimationFrame(() =>
    //   Array.from(this.querySelectorAll('li')).map(item => {
    //     item.innerHTML.toLowerCase().includes(this._query.toLowerCase())
    //       ? item.removeAttribute('aria-hidden')
    //       : item.setAttribute('aria-hidden', '');

    //     return item;
    //   })
    // );

    return html`
      <div class="filter-list__query-input">
        <input
          part="query-field"
          type="text"
          placeholder="Filter"
          @keyup="${(evt) => this._onQuery(evt)}" />
      </div>
      <ul class="filter-table" part="list">
        ${this._renderHeaderRow()}
        ${this._renderRows()}
      </ul>
    `;
  }
}
