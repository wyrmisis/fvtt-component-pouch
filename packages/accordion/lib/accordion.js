import {html, css, LitElement} from 'lit';
import {customElement, property} from 'lit/decorators.js';

@customElement('pouch-accordion')
export class Accordion extends LitElement {
  static styles = css`
    :host {}
  `;

  @property({type: Boolean})
  clamped = false;

  toggle(event) {
    const item = event.target;
    const parent = event.target.parentNode;

    if (item.nodeName.toLowerCase() !== 'pouch-accordion-item')
      return false;

    if (parent.clamped)
      Array.from(parent.querySelectorAll('pouch-accordion-item'))
        .filter(node => node !== item)
        .forEach(node => requestAnimationFrame(
          () => node.removeAttribute('aria-expanded')
        ));

    requestAnimationFrame(() =>
      item.hasAttribute('aria-expanded')
        ? item.removeAttribute('aria-expanded')
        : item.setAttribute('aria-expanded', '')
    );
  }

  render() {
    return html`
      <div class="accordion" @click="${this.toggle}">
        <slot>Missing accordion items</slot>
      </div>
    `;
  }
}

@customElement('pouch-accordion-item')
export class AccordionItem extends LitElement {
  @property({type: String})
  title = 'Missing Title';

  static styles = css`
    :host {
      --accordion-item-max-height: 300px;

      --accordion-heading-background-color: #aaa;
      --accordion-heading-font-family: "Signika", sans-serif;
      --accordion-heading-font-color: #23221d;
      --accordion-heading-font-size: 1.125em;

      --accordion-body-background-color: #ccc;
      --accordion-body-font-family: "Signika", sans-serif;
      --accordion-body-font-color: #191813;
      --accordion-body-font-size: 1em;
    }

    :host header {
      font-family: var(--accordion-heading-font-family);
      font-size: var(--accordion-heading-font-size);
      color: var(--accordion-heading-font-color);
      background: var(--accordion-heading-background-color);
    }

    :host header:hover {
      cursor: pointer;
    }

    :host header, 
    :host([aria-expanded]) main {
      padding: .5em .25em;
    }

    :host main {
      font-family: var(--accordion-body-font-family);
      font-size: var(--accordion-body-font-size);
      color: var(--accordion-body-font-color);
      background: var(--accordion-body-background-color);

      max-height: 0;
      transition: max-height .3s ease-in-out,
                  margin .3s ease-in-out,
                  padding .3s ease-in-out;
      overflow: hidden;
      margin: 0;
      padding: 0 .25em;
    }

    :host([aria-expanded]) main {
      max-height: var(--accordion-item-max-height);
      margin: 0 .5em .5em;
    }
  `;

  render() {
    return html`
      <div class="accordion__item" part="container">
        <header part="title">
          ${this.title}
        </header>
        <main part="content">
          <slot>Missing Content</slot>
        </main>
      </div>
    `;
  }
}