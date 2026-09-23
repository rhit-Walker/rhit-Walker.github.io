
// idea: https://www.youtube.com/watch?v=dQw4w9WgXcQ&list=RDdQw4w9WgXcQ&start_radio=1 (under the video)
// implementation reference: https://www.accede-web.com/en/guidelines/rich-interface-components/show-more-buttons/

document.querySelectorAll(".show-more").forEach((button) => {
    button.addEventListener("click", () => {
        const details = document.getElementById(
            button.getAttribute("aria-controls")
        );
        const isOpen = button.getAttribute("aria-expanded") === "true";

        details.hidden = isOpen;
        button.setAttribute("aria-expanded", String(!isOpen));
        button.textContent = isOpen
            ? `Show more about ${button.dataset.project}`
            : `Show less about ${button.dataset.project}`;
    });
});