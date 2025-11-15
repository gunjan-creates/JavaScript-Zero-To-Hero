// JavaScript Events

console.log("Events Examples Loaded");

// 1. Mouse Events
const clickBtn = document.getElementById('clickBtn');
const dblClickBtn = document.getElementById('dblClickBtn');
const hoverBox = document.getElementById('hoverBox');
const mouseOutput = document.getElementById('mouseOutput');

clickBtn.addEventListener('click', function() {
  mouseOutput.textContent = 'Button clicked!';
  console.log('Click event triggered');
});

dblClickBtn.addEventListener('dblclick', function() {
  mouseOutput.textContent = 'Button double-clicked!';
  console.log('Double-click event triggered');
});

hoverBox.addEventListener('mouseenter', function() {
  this.style.backgroundColor = '#FF9800';
  mouseOutput.textContent = 'Mouse entered the box';
});

hoverBox.addEventListener('mouseleave', function() {
  this.style.backgroundColor = '#4CAF50';
  mouseOutput.textContent = 'Mouse left the box';
});

hoverBox.addEventListener('mousemove', function(event) {
  mouseOutput.textContent = `Mouse position: X=${event.offsetX}, Y=${event.offsetY}`;
});

// 2. Keyboard Events
const keyInput = document.getElementById('keyInput');
const keyOutput = document.getElementById('keyOutput');

keyInput.addEventListener('keydown', function(event) {
  console.log('Key down:', event.key);
});

keyInput.addEventListener('keyup', function(event) {
  keyOutput.textContent = `Key pressed: ${event.key} | Key code: ${event.keyCode} | Current value: ${this.value}`;
});

keyInput.addEventListener('input', function(event) {
  console.log('Input changed:', this.value);
});

// 3. Form Events
const myForm = document.getElementById('myForm');
const username = document.getElementById('username');
const email = document.getElementById('email');
const formOutput = document.getElementById('formOutput');

myForm.addEventListener('submit', function(event) {
  event.preventDefault(); // Prevent form submission
  formOutput.textContent = `Form submitted! Username: ${username.value}, Email: ${email.value}`;
  console.log('Form submitted with:', { username: username.value, email: email.value });
});

username.addEventListener('focus', function() {
  this.style.backgroundColor = '#ffffcc';
  formOutput.textContent = 'Username field focused';
});

username.addEventListener('blur', function() {
  this.style.backgroundColor = 'white';
  formOutput.textContent = 'Username field lost focus';
});

email.addEventListener('change', function() {
  formOutput.textContent = `Email changed to: ${this.value}`;
});

// 4. Event Bubbling & Capturing
const parent = document.getElementById('parent');
const child = document.getElementById('child');
const bubbleOutput = document.getElementById('bubbleOutput');

// Event bubbling (default)
parent.addEventListener('click', function(event) {
  bubbleOutput.textContent = 'Parent clicked (bubbling phase)';
  console.log('Parent clicked');
});

child.addEventListener('click', function(event) {
  bubbleOutput.textContent = 'Child clicked (bubbling phase)';
  console.log('Child clicked');
  
  // Uncomment to stop event bubbling
  // event.stopPropagation();
});

// Event capturing (useCapture = true)
parent.addEventListener('click', function(event) {
  console.log('Parent clicked (capturing phase)');
}, true);

child.addEventListener('click', function(event) {
  console.log('Child clicked (capturing phase)');
}, true);

// 5. Event Delegation
const itemList = document.getElementById('itemList');
const addItemBtn = document.getElementById('addItemBtn');
const delegationOutput = document.getElementById('delegationOutput');
let itemCount = 3;

// Event delegation - attach listener to parent
itemList.addEventListener('click', function(event) {
  if (event.target.tagName === 'LI') {
    delegationOutput.textContent = `Clicked: ${event.target.textContent}`;
    event.target.style.backgroundColor = '#4CAF50';
    event.target.style.color = 'white';
    
    setTimeout(() => {
      event.target.style.backgroundColor = 'transparent';
      event.target.style.color = 'black';
    }, 1000);
  }
});

addItemBtn.addEventListener('click', function() {
  itemCount++;
  const newItem = document.createElement('li');
  newItem.textContent = `Item ${itemCount}`;
  itemList.appendChild(newItem);
  delegationOutput.textContent = `Added: Item ${itemCount}`;
});

// 6. Window Events
const windowOutput = document.getElementById('windowOutput');

window.addEventListener('resize', function() {
  windowOutput.textContent = `Window resized: ${window.innerWidth}x${window.innerHeight}`;
  console.log('Window resized:', window.innerWidth, window.innerHeight);
});

window.addEventListener('scroll', function() {
  windowOutput.textContent = `Scroll position: ${window.scrollY}px`;
});

// DOMContentLoaded event
document.addEventListener('DOMContentLoaded', function() {
  console.log('DOM fully loaded and parsed');
});

// Load event
window.addEventListener('load', function() {
  console.log('Page fully loaded (including images, stylesheets, etc.)');
});

// Custom Events Example
const customEventBtn = document.createElement('button');
customEventBtn.textContent = 'Trigger Custom Event';
customEventBtn.style.margin = '10px';
document.body.appendChild(customEventBtn);

customEventBtn.addEventListener('click', function() {
  const customEvent = new CustomEvent('myCustomEvent', {
    detail: { message: 'Custom event triggered!', timestamp: Date.now() }
  });
  document.dispatchEvent(customEvent);
});

document.addEventListener('myCustomEvent', function(event) {
  console.log('Custom event received:', event.detail);
  alert(`Custom Event: ${event.detail.message}`);
});

// Log all event listeners info
console.log("=== Event Listeners Added ===");
console.log("- Mouse events on buttons and box");
console.log("- Keyboard events on input");
console.log("- Form events on form and inputs");
console.log("- Event bubbling/capturing on parent/child");
console.log("- Event delegation on list");
console.log("- Window resize and scroll events");
