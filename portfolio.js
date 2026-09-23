
// idea: https://www.youtube.com/watch?v=dQw4w9WgXcQ&list=RDdQw4w9WgXcQ&start_radio=1 (under the video)
// implementation reference: https://www.accede-web.com/en/guidelines/rich-interface-components/show-more-buttons/
// source for querySelectorAll: https://developer.mozilla.org/en-US/docs/Web/API/Document/querySelectorAll

document.querySelectorAll(".show-more").forEach(function (button) {
    button.addEventListener("click", function () {
        const details = document.getElementById(button.getAttribute("aria-controls"));

        const isOpen = button.getAttribute("aria-expanded") === "true";

        details.hidden = isOpen;
        button.setAttribute("aria-expanded", String(!isOpen));
        button.textContent = isOpen ? "Show more" : "Show less";
    });
});