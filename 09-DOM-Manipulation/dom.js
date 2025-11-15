// DOM Manipulation JavaScript

console.log("DOM Manipulation Examples");

// 1. Selecting Elements
function selectElements() {
  // Select by ID
  const demoElement = document.getElementById('demo');
  console.log("Selected by ID:", demoElement.textContent);

  // Select by class (returns HTMLCollection)
  const textElements = document.getElementsByClassName('text');
  console.log("Selected by class:", textElements.length, "elements");

  // Query selector (returns first match)
  const firstText = document.querySelector('.text');
  console.log("Query selector (first):", firstText.textContent);

  // Query selector all (returns NodeList)
  const allText = document.querySelectorAll('.text');
  console.log("Query selector all:", allText.length, "elements");
  
  alert("Check console for selection results!");
}

// 2. Changing Content
function changeContent() {
  const element = document.getElementById('content');
  element.textContent = "Content changed with textContent!";
}

function changeHTML() {
  const element = document.getElementById('content');
  element.innerHTML = "<strong>Content changed</strong> with <em>innerHTML</em>!";
}

// 3. Changing Styles
function changeStyle() {
  const element = document.getElementById('styledText');
  element.style.color = 'blue';
  element.style.fontSize = '24px';
  element.style.fontWeight = 'bold';
}

function toggleClass() {
  const element = document.getElementById('styledText');
  element.classList.toggle('highlight');
}

// 4. Attributes
function changeAttribute() {
  const image = document.getElementById('myImage');
  image.setAttribute('src', 'https://via.placeholder.com/150/0000FF/FFFFFF');
  image.setAttribute('alt', 'Blue placeholder');
}

// 5. Creating & Removing Elements
function addItem() {
  const input = document.getElementById('itemInput');
  const list = document.getElementById('dynamicList');
  
  if (input.value.trim() !== '') {
    // Create new list item
    const li = document.createElement('li');
    li.textContent = input.value;
    
    // Add click event to remove item
    li.onclick = function() {
      this.remove();
    };
    
    // Append to list
    list.appendChild(li);
    
    // Clear input
    input.value = '';
  } else {
    alert('Please enter an item name!');
  }
}

function removeLastItem() {
  const list = document.getElementById('dynamicList');
  if (list.lastChild) {
    list.removeChild(list.lastChild);
  } else {
    alert('No items to remove!');
  }
}

// 6. Show/Hide Elements
function toggleVisibility() {
  const element = document.getElementById('toggleText');
  element.classList.toggle('hidden');
}

// Additional DOM manipulation examples (logged to console)
document.addEventListener('DOMContentLoaded', function() {
  console.log("=== DOM Loaded ===");
  console.log("Document title:", document.title);
  console.log("All paragraphs:", document.getElementsByTagName('p').length);
  console.log("All buttons:", document.getElementsByTagName('button').length);
});

// Traversing DOM
function logDOMTraversal() {
  const container = document.querySelector('.container');
  
  console.log("Parent:", container.parentElement.tagName);
  console.log("Children:", container.children.length);
  console.log("First child:", container.firstElementChild.tagName);
  console.log("Last child:", container.lastElementChild.tagName);
  console.log("Next sibling:", container.nextElementSibling ? container.nextElementSibling.tagName : "None");
}

// Example: Modify multiple elements
function modifyMultipleElements() {
  const paragraphs = document.querySelectorAll('p');
  paragraphs.forEach((p, index) => {
    console.log(`Paragraph ${index + 1}:`, p.textContent.substring(0, 30) + '...');
  });
}

// Log some info on page load
console.log("=== Page Information ===");
console.log("URL:", window.location.href);
console.log("Title:", document.title);
console.log("Total elements:", document.getElementsByTagName('*').length);
