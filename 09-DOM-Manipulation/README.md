# DOM Manipulation in JavaScript

The Document Object Model (DOM) is a programming interface for HTML documents. JavaScript can manipulate the DOM to change content, structure, and styles.

## Selecting Elements

### By ID
`document.getElementById('id')`

### By Class
`document.getElementsByClassName('class')`

### By Tag
`document.getElementsByTagName('tag')`

### Query Selector
`document.querySelector('.class')` - First match
`document.querySelectorAll('.class')` - All matches

## Modifying Elements

### Content
- `innerHTML` - Get/set HTML content
- `textContent` - Get/set text content
- `innerText` - Get/set visible text

### Attributes
- `getAttribute()` - Get attribute value
- `setAttribute()` - Set attribute value
- `removeAttribute()` - Remove attribute

### Styles
- `element.style.property` - Inline styles
- `element.classList` - Manage CSS classes

## Creating Elements

### createElement()
Create new element

### appendChild()
Add child element

### removeChild()
Remove child element

## Examples
Check the example files in this folder to see DOM manipulation in action!
