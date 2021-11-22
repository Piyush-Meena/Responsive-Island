gsap.config({
  trialWarn: false });


var assetVerticalBreakPoints = [
{
  selector: "#tree2",
  large: {
    y: 0,
    x: 0,
    duration: 0.3 },

  medium: {
    y: -60,
    x: -80,
    duration: 0.3 },

  narrow: {
    y: -90,
    x: -125,
    duration: 0.3 } },


{
  selector: "#tree3",
  large: {
    y: 0,
    x: 0,
    duration: 0.3 },

  medium: {
    y: -30,
    x: -0,
    duration: 0.3 },

  narrow: {
    y: -90,
    x: 50,
    duration: 0.3 } },


{
  selector: ".group-hill1",
  large: {
    y: 0,
    duration: 0.3 },

  medium: {
    y: 60,
    duration: 0.3 },

  narrow: {
    y: 90,
    duration: 0.3 } },


{
  selector: ".group-hill2",
  large: {
    y: 0,
    duration: 0.3 },

  medium: {
    y: 100,
    duration: 0.3 },

  narrow: {
    y: 240,
    duration: 0.3 } },


{
  selector: ".group-hill3",
  large: {
    y: 0,
    duration: 0.3 },

  medium: {
    y: 190,
    duration: 0.3 },

  narrow: {
    y: 340,
    duration: 0.3 } },


{
  selector: "#sea",
  large: {
    y: 0,
    duration: 0.3 },

  medium: {
    y: -75,
    duration: 0.3 },

  narrow: {
    y: -180,
    duration: 0.3 } },


{
  selector: "#watermill",
  large: {
    y: 0,
    scale: 1 },

  medium: {
    y: -155,
    scale: 1 },

  narrow: {
    y: -155,
    scale: 1 } },


{
  selector: "#bridge-group",
  large: {
    y: 0 },

  medium: {
    y: -155 },

  narrow: {
    y: -300 } },


{
  selector: "#right-bridge",
  large: {
    y: 0 },

  medium: {
    y: 0 },

  narrow: {
    y: -40 } },


{
  selector: "#hgc-bridge",
  large: {
    y: -15 },

  medium: {
    y: -85 },

  narrow: {
    y: -185 } },


{
  selector: "#hideen-trees",
  large: {
    y: -282,
    duration: 0.3 },

  medium: {
    y: -282,
    duration: 0.3 },

  narrow: {
    y: -330,
    duration: 0.3 } }];




var assetHorizontalBreakPoints = [
{
  selector: "#inner-tree2",
  large: {
    y: 0,
    x: 0,
    duration: 0.3 },

  medium: {
    y: 0,
    x: -40,
    duration: 0.3 },

  narrow: {
    y: -20,
    x: -40,
    duration: 0.3 } },


{
  selector: "#hideen-trees",
  large: {
    opacity: 0,
    duration: 0.3 },

  medium: {
    opacity: 0,
    duration: 0.3 },

  narrow: {
    opacity: 1,
    duration: 0.3 } },


{
  selector: ".tree",
  large: {
    opacity: 1,
    duration: 0.3 },

  medium: {
    opacity: 1,
    duration: 0.3 },

  narrow: {
    opacity: 0,
    duration: 0.3 } },


{
  selector: "#cloud1",
  large: {
    x: 0,
    duration: 0.3 },

  medium: {
    x: 180,
    duration: 0.3 },

  narrow: {
    x: 240,
    duration: 0.3 } },


{
  selector: "#cloud2",
  large: {
    x: 0,
    duration: 0.3 },

  medium: {
    x: 180,
    duration: 0.3 },

  narrow: {
    x: 240,
    duration: 0.3 } },


{
  selector: "#cloud3",
  large: {
    x: 0,
    duration: 0.3 },

  medium: {
    x: 180,
    duration: 0.3 },

  narrow: {
    x: 240,
    duration: 0.3 } },


{
  selector: "#cloud4",
  large: {
    x: 0,
    duration: 0.3 },

  medium: {
    x: -180,
    duration: 0.3 },

  narrow: {
    x: -240,
    duration: 0.3 } },


{
  selector: "#cloud5",
  large: {
    x: 0,
    duration: 0.3 },

  medium: {
    x: -40,
    duration: 0.3 },

  narrow: {
    x: -80,
    duration: 0.3 } },


{
  selector: "#cloud6",
  large: {
    x: 0,
    duration: 0.3 },

  medium: {
    x: -100,
    duration: 0.3 },

  narrow: {
    x: -180,
    duration: 0.3 } },


{
  selector: ".group-hill2",
  large: {
    x: 0,
    duration: 0.3 },

  medium: {
    x: 170,
    duration: 0.3 },

  narrow: {
    x: 230,
    duration: 0.3 } },


{
  selector: ".group-hill1",
  large: {
    x: 0,
    duration: 0.3 },

  medium: {
    x: -100,
    duration: 0.3 },

  narrow: {
    x: -150,
    duration: 0.3 } },


{
  selector: "#hill-2, #hill-3",
  large: {
    opacity: 1 },

  medium: {
    opacity: 1 },

  narrow: {
    opacity: 1 } },


{
  selector: "#bridge-group",
  large: {
    opacity: 1 },

  medium: {
    opacity: 1 },

  narrow: {
    opacity: 0 } },


{
  selector: "#right-bridge",
  large: {
    opacity: 1 },

  medium: {
    opacity: 1 },

  narrow: {
    opacity: 0 } },


{
  selector: "#watermill",
  large: {
    opacity: 1 },

  medium: {
    opacity: 1 },

  narrow: {
    opacity: 0 } },


{
  selector: "#hcg-group-left",
  large: {
    opacity: 0,
    x: -200 },

  medium: {
    opacity: 0,
    x: -200 },

  narrow: {
    opacity: 1,
    x: 20 } },


{
  selector: "#hgc-group-right",
  large: {
    opacity: 0,
    x: 200 },

  medium: {
    opacity: 0,
    x: 200 },

  narrow: {
    opacity: 1,
    x: 20 } }];




