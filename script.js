// @ts-nocheck
let controller = new ScrollMagic.Controller();
let timeline = new TimelineMax();

timeline
  .to('.fg', 3, { y: -300 })
  .fromTo('.bg', 3, { y: -50 }, { y: 0, duration: 3 }, '-=3')
  .to('.content', 3, { top: '0%' }, '-=3');
// .fromTo('.content-images', { opacity: 0 }, {opacity: 1, duration: 3 })

let scene = new ScrollMagic.Scene({
  triggerElement: 'section',
  duration: '150%',
  triggerHook: 0,
})
  .setTween(timeline)
  .setPin('section')
  .addTo(controller);
