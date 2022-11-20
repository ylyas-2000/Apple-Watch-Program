var swiper = new Swiper(".mySwiper", {
    slidesPerView: 2.7,
    spaceBetween: 30,
    freeMode: true,
});

const btn = document.querySelectorAll('.footer button');
const home = document.getElementById('home');
const gallery = document.getElementById('gallery');
const appStore = document.getElementById('app-store');


for(let i = 0; i < btn.length; i++) {
    btn[0].onclick = function() {
        btn[0].classList.add('active');
        btn[1].classList.remove('active');
        btn[2].classList.remove('active');
        home.style.display = 'block';
        gallery.style.display = 'none';
        appStore.style.display = 'none';
    }
    btn[1].onclick = function() {
        btn[1].classList.add('active');
        btn[0].classList.remove('active');
        btn[2].classList.remove('active');
        home.style.display = 'none';
        gallery.style.display = 'block';
        appStore.style.display = 'none';
    }
    btn[2].onclick = function() {
        btn[2].classList.add('active');
        btn[0].classList.remove('active');
        btn[1].classList.remove('active');
        home.style.display = 'none';
        gallery.style.display = 'none';
        appStore.style.display = 'block';
    }
}

