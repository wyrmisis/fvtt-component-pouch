import {html, css, LitElement} from 'lit';
import {customElement, state } from 'lit/decorators.js';
import styleVars from './styleVars.js';

@customElement('pouch-filter-list')
export default class FilterList extends LitElement {
  // Style related properties
  static styles = [
    styleVars,
    css`
    :host {
      position: relative;
    }

    :host .filter-list__query-input {
      display: flex;
    }

    :host input {
      margin-bottom: .5em;
      width: 100%;
      padding: .25em .5em;

      font-family: var(--filter-list-input-font-family);
      font-size: var(--filter-list-input-font-size);
      color: var(--filter-list-input-font-color);
      background: var(--filter-list-input-background);
    }

    :host ul {
      margin: 0;
      padding: 0;
    }

    ::slotted(li) {
      transition: max-height 333ms ease-in-out,
                  margin 333ms ease-in-out,
                  padding-top 333ms ease-in-out,
                  padding-bottom 333ms ease-in-out,
                  opacity 333ms ease-in-out;

      max-height: 300px;
      overflow-y: hidden;
      margin-bottom: .25em;
      padding: .25em .5em;

      opacity: 1;

      font-family: var(--filter-list-item-font-family);
      font-size: var(--filter-list-item-font-size);
      color: var(--filter-list-item-font-color);
      background: var(--filter-list-item-background);
    }

    ::slotted(li[aria-hidden]) {
      max-height: 0;
      margin: 0;
      padding-top: 0;
      padding-bottom: 0;
      opacity: 0;
    }
  `];

  @state()
  _query = '';

  _onQuery(evt) {
    this._query = evt.target.value;
    this.requestUpdate();
  }

  render() {
    requestAnimationFrame(() =>
      Array.from(this.querySelectorAll('li')).map(item => {
        item.innerHTML.toLowerCase().includes(this._query.toLowerCase())
          ? item.removeAttribute('aria-hidden')
          : item.setAttribute('aria-hidden', '');

        return item;
      })
    );

    return html`
      <div class="filter-list__query-input">
        <input
          part="query-field"
          type="text"
          placeholder="Filter"
          @keyup="${(evt) => this._onQuery(evt)}" />
      </div>
      <ul part="list">
        <slot></slot>
      </ul>
    `;
  }
}
