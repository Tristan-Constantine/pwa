document.addEventListener('DOMContentLoaded', function() {
    const homeTab = document.querySelector('#home');
    const galleryTab = document.querySelector('#gallery');
    const aboutTab = document.querySelector('#about');
    const navLinks = document.querySelectorAll('.nav-link');
  
    function showTab(tab) {
      document.querySelectorAll('.tab-content').forEach(content => {
        content.classList.remove('active');
      });
      tab.classList.add('active');
    }
  
    navLinks.forEach(link => {
      link.addEventListener('click', function(event) {
        event.preventDefault();
        const targetTab = document.querySelector(this.getAttribute('href'));
        showTab(targetTab);
      });
    });
  
    showTab(homeTab); // Show home tab by default
  
    fetch('https://jsonplaceholder.typicode.com/users')
      .then(response => response.json())
      .then(users => {
        const userList = document.querySelector('#user-list');
        users.forEach(user => {
          const userCard = document.createElement('div');
          userCard.className = 'col-md-4';
          userCard.innerHTML = `
            <div class="card mb-4">
              <div class="card-body">
                <h5 class="card-title">${user.name}</h5>
                <p class="card-text">${user.email}</p>
                <p class="card-text">${user.phone}</p>
                <p class="card-text">${user.website}</p>
              </div>
            </div>
          `;
          userList.appendChild(userCard);
        });
      });
  
    fetch('https://jsonplaceholder.typicode.com/photos')
      .then(response => response.json())
      .then(photos => {
        const photoList = document.querySelector('#photo-list');
        photos.slice(0, 16).forEach(photo => { // Limiting to 16 photos
          const photoCard = document.createElement('div');
          photoCard.className = 'col-md-3';
          photoCard.innerHTML = `
            <div class="card mb-4">
              <img src="${photo.thumbnailUrl}" class="card-img-top" alt="${photo.title}">
              <div class="card-body">
                <p class="card-text">${photo.title}</p>
              </div>
            </div>
          `;
          photoList.appendChild(photoCard);
        });
      });
  });
  