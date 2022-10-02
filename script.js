

$("div.btn-menu").click(function () {
    $("div.menu").toggleClass("open")
});

let nav = document.querySelectorAll('.nav-btn')
let content = document.querySelectorAll('.nav-content')

for (let i = 0; i < nav.length; i++) {
    nav[i].onclick = function() {
        for (let cnt of content) {
            cnt.classList.add('display-none')
            cnt.classList.remove('chosed')
        }
        content[i].classList.remove('display-none')
        content[i].classList.add('chosed')
    }
}