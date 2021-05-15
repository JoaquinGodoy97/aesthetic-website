
let tl = gsap.timeline();
// rule = CSSruleplugin.getRule("#eland:after")
   
// gsap.from('.text1', {x: 100, opacity: 0, duration: 1, ease: "linear"});
// gsap.from('.text2', {x: -100, opacity: 0, duration: 1, ease: "linear"});

tl.from('.navList', {width: 10, x: 20, opacity: 0, duration: 2, ease: "back"});

gsap.from('.text1', {x: 100, opacity: 0, stagger: 5, });
gsap.from('.text3', {x: 100, opacity: 0, stagger: 5});


var titleTl = new TimelineMax({repeat:-1});
titleTl.fromTo('.text1', 3, {x: 0, opacity: 1}, {x: 100, opacity: 0})
        .fromTo('.text2', 6, {x: -50, opacity: 1}, {x: 0, opacity: 0})
        // .fromTo('.text3', 7, {x: 0, opacity: 1}, {x: 100, opacity: 0}, 2)
        // .fromto('.text2', 7, {x: -50, opacity: 1}, {x: 0, opacity: 0}, 2)

// to(rule, {duration: .5, cssRule: {scaleY: 0}}, "");
// gsap.from(".text2", {x: -100, duration: .5, ease: "linear"});
// gsap.from(".text1", {opacity: 0, duration: .6, ease: "circ.out"})
// gsap.from(".text2", {, duration: .6, ease: "circ.out"})

function smoothScroll(target, duration) {
        
        var target = document.querySelector(target);
        var targetPosition = target.getBoundingClientRect().top;
        var startPosition = window.pageYOffset;
        var distance = targetPosition;
        var startTime = null;

        function animation(currentTime) {

                if(startTime === null) startTime = currentTime;
                var timeElapsed = currentTime - startTime;
                var run = ease(timeElapsed, startPosition, distance,duration);
                window.scrollTo(0, run);

                if (timeElapsed < duration) requestAnimationFrame(animation);
        }

        function ease(t, b, c, d) {
                t /= d/2;
                if (t < 1) return c/2*t*t + b;
                t--;
                return -c/2 * (t*(t-2) - 1) + b;
        };

        requestAnimationFrame(animation);
}


var about = document.querySelector('.about');
var home = document.querySelector('.home');

about.addEventListener('click', function(){
        smoothScroll('.second-section', 1000);
});
home.addEventListener('click', function(){
        smoothScroll('.container', 1000);
});