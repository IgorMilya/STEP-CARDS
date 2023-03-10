export const createInput = (labelSelector, inputSelectors, type, placeholder, pattern) => `
<label class='${labelSelector}'>
     <input class='${inputSelectors}' type='${type}' required pattern='${pattern}' placeholder='${placeholder}'>
</label>
`
