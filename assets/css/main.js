function toggleMenu() {
    const contents = document.querySelectorAll('.expanded-content');
    const button=document.getElementById("buttonName");
    const svg1=document.getElementById("svg1");
    const svg2=document.getElementById("svg2");

    contents.forEach(content => {
        if (content.style.display === 'none' || content.style.display === '') {
            content.style.display = 'block'; // Show the content
            svg1.style.display = "none";
            svg2.style.display = "block";

        } else {
            content.style.display = 'none'; // Hide the content
            svg1.style.display = "block";
            svg2.style.display = "none";
        }
    });

}
