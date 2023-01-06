function wrap(el, wrapper, class_name="", class_id="") {
    if(class_name.length != 0){
        wrapper.classList.add(class_name)
    }
    if(class_id.length != 0){
        wrapper.classList.add(class_name + class_id)
    }
    el.parentNode.insertBefore(wrapper, el);
    wrapper.appendChild(el);
}

// example: wrapping an anchor with class "wrap_me" into a new div element
document.querySelectorAll('img.image').forEach( (elem, id) => {
    wrap(elem, document.createElement('div'), `picBackground`, `${id}`);
})

let options = {
    rootMargin: '0px',
    threshold: .3
  }

/*window.onbeforeunload = function () {
    window.scrollTo(0, 0);
}*/
setTimeout(function () {
    window.scrollTo(0, 0);
},2);

let pageIntersectionElems = []
pageIntersectionElems.push(document.querySelector('.about'))
pageIntersectionElems.push(document.querySelector('.aboutSupport'))
pageIntersectionElems.push(document.querySelector('.skills'))
pageIntersectionElems.push(document.querySelector('.skillsSupport'))
pageIntersectionElems.push(document.querySelector('.work'))
pageIntersectionElems.push(document.querySelector('.workSupport'))
pageIntersectionElems.push(document.querySelector('.projects'))
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