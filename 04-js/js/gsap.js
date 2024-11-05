// 페이지 로딩 시 애니메이션
// gsap.to("누구를", {어떻게});
// gsap.to(".green", { left: "50%", transform: "translateX(-50%)", duration: 1 });

// gsap.to(".green", {변경할 속성}, delay)
// gsap.to(".green", { y: 100 }, 1);

// gsap.from(".green", { y: -200, opacity: 0, duration: 1 });

// gsap.fromTo(".green", { x: 200, y: -100, opacity: 0 }, { x: 0, opacity: 1, duration: 1 });
// gsap.to(".green", { y: 0 }, 1);

// gsap.from(".orange", { x: -200, opacity: 0, duration: 1 }, 2);
// gsap.from(".yellow", { x: 200, opacity: 0, duration: 1 }, 1);

// gsap.to(".box-area", { rotation: 90 }, 3);

// gsap.from(".intro .txt", { scale: 0, opacity: 0, duration: 1 }, 4);

gsap.registerPlugin(ScrollTrigger);

// timeline을 이용하는 방법
// var tl = gsap.timeline();

// tl.fromTo(".green", { x: 200, y: -100, opacity: 0 }, { x: 0, opacity: 1, duration: 1 }).to(".green", { y: 0 }).from(".orange", { x: -200, opacity: 0, duration: 1 }).from(".yellow", { x: 200, opacity: 0, duration: 1 }, 1).to(".box-area", { rotation: 90 }).from(".intro .txt", { scale: 0, opacity: 0, duration: 1 });

// timeline과 scrollTrigger를 이용한 방법
var tl = gsap.timeline({
  scrollTrigger: {
    trigger: ".intro",
    pin: true,
    start: "top 0",
    end: "+=500",
    scrub: 1,
    markers: true,
  },
});

tl.fromTo(".green", { x: 200, y: -100, opacity: 0 }, { x: 0, opacity: 1, duration: 1 }).to(".green", { y: 0 }).from(".orange", { x: -200, opacity: 0, duration: 1 }).from(".yellow", { x: 200, opacity: 0, duration: 1 }, 1).to(".box-area", { rotation: 90 }).from(".intro .txt", { scale: 0, opacity: 0, duration: 1 });

// scrollTrigger를 사용
gsap.to(".grow", {
  // scrollTrigger: ".grow",
  width: "70%",
  height: "70%",
  fontSize: "6rem",
  duration: 1,
  scrollTrigger: {
    trigger: ".sec-grow",
    pin: true, // pin the trigger element while active
    start: "top top", // when the top of the trigger hits the top of the viewport
    end: "+=500", // end after scrolling 500px beyond the start
    scrub: 1, // smooth scrubbing, takes 1 second to "catch up" to the scrollbar
    // markers: true,
  },
});

// gsap.to(".grow", {
//   scrollTrigger: ".grow",
//   height: "100%",
//   duration: 1,
// });

// header
// 윈도우가 스크롤됐을 때
window.addEventListener(
  "scroll",
  _.throttle(function () {
    const scrolled = window.scrollY;
    console.log(`스크롤 값: ${scrolled}`);

    // y축 스크롤 값이 80px보다 크다면
    if (scrolled > 80) {
      // header를 없애기
      gsap.to("#header", { yPercent: -100, duration: 0.3 });
      // #to-top을 나타나게 하기
      gsap.to("#to-top", { x: -60, duration: 0.3 });
    } else {
      // header를 나타나게 하기
      gsap.to("#header", { yPercent: 0, duration: 1 });
      // #to-top을 없애기
      gsap.to("#to-top", { x: 60, duration: 0.3 });
    }
  })
);
