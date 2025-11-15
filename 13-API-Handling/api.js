// API Handling in JavaScript
// Using JSONPlaceholder - a free fake API for testing

const API_BASE_URL = 'https://jsonplaceholder.typicode.com';

console.log("API Handling Examples Loaded");

// 1. Fetch Users (GET Request)
function fetchUsers() {
  const output = document.getElementById('usersOutput');
  output.innerHTML = '<div class="loading"></div> Loading...';
  
  fetch(`${API_BASE_URL}/users`)
    .then(response => {
      console.log('Response status:', response.status);
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }
      return response.json();
    })
    .then(users => {
      console.log('Users fetched:', users);
      let html = `<strong>Fetched ${users.length} users:</strong>\n\n`;
      users.slice(0, 5).forEach(user => {
        html += `ID: ${user.id}\nName: ${user.name}\nEmail: ${user.email}\nCity: ${user.address.city}\n\n`;
      });
      output.innerHTML = html;
    })
    .catch(error => {
      console.error('Error:', error);
      output.innerHTML = `<span class="error">Error: ${error.message}</span>`;
    });
}

// 2. Fetch Single User (GET with ID)
function fetchSingleUser() {
  const userId = document.getElementById('userId').value;
  const output = document.getElementById('singleUserOutput');
  
  if (!userId) {
    output.innerHTML = '<span class="error">Please enter a user ID</span>';
    return;
  }
  
  output.innerHTML = '<div class="loading"></div> Loading...';
  
  fetch(`${API_BASE_URL}/users/${userId}`)
    .then(response => response.json())
    .then(user => {
      console.log('User fetched:', user);
      const html = `
<div class="user-card">
  <strong>ID:</strong> ${user.id}
  <strong>Name:</strong> ${user.name}
  <strong>Username:</strong> ${user.username}
  <strong>Email:</strong> ${user.email}
  <strong>Phone:</strong> ${user.phone}
  <strong>Website:</strong> ${user.website}
  <strong>Company:</strong> ${user.company.name}
</div>
      `;
      output.innerHTML = html;
    })
    .catch(error => {
      console.error('Error:', error);
      output.innerHTML = `<span class="error">Error: ${error.message}</span>`;
    });
}

// 3. Create New User (POST Request)
function createUser() {
  const name = document.getElementById('newUserName').value;
  const email = document.getElementById('newUserEmail').value;
  const output = document.getElementById('createUserOutput');
  
  if (!name || !email) {
    output.innerHTML = '<span class="error">Please fill all fields</span>';
    return;
  }
  
  output.innerHTML = '<div class="loading"></div> Creating user...';
  
  const newUser = {
    name: name,
    email: email,
    username: name.toLowerCase().replace(/\s/g, ''),
  };
  
  fetch(`${API_BASE_URL}/users`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(newUser)
  })
    .then(response => response.json())
    .then(data => {
      console.log('User created:', data);
      output.innerHTML = `
<span class="success">User created successfully!</span>

ID: ${data.id}
Name: ${data.name}
Email: ${data.email}
Username: ${data.username}

Note: This is a fake API, so data is not actually saved.
      `;
    })
    .catch(error => {
      console.error('Error:', error);
      output.innerHTML = `<span class="error">Error: ${error.message}</span>`;
    });
}

// 4. Update User (PUT Request)
function updateUser() {
  const userId = document.getElementById('updateUserId').value;
  const newName = document.getElementById('updateUserName').value;
  const output = document.getElementById('updateUserOutput');
  
  if (!userId || !newName) {
    output.innerHTML = '<span class="error">Please fill all fields</span>';
    return;
  }
  
  output.innerHTML = '<div class="loading"></div> Updating user...';
  
  const updatedUser = {
    id: userId,
    name: newName,
    email: 'updated@example.com'
  };
  
  fetch(`${API_BASE_URL}/users/${userId}`, {
    method: 'PUT',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(updatedUser)
  })
    .then(response => response.json())
    .then(data => {
      console.log('User updated:', data);
      output.innerHTML = `
<span class="success">User updated successfully!</span>

ID: ${data.id}
Name: ${data.name}
Email: ${data.email}

Note: This is a fake API, so changes are not persisted.
      `;
    })
    .catch(error => {
      console.error('Error:', error);
      output.innerHTML = `<span class="error">Error: ${error.message}</span>`;
    });
}

