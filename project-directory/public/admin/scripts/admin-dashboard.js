// // Fetch and display all art posts
// async function fetchArt() {
//   try {
//     const response = await fetch('/admin/art');
//     const artList = await response.json();
//     const artListDiv = document.getElementById('artList');
//     artListDiv.innerHTML = '';
//     artList.forEach((art) => {
//       artListDiv.innerHTML += `
//         <div>
//           <h3>${art.title}</h3>
//           <p>${art.description}</p>
//           <p>Price: $${art.price}</p>
//           <button onclick="deleteArt('${art._id}')">Delete</button>
//         </div>
//       `;
//     });
//   } catch (error) {
//     console.error('Error fetching art posts:', error);
//   }
// }

// // Fetch and display all registered users
// async function fetchUsers() {
//   try {
//     const response = await fetch('/admin/users');
//     const users = await response.json();
//     const userTableBody = document.querySelector('#userTable tbody');
//     userTableBody.innerHTML = '';
//     users.forEach((user) => {
//       userTableBody.innerHTML += `
//         <tr>
//           <td>${user.firstName}</td>
//           <td>${user.email}</td>
//           <td>${user.userType}</td>
//           <td>
//             <button onclick="deleteUser('${user._id}')">Delete</button>
//           </td>
//         </tr>
//       `;
//     });
//   } catch (error) {
//     console.error('Error fetching users:', error);
//   }
// }

// // Add new art
// document.getElementById('addArtForm').addEventListener('submit', async (event) => {
//   event.preventDefault();
//   const formData = new FormData(event.target);
//   const formObject = Object.fromEntries(formData);

//   try {
//     const response = await fetch('/admin/add-art', {
//       method: 'POST',
//       body: JSON.stringify(formObject),
//       headers: { 'Content-Type': 'application/json' },
//     });
//     const result = await response.json();
//     alert(result.message); // Alert on success or error message
//     fetchArt(); // Refresh the art list after adding new art
//   } catch (error) {
//     console.error('Error adding art:', error);
//     alert('Failed to add art. Please try again.');
//   }
// });

// // Delete art
// async function deleteArt(artId) {
//   try {
//     const response = await fetch(`/admin/delete-art/${artId}`, { method: 'DELETE' });
//     const result = await response.json();
//     alert(result.message);
//     fetchArt(); // Refresh the art list after deletion
//   } catch (error) {
//     console.error('Error deleting art:', error);
//     alert('Failed to delete art. Please try again.');
//   }
// }

// // Delete user
// async function deleteUser(userId) {
//   try {
//     const response = await fetch(`/admin/delete-user/${userId}`, { method: 'DELETE' });
//     const result = await response.json();
//     alert(result.message);
//     fetchUsers(); // Refresh the user list after deletion
//   } catch (error) {
//     console.error('Error deleting user:', error);
//     alert('Failed to delete user. Please try again.');
//   }
// }

// // Initialize dashboard with data
// fetchArt();
// fetchUsers();


//___________________________________________________________________________________________________________________




// // Fetch and display all art posts
// async function fetchArt() {
//   try {
//     const response = await fetch('/admin/art');
//     const artList = await response.json();
//     const artListDiv = document.getElementById('artList');
//     artListDiv.innerHTML = '';
//     artList.forEach((art) => {
//       artListDiv.innerHTML += `
//         <div>
//           <h3>${art.title}</h3>
//           <p>${art.description}</p>
//           <p>Price: $${art.price}</p>
//           <img src="/uploads/${art.image}" alt="${art.title}" style="max-width: 200px;" />
//           <button onclick="deleteArt('${art._id}')">Delete</button>
//         </div>
//       `;
//     });
//   } catch (error) {
//     console.error('Error fetching art posts:', error);
//   }
// }

