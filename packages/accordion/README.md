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

## Slots

### `pouch-accordion`

| Name    | Description                                              | Default                   |
| ------- | -------------------------------------------------------- | ------------------------- |
| Default | A container for the list of `<pouch-accordion-items />`. | `Missing accordion items` |

### `pouch-accordion-item`

| Name    | Description                                                                                                      | Default           |
| ------- | ---------------------------------------------------------------------------------------------------------------- | ----------------- |
| Default | The accordion item's body. It can contain anything from a line of text to more complex compositions, like forms. | `Missing Content` |