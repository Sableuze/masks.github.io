input = document.querySelectorAll(".input");

input.forEach(function (item) {
    item.addEventListener("focus", function () {
        let parent = this.closest(".form__block");
        parent.classList.add("_focus");
    })


    item.addEventListener("blur", function () {
        this.parentNode.classList.remove("_focus");
    })
});

//for select tag which is changed by app.js
let inputSelect = document.querySelectorAll(".select_input");
inputSelect.forEach(function (item) {
    item.addEventListener("click", function () {
        let parent = this.closest(".form__block");
        if (this.classList.contains("_active")) {
            parent.classList.add("_focus");
        } else {
            parent.classList.remove("_focus")
        }


    })
})

// let selectParent = inputSelect.closest("._active")
// if (selectParent) {
//         console.log(selectParent)
//         selectParent.classList.toggle("_focus")
//     }


const labelCondition = document.querySelectorAll("[data-tab]");

const contentBoxes = document.querySelectorAll("[data-tab-content]")

labelCondition.forEach(function (item) {
    item.addEventListener("click", function () {
        labelCondition.forEach(function (removeClass) {
            removeClass.classList.remove("_active");
        })

        this.classList.toggle("_active");
        contentBoxes.forEach(function (item) {
            item.classList.add("_hidden")
        })

        let contentBox = document.querySelector("#" + this.dataset.tab);
        contentBox.classList.remove("_hidden")

    });
});
//
// const parent = document.querySelector(".dynamic__menu")
//
// const child = parent.querySelectorAll(".nav-item")
//
// child.forEach(function (item) {
//
//     item.addEventListener("click", function () {
//             child.forEach(function (removeClass) {
//                 removeClass.classList.remove("orange__line")
//             })
//
//             this.classList.add("orange__line")
//         }
//     )
// })


// const animItems = document.querySelectorAll("._animation-item")
//
// if (animItems.length > 0) {
//     window.addEventListener("scroll", animOnScroll);
//
//     function animOnScroll() {
//         for (let i = 0; i < animItems.length; i++) {
//             const animItem = animItems[i];
//             const animItemHeight = animItem.offsetHeight;
//             const animItemOffset = offset(animItem).top;
//             const animStart = 4;
//
//
//             let animItemPoint = window.innerHeight - animItemHeight / animStart;
//             if (animItemHeight > window.innerHeight) {
//                 animItemPoint = window.innerHeight - window.innerHeight / animStart;
//             }
//
//             if ((pageYOffset > animItemOffset - animItemPoint) && pageYOffset < (animItemPoint + animItemHeight)) {
//                 animItem.classList.add("_animation-active")
//             }
//             // else {
//             //     if (!animItem.classList.contains("_anim-no-hide")){
//             //     animItem.classList.remove("_active")
//             // }}
//             //
//
//         }
//
//
//     }
//
//     setTimeout(() => {
//         animOnScroll()
//     }, 300);
// }
document.addEventListener('DOMContentLoaded', () => {

    const scrollItems = document.querySelectorAll('._animation-item');

    const scrollAnimation = () => {
        let windowCenter = (window.innerHeight / 2) + window.scrollY;
        scrollItems.forEach(el => {
            let scrollOffset = el.offsetTop + (el.offsetHeight / 6);
            if (windowCenter >= scrollOffset) {
                el.classList.add('_animation-active');
            }
        });
    };


    scrollAnimation();
    window.addEventListener('scroll', () => {
        scrollAnimation();
    });
});


const buttonDismiss = document.querySelectorAll(".button-dismiss")

buttonDismiss.forEach(function (item) {
    item.addEventListener("click", function () {
        this.closest("._dismissable").classList.add("_dismissable-hidden")
    })
})

//ПРОВЕРКА ГОРИЗОНАТЛЬНОЙ ПРОКРУТКИ
// function isScrollable(ele) {
//
//     const cntWidth = ele.closest(".bar").scrollWidth
//     // Compare the height to see if the element has scrollable content
//     const hasScrollableContent = ele.scrollWidth > cntWidth;
//
//
// }
//
//
// setTimeout(function () {
//     try {
//         isScrollable(document.querySelector(".labels"))
//     } catch (error) {
//         console.log(error)
//     }
// }, 1000)


//NAVBAR COLLAPSE

const navbar = document.querySelector(".navbar-collapse")
document.onclick = function (e) {
    if (!event.target.closest(".navbar-collapse")) {
        navbar.classList.remove("show")
        body_lock_remove()
    }

};


//STICKY NAVBAR

document.addEventListener("DOMContentLoaded", function () {
    window.addEventListener('scroll', function () {
        if (window.innerWidth > 1200) {
            if (window.scrollY > 50) {
                document.querySelector('.header__menu').classList.add('fixed-top');
                // add padding top to show content behind navbar
                navbar_height = document.querySelector('.menu__body').offsetHeight;
                document.body.style.paddingTop = navbar_height + 'px';
            } else {
                document.querySelector('.header__menu').classList.remove('fixed-top');
                // remove padding top from body
                document.body.style.paddingTop = '0';
            }
        } else {
            if (window.scrollY > 50) {
                document.querySelector('.navbar').classList.add('fixed-top');
                // add padding top to show content behind navbar
                navbar_height = document.querySelector('.navbar').offsetHeight;
                document.body.style.paddingTop = navbar_height + 'px';
            } else {
                document.querySelector('.navbar').classList.remove('fixed-top');
                // remove padding top from body
                document.body.style.paddingTop = '0';
            }
        }
    })
})


//

// $(document).ready(function () {
//     $("#click-me").click(function () {
//         var moreOrless = $("#content").is(':visible') ? 'more ...' :
//             ' less';
//         $(this).text(moreOrless);
//         $("#content").slideToggle();
//     });
// });

//Detect wrap

let container = document.querySelectorAll('.wrappable');
console.log(container)

function detectWrap(node) {
    node.forEach(container => {
        Array.from(container.children).forEach(child => {
            const containerPos = container.getBoundingClientRect().top;
            const childPos = child.getBoundingClientRect().top;
            if (childPos > containerPos) {
                child.classList.add('wrapped');
                container.classList.add("wrapOn")
            } else {
                child.classList.remove('wrapped');
                container.classList.remove("wrapOn")

            }
        });
    });
}

window.addEventListener("DOMContentLoaded", (e) => {
    detectWrap(container);
});

window.addEventListener("resize", (e) => {
    detectWrap(container);
});

$(document).ready(function(){
    $(".owl-carousel").owlCarousel();
});

$('.owl-carousel').owlCarousel({
    loop:true,
    margin:10,
    nav:false,
    responsiveClass:true,
    responsive:{
        0:{
            items:1,
            nav: true,

        },
        550:{
            items:2,
            nav: true,
        },
        1000:{
            items:3
        }
    }
})










