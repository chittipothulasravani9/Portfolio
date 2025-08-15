const menuBtn = document.getElementById('menu-btn');
const sidebar = document.getElementById('sidebar');
const closeBtn = document.getElementById('close-btn');

menuBtn.addEventListener('click', () => {
  sidebar.classList.add('active');
});

closeBtn.addEventListener('click', () => {
  sidebar.classList.remove('active');
});

// Sidebar open/close
// const menuBtn = document.getElementById('menu-btn');
// const closeBtn = document.getElementById('close-btn');
// const sidebar = document.getElementById('sidebar');
// const menuLinks = document.querySelectorAll('.menu-links a');

// menuBtn.addEventListener('click', () => {
//     sidebar.classList.add('active');
// });

// closeBtn.addEventListener('click', () => {
//     sidebar.classList.remove('active');
// });

// // Close sidebar when any link is clicked
// menuLinks.forEach(link => {
//     link.addEventListener('click', () => {
//         sidebar.classList.remove('active');
//     });
// });
