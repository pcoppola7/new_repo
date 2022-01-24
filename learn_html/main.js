
let link = document.querySelectorAll('.article-link');
let policy = document.getElementById('privacy-id');
let policyContainer = document.querySelector('.privacy');

link.forEach((e) => {
    e.addEventListener('click', () => {
        e.classList.toggle('green');
    })
});





if (localStorage.getItem("privacy") === "true") {
    policyContainer.classList.add('hide');
};

policy.addEventListener('click', () => {

    policyContainer.classList.add('hide');
    
    localStorage.setItem("privacy", "true");
})