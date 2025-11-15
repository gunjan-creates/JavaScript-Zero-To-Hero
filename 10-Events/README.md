# Events in JavaScript

Events are actions or occurrences that happen in the browser, which JavaScript can respond to.

## Event Types

### Mouse Events
- `click` - Element is clicked
- `dblclick` - Element is double-clicked
- `mouseenter` - Mouse enters element
- `mouseleave` - Mouse leaves element
- `mousemove` - Mouse moves over element

### Keyboard Events
- `keydown` - Key is pressed down
- `keyup` - Key is released
- `keypress` - Key is pressed (deprecated)

### Form Events
- `submit` - Form is submitted
- `change` - Input value changes
- `focus` - Element gains focus
- `blur` - Element loses focus
- `input` - Input value changes (real-time)

### Window Events
- `load` - Page finishes loading
- `resize` - Window is resized
- `scroll` - Page is scrolled

## Event Handling

### Inline Event Handlers
`<button onclick="function()">Click</button>`

### Event Listener
`element.addEventListener('event', function)`

### Event Object
Contains information about the event

## Event Concepts

### Event Bubbling
Events propagate from child to parent

### Event Capturing
Events propagate from parent to child

### preventDefault()
Prevents default behavior

### stopPropagation()
Stops event bubbling

## Examples
Check the example files in this folder to see events in action!
