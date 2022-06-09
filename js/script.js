window.onload = function() {
    const EFFECT = document.querySelector(".cards-container");

    window.addEventListener('scroll', scrollEffect);

    function scrollEffect() {
        if(window.scrollY>=300) {
            EFFECT.style.opacity = '1';
            EFFECT.style.transform = 'translateY(0px)';
            EFFECT.style.transition = '1s ease-in-out';
        } else {
            EFFECT.style.opacity = '0';
            EFFECT.style.transform = 'translateY(-50px)';
        }
    }
    scrollEffect();
}