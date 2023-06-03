const imagesToLoad = document.querySelectorAll('[some-image]');

const imgOptions = {
    threshold: 0.5,
    rootMargin: "0px 0px 50px 50px"
};
const loadImages = (image) => {
    image.setAttribute('src', image.getAttribute('some-image'));
    image.onload = () => { image.removeAttribute('some-image'); };
}

if ("IntersectionObserver" in window) {
    const imgObserver = new IntersectionObserver((items, observer) => {
        items.forEach((item) =>{
            if (item.isIntersecting){
                loadImages(item.target);
                observer.unobserve(item.target);
            }
        });
    }, imgOptions);

    imagesToLoad.forEach((img) => {
        imgObserver.observe(img);
    })
} else {
    console.log("Hello")

    imagesToLoad.forEach((img) => {
        loadImages(img);
    })
}