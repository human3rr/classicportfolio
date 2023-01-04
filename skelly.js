let options = {
    rootMargin: '0px',
    threshold: .3
  }
window.onbeforeunload = function () {
    window.scrollTo(0, 0);
}

let pageIntersectionElems = []
pageIntersectionElems.push(document.querySelector('.about'))
pageIntersectionElems.push(document.querySelector('.skills'))
pageIntersectionElems.push(document.querySelector('.work'))
pageIntersectionElems.push(document.querySelector('.contact'))



console.log('yo')
let observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        entry.target.classList.toggle("show",entry.isIntersecting)
        entry.target.classList.toggle("hide",!entry.isIntersecting)
    })
}, options);

pageIntersectionElems.forEach((elem) => {
    observer.observe(elem)
})
console.log(observer)