// 5. Delete User (DELETE Request)
function deleteUser() {
  const userId = document.getElementById('deleteUserId').value;
  const output = document.getElementById('deleteUserOutput');
  
  if (!userId) {
    output.innerHTML = '<span class="error">Please enter a user ID</span>';
    return;
  }
  
  output.innerHTML = '<div class="loading"></div> Deleting user...';
  
  fetch(`${API_BASE_URL}/users/${userId}`, {
    method: 'DELETE'
  })
    .then(response => {
      console.log('Delete response status:', response.status);
      return response.json();
    })
    .then(data => {
      console.log('User deleted:', data);
      output.innerHTML = `
<span class="success">User ${userId} deleted successfully!</span>

Note: This is a fake API, so the user is not actually deleted.
      `;
    })
    .catch(error => {
      console.error('Error:', error);
      output.innerHTML = `<span class="error">Error: ${error.message}</span>`;
    });
}

// 6. Fetch Posts (Async/Await)
async function fetchPostsAsync() {
  const output = document.getElementById('postsOutput');
  output.innerHTML = '<div class="loading"></div> Loading...';
  
  try {
    const response = await fetch(`${API_BASE_URL}/posts?_limit=5`);
    
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }
    
    const posts = await response.json();
    console.log('Posts fetched:', posts);
    
    let html = `<strong>Fetched ${posts.length} posts:</strong>\n\n`;
    posts.forEach(post => {
      html += `ID: ${post.id}\nTitle: ${post.title}\nBody: ${post.body.substring(0, 50)}...\n\n`;
    });
    output.innerHTML = html;
  } catch (error) {
    console.error('Error:', error);
    output.innerHTML = `<span class="error">Error: ${error.message}</span>`;
  }
}

// 7. Error Handling
async function fetchWithError() {
  const output = document.getElementById('errorOutput');
  output.innerHTML = '<div class="loading"></div> Attempting to fetch...';
  
  try {
    // Intentionally use invalid endpoint
    const response = await fetch(`${API_BASE_URL}/invalid-endpoint`);
    
    if (!response.ok) {
      throw new Error(`HTTP ${response.status}: ${response.statusText}`);
    }
    
    const data = await response.json();
    output.innerHTML = JSON.stringify(data, null, 2);
  } catch (error) {
    console.error('Caught error:', error);
    output.innerHTML = `
<span class="error">Error caught successfully!</span>

Error message: ${error.message}

This demonstrates proper error handling in API calls.
Error handling is crucial for:
- Network failures
- Invalid endpoints
- Server errors
- Timeout issues
    `;
  }
}

// Console examples
console.log("\n=== FETCH API EXAMPLES ===\n");

// Basic GET request
console.log("Example 1: Basic GET request");
fetch(`${API_BASE_URL}/users/1`)
  .then(response => response.json())
  .then(data => console.log("User 1:", data))
  .catch(error => console.error("Error:", error));

// Async/Await example
console.log("\nExample 2: Async/Await");
async function getUserPosts(userId) {
  try {
    const response = await fetch(`${API_BASE_URL}/users/${userId}/posts`);
    const posts = await response.json();
    console.log(`User ${userId} has ${posts.length} posts`);
    return posts;
  } catch (error) {
    console.error("Error fetching user posts:", error);
  }
}

getUserPosts(1);

// Multiple parallel requests
console.log("\nExample 3: Multiple parallel requests");
async function fetchMultiple() {
  try {
    const [users, posts, comments] = await Promise.all([
      fetch(`${API_BASE_URL}/users?_limit=3`).then(r => r.json()),
      fetch(`${API_BASE_URL}/posts?_limit=3`).then(r => r.json()),
      fetch(`${API_BASE_URL}/comments?_limit=3`).then(r => r.json())
    ]);
    
    console.log("Fetched:", {
      users: users.length,
      posts: posts.length,
      comments: comments.length
    });
  } catch (error) {
    console.error("Error:", error);
  }
}

fetchMultiple();

console.log("\nNote: Check the UI to interact with API examples!");
