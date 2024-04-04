function locomotiveAnimation() {
    gsap.registerPlugin(ScrollTrigger);

    const locoScroll = new LocomotiveScroll({
        el: document.querySelector(".main"),
        smooth: true,

        // for tablet smooth
        tablet: { smooth: true },

        // for mobile
        smartphone: { smooth: true }
    });
    locoScroll.on("scroll", ScrollTrigger.update);

    ScrollTrigger.scrollerProxy(".main", {
        scrollTop(value) {
            return arguments.length
                ? locoScroll.scrollTo(value, 0, 0)
                : locoScroll.scroll.instance.scroll.y;
        },
        getBoundingClientRect() {
            return {
                top: 0,
                left: 0,
                width: window.innerWidth,
                height: window.innerHeight
            };
        }
    });

    ScrollTrigger.addEventListener("refresh", () => locoScroll.update());

    ScrollTrigger.refresh();
}


function navAnimation() {
	var nav = document.querySelector('nav');

	nav.addEventListener('mouseenter', function () {
		let tl = gsap.timeline();
		tl.to('.nav-bottom', {
			height: '24vh',
		});
		tl.to('.nav-menu h5', {
			display: 'block',
		});
		tl.to('.nav-menu h5 span', {
			y: 0,
			stagger: {
				amount: 0.6,
			},
		});
	});

	nav.addEventListener('mouseleave', function () {
		let tl = gsap.timeline();
		tl.to('.nav-menu h5 span', {
			y: 25,
			stagger: {
				amount: 0.2,
			},
		});
		tl.to('.nav-menu h5', {
			display: 'none',
			duration: 0.1,
		});
		tl.to('.nav-bottom', {
			height: 0,
			duration: 0.2,
		});
	});
}

function loadingAnimation() {
	var tl = gsap.timeline()
	tl.from(".page1", {
		opacity: 0,
		duration: 0.2,
		delay: 0.2
	})
	
	tl.from(".page1", {
		transform: "scaleX(0.7) scaleY(0.2) translateY(80%)",
		borderRadius: "150px",
		duration: 2,
		ease: "expo.out"
	})
	
	tl.from("nav", {
		opacity: 0,
		delay: -0.2
	})
	
	tl.from(".page1 h1, .page1 p, .page1 div", {
		opacity: 0,
		duration: 0.5,
		stagger: 0.2
	})
}

function page2Animation() {
	var rightElems = document.querySelectorAll('.right-elem2');

	rightElems.forEach(function (elem) {
		elem.addEventListener('mouseenter', function () {
			gsap.to(elem.childNodes[3], {
				opacity: 1,
				scale: 1,
			});
		});

		elem.addEventListener('mouseleave', function () {
			gsap.to(elem.childNodes[3], {
				opacity: 0,
				scale: 0,
			});
		});

		elem.addEventListener('mousemove', function (dets) {
			gsap.to(elem.childNodes[3], {
				x: dets.x - elem.getBoundingClientRect().x - 90,
				y: dets.y - elem.getBoundingClientRect().y - 100,
			});
		});
	});
}

function page3VideoAnimation() {
	var page3Centre = document.querySelector('.centre-icon');
	var video = document.querySelector('.page3 video');

	page3Centre.addEventListener('click', function () {
		video.play();
		gsap.to(video, {
			transform: 'scaleX(1) scaleY(1)',
			opacity: 1,
			borderRadius: 0,
		});
	});

	video.addEventListener('click', function () {
		video.pause();
		gsap.to(video, {
			transform: 'scaleX(0.7) scaleY(0)',
			opacity: 0,
			borderRadius: '30px',
		});
	});
}

function page4Hower() {
	var section = document.querySelectorAll('.right-page4');

	section.forEach(function (elem) {
		elem.addEventListener('mouseenter', function () {
			elem.childNodes[3].style.opacity = 1;
			elem.childNodes[3].play();
		});
		elem.addEventListener('mouseleave', function () {
			elem.childNodes[3].style.opacity = 0;
			elem.childNodes[3].load();
		});
	});
}

function metaStaq() {
	var metastaq = document.querySelector('.video1');

	metastaq.addEventListener('mouseenter', function () {
		metastaq.play();
	});

	metastaq.addEventListener('mouseleave', function () {
		metastaq.load();
	});
}

function sightView() {
	var sight = document.querySelector('.video2');

	sight.addEventListener('mouseenter', function () {
		sight.play();
	});

	sight.addEventListener('mouseleave', function () {
		sight.load();
	});
}

function page7Animations() {
    gsap.from("#btm7-part2 h4", {
        x: 0,
        duration: 1,
        scrollTrigger: {
            trigger: "#btm7-part2",
            scroller: ".main",
            start: "top 80%",
            end: "top 10%",
            scrub: true
        }
    })
}

locomotiveAnimation()
navAnimation()
loadingAnimation()
page2Animation()
page3VideoAnimation()

page4Hower()
metaStaq();
sightView();
page7Animations()
