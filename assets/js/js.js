const debounce = function (func, wait, immediate) {
    let timeout;
    return function (...args) {
        const context = this;
        const later = function () {
            timeout = null;
            if (!immediate) func.apply(context, args);
        };
        const callNow = immediate && !timeout;
        clearTimeout(timeout);
        timeout = setTimeout(later, wait);
        if (callNow) func.apply(context, args);
    };
};

const backgrund = document.querySelectorAll('.backg');


function animeScroll() {
    const windowTop = window.scrollY + window.innerHeight * 0.60;
    backgrund.forEach(function (element) {
        console.log(windowTop, element.parentElement.offsetTop);
        if ((windowTop) > element.parentElement.offsetTop) {
            console.log(windowTop, element.parentElement.offsetTop);
            element.classList.add("surgiri");
            element.animate([
                { transform: "translate3d(0px, 5px, 0px)" },
            ],
                {
                    duration: 1000,
                    iterations: Infinity,
                    direction: "alternate",
                },
            )
        } else {
            element.classList.remove("surgiri");
        }
    })
}
function gridConteudo() {
        let grid = document.querySelectorAll('.gridPai');
        grid.forEach(element => {
            let qFilho= element.querySelectorAll('section').length;
            console.log(qFilho);
            if (qFilho < 4) {
            element.style.gridTemplateColumns = `repeat(${qFilho}, 1fr)`;
        }
        });
}

animeScroll();
gridConteudo();

if (backgrund.length) {
    window.addEventListener('scroll', debounce(function () {
        animeScroll();
    }, 100));
}