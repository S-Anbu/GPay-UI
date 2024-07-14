function toggleMenu() {
    const contents = document.querySelectorAll('.expanded-content');
    contents.forEach(content => {
        if (content.style.display === 'none' || content.style.display === '') {
            content.style.display = 'block'; // Show the content
        } else {
            content.style.display = 'none'; // Hide the content
        }
    });
}