export const createInput = (labelSelector, inputSelectors, type, placeholder, pattern) => `
<label class='${labelSelector}'>
     <input class='${inputSelectors}' type='${type}' pattern='${pattern}' placeholder='${placeholder}' required>
</label>
`