function applySVGResponsiveness_horizontal(width) {
  assetHorizontalBreakPoints.forEach(asset => {
    if (width < 340) {
      gsap.to(asset.selector, asset.narrow);
    } else if (width < 730) {
      gsap.to(asset.selector, asset.medium);
    } else {
      gsap.to(asset.selector, asset.large);
    }
  });
}

function applySVGResponsiveness_vertical(height) {
  assetVerticalBreakPoints.forEach(asset => {
    if (height < 360) {
      gsap.to(asset.selector, asset.narrow);
    } else if (height < 600) {
      gsap.to(asset.selector, asset.medium);
    } else {
      gsap.to(asset.selector, asset.large);
    }
  });
}

const draw = document.getElementById("draw");

window.addEventListener("resize", function () {
  draw.setAttribute(
  "style",
  "width:" + window.innerWidth + "px;height:" + window.innerHeight + "px;");


  applySVGResponsiveness_horizontal(draw.offsetWidth);
  applySVGResponsiveness_vertical(draw.offsetHeight);
});

var ro = new ResizeObserver(entries => {
  for (let entry of entries) {
    const cr = entry.contentRect;
    applySVGResponsiveness_horizontal(cr.width);
    applySVGResponsiveness_vertical(cr.height);
  }
});
ro.observe(document.getElementById("draw"));

window.onload = function () {
  gsap.to("#fade", {
    opacity: 0,
    duration: 5 });

};

var sea = Array.from(document.querySelectorAll(".sea"));
sea.forEach((level, ind) => {
  gsap.to(level, {
    morphSVG: level.getAttribute("data-path"),
    repeat: -1,
    yoyo: true,
    ease: "none",
    duration: 5 - ind / 5 });

});

gsap.to("#wings", {
  repeat: -1,
  transformOrigin: "center",
  rotation: 360,
  ease: "none",
  duration: 15 });


gsap.to("#mill, #hgc-mill", {
  repeat: -1,
  transformOrigin: "center",
  rotation: -360,
  ease: "none",
  duration: 30 });


Array.from(document.querySelectorAll(".anime-path")).forEach(elem => {
  gsap.to(elem, {
    morphSVG: elem.getAttribute("data-path"),
    repeat: -1,
    yoyo: true,
    ease: "none",
    duration: elem.getAttribute("data-timing") ?
    elem.getAttribute("data-timing") :
    6 });

});

Array.from(document.querySelectorAll(".water")).forEach((water, ind, arr) => {
  var duration = 7;
  var delay = duration / arr.length * ind + 1;
  gsap.to(water, {
    morphSVG: water.getAttribute("data-path"),
    repeat: -1,
    ease: "none",
    delay: delay,
    duration: duration,
    opacity: 0.1 });

});

document.addEventListener("mousedown", function () {
  gsap.to("#instructions", {
    opacity: 0,
    duration: 0.4 });

});