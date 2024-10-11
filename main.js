$(document).ready(function () {
    $('.panel-collapse.show.in').each(function () {
        $(this).prev('.panel-heading').css('background-color', '#f4f9fd'); 
        $(this).css('background-color', '#f4f9fd'); 
        $(this).prev('.panel-heading').find('i').removeClass('bi-chevron-down').addClass('bi-chevron-compact-up'); 
    });

    $('.panel-collapse').on('show.bs.collapse', function () {
        $(this).prev('.panel-heading').css('background-color', '#f4f9fd'); 
        $(this).css('background-color', '#f4f9fd'); 
        $(this).prev('.panel-heading').find('i').removeClass('bi-chevron-down').addClass('bi-chevron-compact-up'); 
    });

    $('.panel-collapse').on('hide.bs.collapse', function () {
        $(this).prev('.panel-heading').css('background-color', '#f5f5f5'); 
        $(this).css('background-color', '#f5f5f5'); 
        $(this).prev('.panel-heading').find('i').removeClass('bi-chevron-compact-up').addClass('bi-chevron-down');
    });
});





document.addEventListener('DOMContentLoaded', () => {
    const animationTracks = document.querySelectorAll('.animation-track img'); 
    const animationDivs = document.querySelectorAll('.animation-div, .animation-div-2'); 

    animationDivs.forEach((animationDiv, index) => {
        const animationTrack = animationTracks[index];

        const observer = new IntersectionObserver(entries => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    window.addEventListener('scroll', handleScroll);
                } else {
                    window.removeEventListener('scroll', handleScroll);
                }
            });
        }, {
            threshold: [0, 1] 
        });

        observer.observe(animationDiv);

        function handleScroll() {
            const rect = animationDiv.getBoundingClientRect();
            const viewportHeight = window.innerHeight;

            let elementInView = Math.min(1, Math.max(0, (viewportHeight - rect.top) / (viewportHeight + rect.height)));

            if (animationDiv.classList.contains('animation-div-2')) {
                elementInView = 1 - elementInView; 
            }

            const animationProgress = elementInView * 100;

            animationTrack.style.transform = calculateAnimationState(animationProgress);
        }

        function calculateAnimationState(progress) {
            if (progress <= 15) {
                const ratio = progress / 15;
                return `rotateZ(${lerp(-48, -38, ratio)}deg) translate(${lerp(36, 80, ratio)}px, 40px)`;
            } else if (progress <= 30) {
                const ratio = (progress - 15) / 15;
                return `rotateZ(${lerp(-38, -28, ratio)}deg) translate(${lerp(80, 124, ratio)}px, 40px)`;
            } else if (progress <= 45) {
                const ratio = (progress - 30) / 15;
                return `rotateZ(${lerp(-28, -10, ratio)}deg) translate(${lerp(124, 168, ratio)}px, 40px)`;
            } else if (progress <= 60) {
                const ratio = (progress - 45) / 15;
                return `rotateZ(${lerp(-10, 0, ratio)}deg) translate(${lerp(168, 212, ratio)}px, 38px)`;
            } else if (progress <= 80) {
                const ratio = (progress - 60) / 20;
                return `rotateZ(0deg) translate(${lerp(212, 256, ratio)}px, 40px)`;
            } else {
                const ratio = (progress - 80) / 20;
                return `rotateZ(${lerp(0, -10, ratio)}deg) translate(${lerp(256, 280, ratio)}px, ${lerp(40, 96, ratio)}px)`;
            }
        }

        function lerp(start, end, ratio) {
            return start + ratio * (end - start);
        }
    });
});


const navButton = document.getElementById('navButton');
const navMenu = document.getElementById('navMenu');

navButton.addEventListener('click', function() {
    navMenu.classList.toggle('show-nav');

    navButton.classList.toggle('change');
});


  
