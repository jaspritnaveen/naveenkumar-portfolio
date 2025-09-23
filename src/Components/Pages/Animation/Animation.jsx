import React, { useEffect, useRef } from "react";

const Animation = () => {
  const txtRotateRefs = useRef([]);

  useEffect(() => {
    txtRotateRefs.current.forEach((el) => {
      const toRotate = el.getAttribute("data-rotate");
      const period = el.getAttribute("data-period");
      if (toRotate) {
        new TxtRotateClass(
          el,
          JSON.parse(toRotate),
          parseInt(period ?? "2000", 10)
        );
      }
    });
  }, []);

  return (
    <section className="hero-container relative">
      <div className="intro-content">
        <h5 className="intro-sub">HEY! I AM</h5>
        <h1 className="intro-name">NAVEENKUMAR R</h1>
        <h2 className="intro-role">
          I'm a{" "}
          <span
            className="txt-rotate"
            data-period="2000"
            data-rotate='["Java Full Stack Developer.", "Frontend Developer.", "Full Stack Developer.", "Learner."]'
            ref={(el) => (txtRotateRefs.current[0] = el)}
          >
            <span className="wrap">QA Engineer.</span>
          </span>
        </h2>
      </div>

      <div className="down-arrow w-20 h-20 bg-slate-800 flex justify-center items-center absolute left-65px bottom-40">
        <span className="material-symbols-outlined text-4xl arrow w-6 h-6"></span>
      </div>
    </section>
  );
};

export default Animation;

/** Updated class with cursor inside the text */
class TxtRotateClass {
  constructor(el, toRotate, period) {
    this.toRotate = toRotate;
    this.el = el;
    this.loopNum = 0;
    this.period = period;
    this.txt = "";
    this.isDeleting = false;
    this.tick();
  }

  tick() {
    const i = this.loopNum % this.toRotate.length;
    const fullTxt = this.toRotate[i];

    this.txt = this.isDeleting
      ? fullTxt.substring(0, this.txt.length - 1)
      : fullTxt.substring(0, this.txt.length + 1);

    const wrap = this.el.querySelector(".wrap");
    if (wrap) {
      // always add the blinking | at the end
      wrap.innerHTML = this.txt + '<span class="cursor">|</span>';
    }

    let delta = 200 - Math.random() * 100;
    if (this.isDeleting) delta /= 2;

    if (!this.isDeleting && this.txt === fullTxt) {
      delta = this.period;
      this.isDeleting = true;
    } else if (this.isDeleting && this.txt === "") {
      this.isDeleting = false;
      this.loopNum++;
      delta = 500;
    }

    setTimeout(() => this.tick(), delta);
  }
}
