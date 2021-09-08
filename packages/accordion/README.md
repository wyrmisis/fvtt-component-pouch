# Accordion

`<pouch-accordion />` is a component that, given at least one `<pouch-accordion-items />`, will create an expandable vertical UI element.

## Properties

### `pouch-accordion`

| Name    | Type      | Description                                                | Default |
| ------- | --------- | ---------------------------------------------------------- | ------- |
| clamped | `boolean` | If true, the accordion will only open one panel at a time. | `false` |

### `pouch-accordion-item`

| Name            | Type       | Description                                              | Default         |
| --------------- | ---------  | -------------------------------------------------------  | --------------- |
| title           | `string`   | The title displayed inside the accordion item's heading. | `Missing Title` |
| aria-expanded   | `boolean`  | Determines if the accordion item is expanded.            | `false`         |

## CSS Variables

| Name                                 | Description                                                                          |
| :--:                                 | :--:                                                                                 |
| --accordion-item-max-height          | The maximum height of an accordion drawer.                                           |
| --accordion-heading-background       | The background of the heading. This can accept any value that `background` can.      |
| --accordion-heading-font-family      | The heading dont family.                                                             |
| --accordion-heading-font-color       | The heading font color.                                                              |
| --accordion-heading-font-size        | The heading font size.                                                               |
| --accordion-body-background          | The background of the content area. This can accept any value that `background` can. |
| --accordion-body-font-family         | The content area dont family.                                                        |
| --accordion-body-font-color          | The content area font color.                                                         |
| --accordion-body-font-size           | The content area font size.       

## Slots

### `pouch-accordion`

| Name    | Description                                              | Default                   |
| ------- | -------------------------------------------------------- | ------------------------- |
| Default | A container for the list of `<pouch-accordion-items />`. | `Missing accordion items` |

### `pouch-accordion-item`

| Name    | Description                                                                                                      | Default           |
| ------- | ---------------------------------------------------------------------------------------------------------------- | ----------------- |
| Default | The accordion item's body. It can contain anything from a line of text to more complex compositions, like forms. | `Missing Content` |