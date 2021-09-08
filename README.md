# Component Pouch

Every wizard needs a component pouch -- Web Components for your Foundry VTT modules and systems!

## Installation

`todo`

## Usage

Once installed, your components will be available anywhere where you can write HTML -- even in your Handlebars templates. You can also find them on `window.COMPONENTPOUCH` if you need to extend or make changes to anything.

Using a component is pretty easy:
```html
<section class="some-character-sheet-section">
  <pouch-accordion>
    <pouch-accordion-item title="Stats">
      Components that can accept slotted content, like `pouch-accordion-item`, can accept arbitrary text
    </pouch-accordion-item>
    <pouch-accordion-item title="equipment">
      <p>They can also</p>
      <ul>
        <li>accept</li>
        <li>html</li>
        <li>content</li>
      </ul>
    </pouch-accordion-item>
  </pouch-accordion>
</section>
```

## Contributing

Pull requests are welcome. For major changes, please open an issue first to discuss what you would like to change.

### Development

This repository uses [Lerna](https://lerna.js.org/) to manage packages and dependencies. After cloning this repository, you can get started by running the following from the repo root:

```bash
npm install
npx lerna bootstrap
npx lerna run storybook
``` 

This will install the root project dependencies, install child dependencies (including packages we have defined ourselves through Lerna), and start the Storybook server. Afterwards, you can copy one of the existing folders in `packages` to create your own component (or, if you have `lerna-wizard`, you can use that to create a new package!)

### Building

With all dependencies installed, run `npm run build` to build the bundle, in both expanded and minified variants.

## License
[MIT](https://choosealicense.com/licenses/mit/)