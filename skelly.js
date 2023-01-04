let options = {
    rootMargin: '0px',
    threshold: .5
  }

let pageIntersectionElems = []
pageIntersectionElems.push(document.querySelector('.about'))
pageIntersectionElems.push(document.querySelector('.skills'))
pageIntersectionElems.push(document.querySelector('.work'))
pageIntersectionElems.push(document.querySelector('.contact'))



console.log('yo')
let observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        if(entry.isIntersecting){
            entry.target.classList.add("show")
        }
    })
}, options);

pageIntersectionElems.forEach((elem) => {
    observer.observe(elem)
})
console.log(observer)