// // Fetch and display all registered users
// async function fetchUsers() {
//   try {
//     const response = await fetch('/admin/users');
//     const users = await response.json();
//     const userTableBody = document.querySelector('#userTable tbody');
//     userTableBody.innerHTML = '';
//     users.forEach((user) => {
//       userTableBody.innerHTML += `
//         <tr>
//           <td>${user.firstName}</td>
//           <td>${user.email}</td>
//           <td>${user.userType}</td>
//           <td>
//             <button onclick="deleteUser('${user._id}')">Delete</button>
//           </td>
//         </tr>
//       `;
//     });
//   } catch (error) {
//     console.error('Error fetching users:', error);
//   }
// }

// // Add new art
// document.getElementById('addArtForm').addEventListener('submit', async (event) => {
//   event.preventDefault();

//   const formData = new FormData(event.target); // This will automatically include the file upload

//   try {
//     const response = await fetch('/admin/add-art', {
//       method: 'POST',
//       body: formData, // Send FormData directly to the server
//     });
//     const result = await response.json();
//     alert(result.message); // Alert on success or error message
//     fetchArt(); // Refresh the art list after adding new art
//     event.target.reset(); // Reset the form after successful submission
//   } catch (error) {
//     console.error('Error adding art:', error);
//     alert('Failed to add art. Please try again.');
//   }
// });

// // Delete art
// async function deleteArt(artId) {
//   try {
//     const response = await fetch(`/admin/delete-art/${artId}`, { method: 'DELETE' });
//     const result = await response.json();
//     alert(result.message);
//     fetchArt(); // Refresh the art list after deletion
//   } catch (error) {
//     console.error('Error deleting art:', error);
//     alert('Failed to delete art. Please try again.');
//   }
// }

// // Delete user
// async function deleteUser(userId) {
//   try {
//     const response = await fetch(`/admin/delete-user/${userId}`, { method: 'DELETE' });
//     const result = await response.json();
//     alert(result.message);
//     fetchUsers(); // Refresh the user list after deletion
//   } catch (error) {
//     console.error('Error deleting user:', error);
//     alert('Failed to delete user. Please try again.');
//   }
// }

// // Initialize dashboard with data
// fetchArt();
// fetchUsers();







// _______________________________________________________________________

// // Fetch and display all art posts
// async function fetchArt() {
//   try {
//     const response = await fetch('/admin/art');
//     const artList = await response.json();
//     const artListDiv = document.getElementById('artList');
//     artListDiv.innerHTML = '';
//     artList.forEach((art) => {
//       artListDiv.innerHTML += `
//         <div>
//           <h3>${art.title}</h3>
//           <p>${art.description}</p>
//           <p>Price: $${art.price}</p>
//           <img src="/uploads/${art.image}" alt="${art.title}" style="max-width: 200px;" />
//           <button onclick="deleteArt('${art._id}')">Delete</button>
//         </div>
//       `;
//     });
//   } catch (error) {
//     console.error('Error fetching art posts:', error);
//   }
// }

// // Fetch and display all registered users
// async function fetchUsers() {
//   try {
//     const response = await fetch('/admin/users');
//     const users = await response.json();
//     const userTableBody = document.querySelector('#userTable tbody');
//     userTableBody.innerHTML = '';
//     users.forEach((user) => {
//       userTableBody.innerHTML += `
//         <tr>
//           <td>${user.firstName}</td>
//           <td>${user.email}</td>
//           <td>${user.userType}</td>
//           <td>
//             <button onclick="deleteUser('${user._id}')">Delete</button>
//           </td>
//         </tr>
//       `;
//     });
//   } catch (error) {
//     console.error('Error fetching users:', error);
//   }
// }

// // Add new art
// document.getElementById('addArtForm').addEventListener('submit', async (event) => {
//   event.preventDefault();

//   const formData = new FormData(event.target); // This will automatically include the file upload

//   try {
//     const response = await fetch('/admin/add-art', {
//       method: 'POST',
//       body: formData, // Send FormData directly to the server
//     });
//     const result = await response.json();
//     alert(result.message); // Alert on success or error message
//     fetchArt(); // Refresh the art list after adding new art
//     event.target.reset(); // Reset the form after successful submission
//   } catch (error) {
//     console.error('Error adding art:', error);
//     alert('Failed to add art. Please try again.');
//   }
// });

