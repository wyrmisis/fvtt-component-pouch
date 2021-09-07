import { css } from 'lit';

const styleVars = css`
  :host {
    --typeahead-input-field-color: #444;
    --typeahead-input-field-background: #fff;
    --typeahead-input-field-border: 1px solid #999;
    --typeahead-input-field-border-radius: 4px;
    --typeahead-input-field-font-family: "Signika", sans-serif;

    --typeahead-input-selected-color: #444;
    --typeahead-input-selected-background: #aaa;
    --typeahead-input-selected-border: 1px solid #999;
    --typeahead-input-selected-border-radius: 1em;
    --typeahead-input-selected-font-family: "Signika", sans-serif;

    --typeahead-input-selected-remove-button-color: #444;
    --typeahead-input-selected-remove-button-background: #fff;
    --typeahead-input-selected-remove-button-font-family: "Signika", sans-serif;

    --typeahead-option-color: #444;
    --typeahead-option-background: #ccc;
    --typeahead-option-border: 1px solid #999;
    --typeahead-option-font-family: "Signika", sans-serif;

    --typeahead-option-selected-color: #444;
    --typeahead-option-selected-background: #aaa;
    --typeahead-option-selected-border: 1px solid #999;
    --typeahead-option-selected-font-family: "Signika", sans-serif;
    
    --typeahead-option-selected-icon: "✓";
    --typeahead-option-selected-icon-color: #444;

    --typeahead-option-hover-background: #999;
  }
`;

export default styleVars;