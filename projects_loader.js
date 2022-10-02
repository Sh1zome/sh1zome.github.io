let list = document.querySelector("#list")
let tags = document.querySelector("#tags")

let tag_list = []
fetch("data.json")
    .then(response => response.json())
    .then(json => {
        for (let project of json) {
            if (!tag_list.includes(`${project.tag}`)) {
                tag_list.push(`${project.tag}`)
            }
            let res = document.createElement('div')
            res.classList.add('project-tile')
            res.dataset.tag = `${project.tag}`
            res.dataset.tilt = ''
            res.dataset.tiltMax = '5'
            res.innerHTML = `
            <a href="${project.address}" target="_blank">
                <img src="${project.img}">  
                <div id="name">${project.name}</div>
                <div id="tag">${project.tag}</div>
            </a>
            `
            list.append(res)
        }
        for (let tag of tag_list) {
            let res = document.createElement('div')
            res.classList.add('tag-tile')
            res.dataset.tag = `${tag}`
            res.innerHTML = `${tag}`
            tags.append(res)
        }
    })
    .then(json => {
        let VanillaTilt = document.createElement("script")
        VanillaTilt.src = "vanilla-tilt.js"
        document.querySelector("body").append(VanillaTilt);
        $(document).ready(function() {

            setTimeout(function() {

                let contents = document.querySelectorAll("content")
                for (let i = 1; i < contents.length; i++) {
                    contents[i].classList.add("display-none")
                }
                
                $('body').addClass('loaded');
                setTimeout(function() {
                    $('div#loader-wrapper').addClass('display-none');
                }, 1000);
            }, 1000);
           
        });
        const slider = document.querySelector("#tags");
        let isDown = false;
        let startX;
        let scrollLeft;

        slider.addEventListener('mousedown', (e) => {
            isDown = true;
            slider.classList.add('active');
            startX = e.pageX - slider.offsetLeft;
            scrollLeft = slider.scrollLeft;
        });
        slider.addEventListener('mouseleave', () => {
            isDown = false;
            slider.classList.remove('active');
        });
        slider.addEventListener('mouseup', () => {
            isDown = false;
            slider.classList.remove('active');
        });
        slider.addEventListener('mousemove', (e) => {
            if(!isDown) return;
            e.preventDefault();
            const x = e.pageX - slider.offsetLeft;
            const walk = (x - startX) * 3; //scroll-fast
            slider.scrollLeft = scrollLeft - walk;
        });
        let tags = document.querySelectorAll(".tag-tile")
        let projects = document.querySelectorAll(".project-tile")
        tags[0].onclick = function() {
            for (let project of projects) {
                project.classList.remove('display-none')
                project.classList.add('chosed')
            }
        }
        for (let i = 1; i < tags.length; i++) {
            tags[i].onclick = function() {
                for (let project of projects) {
                    project.classList.add('display-none')
                }
                setTimeout(function() {
                    let filtered = document.querySelectorAll(`[data-tag="${tags[i].dataset.tag}"]`)
                    for (let flt of filtered) {
                        flt.classList.remove('display-none')
                        flt.classList.add('chosed')
                    }
                }, 100);
            }
        }
    });