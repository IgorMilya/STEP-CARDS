export const createInput = (labelSelector, inputSelectors, type, placeholder, pattern, name) => `
<label class='${labelSelector}'>
     <input class='${inputSelectors}' name='${name}' type='${type}' pattern='${pattern}' placeholder='${placeholder}' required>
</label>
`