// // Delete art
// async function deleteArt(artId) {
//   try {
//     const response = await fetch(`/admin/delete-art/${artId}`, { method: 'DELETE' });
//     const result = await response.json();
//     alert(result.message);
//     fetchArt(); // Refresh the art list after deletion
//   } catch (error) {
//     console.error('Error deleting art:', error);
//     alert('Failed to delete art. Please try again.');
//   }
// }

// // Delete user
// async function deleteUser(userId) {
//   try {
//     const response = await fetch(`/admin/delete-user/${userId}`, { method: 'DELETE' });
//     const result = await response.json();
//     alert(result.message);
//     fetchUsers(); // Refresh the user list after deletion
//   } catch (error) {
//     console.error('Error deleting user:', error);
//     alert('Failed to delete user. Please try again.');
//   }
// }

// // Initialize dashboard with data
// fetchArt();
// fetchUsers();


// ______________________________________________________ART IS SHOWNG AND ADDED ALSO_________________________________________
// Fetch and display all art posts
async function fetchArt() {
  try {
    const response = await fetch('/admin/art');
    const artList = await response.json();
    const artListDiv = document.getElementById('artList');
    artListDiv.innerHTML = '';
    artList.forEach((art) => {
      artListDiv.innerHTML += `
        <div>
          <h3>${art.title}</h3>
          <p>${art.description}</p>
          <p>Price: $${art.price}</p>
          <img src="/uploads/${art.image}" alt="${art.title}" style="max-width: 200px;" />
          <button onclick="deleteArt('${art._id}')">Delete</button>
        </div>
      `;
    });
  } catch (error) {
    console.error('Error fetching art posts:', error);
  }
}

// Fetch and display all registered users
async function fetchUsers() {
  try {
    const response = await fetch('/admin/users');
    const users = await response.json();
    const userTableBody = document.querySelector('#userTable tbody');
    userTableBody.innerHTML = '';
    users.forEach((user) => {
      userTableBody.innerHTML += `
        <tr>
          <td>${user.firstName}</td>
          <td>${user.email}</td>
          <td>${user.userType}</td>
          <td>
            <button onclick="deleteUser('${user._id}')">Delete</button>
          </td>
        </tr>
      `;
    });
  } catch (error) {
    console.error('Error fetching users:', error);
  }
}

// Add new art
document.getElementById('addArtForm').addEventListener('submit', async (event) => {
  event.preventDefault();

  const formData = new FormData(event.target); // This will automatically include the file upload

  try {
    const response = await fetch('/admin/add-art', {
      method: 'POST',
      body: formData, // Send FormData directly to the server
    });
    const result = await response.json();
    alert(result.message); // Alert on success or error message
    fetchArt(); // Refresh the art list after adding new art
    event.target.reset(); // Reset the form after successful submission
  } catch (error) {
    console.error('Error adding art:', error);
    alert('Failed to add art. Please try again.');
  }
});

// Delete art
async function deleteArt(artId) {
  try {
    const response = await fetch(`/admin/delete-art/${artId}`, { method: 'DELETE' });
    const result = await response.json();
    alert(result.message);
    fetchArt(); // Refresh the art list after deletion
  } catch (error) {
    console.error('Error deleting art:', error);
    alert('Failed to delete art. Please try again.');
  }
}

// Delete user
async function deleteUser(userId) {
  try {
    const response = await fetch(`/admin/delete-user/${userId}`, { method: 'DELETE' });
    const result = await response.json();
    alert(result.message);
    fetchUsers(); // Refresh the user list after deletion
  } catch (error) {
    console.error('Error deleting user:', error);
    alert('Failed to delete user. Please try again.');
  }
}

// Initialize dashboard with data
fetchArt();
fetchUsers();