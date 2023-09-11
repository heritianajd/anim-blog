//Blog
const sliderblog = document.querySelector('.sliderblog');
const prevBtnBlog = document.querySelector('.prevBtnBlog');
const nextBtnBlog = document.querySelector('.nextBtnBlog');
let currentIndex2 = 0;

nextBtnBlog.addEventListener('click', () => {
    currentIndex2 = (currentIndex2 + 1) % sliderblog.children.length;
    updateSlider();
});

prevBtnBlog.addEventListener('click', () => {
    currentIndex2 = (currentIndex2 - 1 + sliderblog.children.length) % sliderblog.children.length;
    updateSlider();
});

function updateSlider() {
    const offset = -currentIndex2 * 340; // 500px + 50px de gap
    sliderblog.style.transform = `translateX(${offset}px)`;
}
