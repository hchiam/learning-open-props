animate("shake-down", document.querySelector("button"));

document
  .querySelector("#toggle_dark_mode")
  .addEventListener("click", function () {
    toggleDarkMode();
    animate("push-out", document.querySelector("button"));
    document.querySelector("#toggle_dark_mode").blur();
  });

function toggleDarkMode() {
  var theme = document.documentElement.getAttribute("data-theme");
  document.documentElement.setAttribute(
    "data-theme",
    theme === "dark" ? "light" : "dark"
  );
}

function animate(animationClassName, elements, duration) {
  if (!elements) return;
  if (!duration) duration = 1000;
  if (!elements.length) {
    elements = [elements];
  }
  elements.forEach(function (element) {
    element.classList.add(animationClassName);
    setTimeout(function () {
      // remove the animation class so (other) animation can (re-)run:
      element.classList.remove(animationClassName);
    }, duration);
  });
}
