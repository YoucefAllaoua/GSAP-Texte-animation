// ########################################
// ########################################
// ########################################
// ########################################
// ########################################
// ########################################
// create a timeline
const tl = gsap.timeline({
	defaults: {
		duration: 0.75,
		ease: "Power3.easeOut",
	},
});

// ########################################
// ########################################
// ########################################
// ########################################
// ########################################
// ########################################
// ########################################
// the image animation
// we just change the scale of the image and a border radsius to the final image
tl.fromTo("img", { scale: 1.3, borderRadius: 0 }, { scale: 1, borderRadius: 20, delay: 0.35, duration: 2.5, ease: "elastic.out(1.3, 1)" });

// ########################################
// ########################################
// ########################################
// ########################################
// ########################################
// ########################################
// ########################################
// ########################################
// the title aninmation
// "<20%" means thst the current animation will start after 20% of the previous animation
// in the normal case it will start the previous is finished
tl.fromTo(".one", { x: 120, opacity: 0 }, { x: 0, opacity: 1 }, "<20%");
tl.fromTo(".two", { y: 120, opacity: 0 }, { y: 0, opacity: 1 }, "<20%");
tl.fromTo(".three", { x: -120, opacity: 0 }, { x: 0, opacity: 1 }, "<20%");
tl.fromTo(".four", { x: -120, opacity: 0 }, { x: 0, opacity: 1 }, "<20%");
tl.fromTo(".five", { y: -120, opacity: 0 }, { y: 0, opacity: 1 }, "<20%");
tl.fromTo(".six", { x: 120, opacity: 0 }, { x: 0, opacity: 1 }, "<20%");
// "<" means that the current animation will end exactly with the previous one
tl.fromTo("button", { y: 120, opacity: 0 }, { y: 0, opacity: 1 }, "<");

// ########################################
// ########################################
// ########################################
// ########################################
// ########################################
// ########################################
// ########################################
// split letters animation
let logoLetters = document.querySelector(".logo").textContent.split("");
let content = "";
logoLetters.forEach((ele) => {
	content += `<span class="letter" style="display : inline-block">${ele}</span>`;
	document.querySelector(".logo").innerHTML = content;
});

// ########################################
// ########################################
// ########################################
// ########################################
// ########################################
// ########################################
// ########################################
// add the animation to the letters

tl.fromTo(".letter", { y: 120, opacity: 0 }, { y: 0, opacity: 1, stagger: 0.05, ease: "back.out(1.5)" });
