
let active = false;


document.querySelectorAll('.article-link').addEventListener('click', (e) => {

    console.log(e.target);
    
    // console.log(document.querySelector('.article-link'));
    // if (active === true) {
    //     active = false;
    //     document.querySelector('.article-link').classList.remove('green')
    // } else {
    //     active = true;
    //     document.querySelector('.article-link').classList.add('green');
    // }
})