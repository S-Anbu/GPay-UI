let display=0;
let div = document.getElementById('more');
function more(){
    if(display==1)
    {
        div.style.display='block';
        display=0;
    }
    else
    {
        div.style.display='none';
        display=0;
    }
}




// click to show div

// function toggleMenu() {
//     const expandedContent = document.getElementById('expanded-content');
//     expandedContent.classList.toggle('hidden');
// }


// click on hide div

// const toggleButton = document.getElementById('toggleButton');
// const myDiv = document.getElementById('myDiv') ? 'block' : 'none';

// toggleButton.addEventListener('click', () => {
//     myDiv.style.display = myDiv.style.display === 'none' ? 'block' : 'none';
// });

// myDiv.addEventListener('blur', () => {
//     myDiv.style.display = 'none';
// });




// var div = document.getElementById('more');
    // var display = 0;
    // function more() {
    //   if (display == 1) {
    //     div.style.display = 'flex';
    //     display = 1;
    //   }
    //   else {
    //     div.style.display = 'none';
    //     display = 0;
    //   }
    // }