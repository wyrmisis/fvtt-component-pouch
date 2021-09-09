# Filter List

`<pouch-filter-list />` is a component that, given at least one `<li />`, will create a filterable unordered list element.

## CSS Variables

| Name                            | Description                                     |
| :--:                            | :--:                                            |
| --filter-list-input-font-family | The query input field's font family             |
| --filter-list-input-font-size   | The query input field's font size               |
| --filter-list-input-font-color  | The query input field's font color              |
| --filter-list-input-background  | The query input field's background              |
| --filter-list-item-font-family  | The individual filtered list items' font family |
| --filter-list-item-font-size    | The individual filtered list items' font size   |
| --filter-list-item-font-color   | The individual filtered list items' font color  |
| --filter-list-item-background   | The individual filtered list items' background  |

## Slots

| Name    | Description                                              | Default                   |
| ------- | -------------------------------------------------------- | ------------------------- |
| Default | A container for the list of `<li />` elements. | `""` |