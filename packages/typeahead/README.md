# Typeahead

`<pouch-typeahead />` is a component that, given a set of key-value pairs, will create an input field that allows you to search for and select keys from the provided object.

An example key-value structure that you can pass in could look something like this:

```json
{
  "someRandomIdNumberOne": "Fancy Named Label For Option One"
  "asdfghjkl": "A Label For Option Two"
}
```

## Properties

| Name    | Type      | Description                                                | Default |
| ------- | --------- | ---------------------------------------------------------- | ------- |
| options | `object`  | An object of key-value pairs. The key can be any valid JavaScript object key name, while the value should be a `String` or `Number` | `{}` |
| value   | `string`  | A comma-separated list of the keys selected in the typeahead. | `""` |
| name    | `string`  | The field's name; it should map to a data property in your Foundry application. | `""` |

## CSS Variables

### The input field

| Name                                 | Description                                                                          |
| :--:                                 | :--:                                                                                 |
| --typeahead-input-field-color | The text color for the input field that filters through options. |
| --typeahead-input-field-background | The background for the input field that filters through options. |
| --typeahead-input-field-border | The border for the input field that filters through options. |
| --typeahead-input-field-border-radius | The corner radius of the border for the input field that filters through options. |
| --typeahead-input-field-font-family | The font family for the input field that filters through options. |

### The selected items in the input field

| Name                                 | Description                                                                          |
| :--:                                 | :--:                                                                                 |
| --typeahead-input-selected-color | The text color for a selected option that's displayed in the input field of the component. |
| --typeahead-input-selected-background | The background for a selected option that's displayed in the input field of the component. |
| --typeahead-input-selected-border | The border for a selected option that's displayed in the input field of the component. |
| --typeahead-input-selected-border-radius | The corner radius of the border for  a selected option that's displayed in the input field of the component. |
| --typeahead-input-selected-font-family | The font family for a selected option that's displayed in the input field of the component. |
| --typeahead-input-selected-remove-button-color | The text color for the remove button on a selected option that sits in the component's input field. |
| --typeahead-input-selected-remove-button-background | The background for the remove button on a selected option that sits in the component's input field. |
| --typeahead-input-selected-remove-button-font-family | The font family for the remove button on a selected option that sits in the component's input field. |

### The option list

| Name                                 | Description                                                                          |
| :--:                                 | :--:                                                                                 |
| --typeahead-option-color | The text color for an unselected typeahead option. |
| --typeahead-option-background | The background for an unselected typeahead option. |
| --typeahead-option-border | The border for an unselected typeahead option. |
| --typeahead-option-font-family | The font family for an unselected typeahead option. |
| --typeahead-option-selected-color | The text color for a selected typeahead option. |
| --typeahead-option-selected-background | The background for a selected typeahead option. |
| --typeahead-option-selected-border | The border for a selected typeahead option. |
| --typeahead-option-selected-font-family | The font family for a selected typeahead option. |
| --typeahead-option-selected-icon | The icon/text used to denote that this option was selected. |
| --typeahead-option-selected-icon-color | The color of the selected icon/text. |
| --typeahead-option-hover-background | The background for an option that has been hovered over. |
