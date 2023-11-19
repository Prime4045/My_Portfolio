

const navigateToHeading = document.querySelectorAll('.links').forEach(function (link) {
    link.addEventListener('click', function (e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    })
})

// const mailLink = document.querySelector('.mail').addEventListener('click', (e) => {
//     e.preventDefault();
//     location.href = 'mailto:optimusprime0456@gmail.com'
// })
// const instagramLink = document.querySelector('.instagram').addEventListener('click', (e) => {
//     e.preventDefault();
//     location.href = '#'
// })
// const telegramLink = document.querySelector('.telegram').addEventListener('click', (e) => {
//     e.preventDefault();
//     location.href = '#'
// })
// const githubLink = document.querySelector('.github').addEventListener('click', (e) => {
//     e.preventDefault();
//     location.href = '#'
// })
// const linkedinLink = document.querySelector('.linkedin').addEventListener('click', (e) => {
//     e.preventDefault();
//     location.href = '#'
// })

// const menu = document.querySelector(".nav_mobile");
// const header = document.querySelector(".header_nav");

// const toggleNavBar = () => {
//     header.classList.toggle('active')
// }

// menu.addEventListener("click", () => toggleNavBar())

