//Source for aria related attributes: https://developer.mozilla.org/en-US/docs/Web/Accessibility/ARIA/Reference/Attributes
// Source for querySelector: https://developer.mozilla.org/en-US/docs/Web/API/Document/querySelector
document.querySelector("header").innerHTML = `
    <nav aria-label="Main navigation">
        <a href="index.html">Home</a>
        <a href="resume.html">Resume</a>
        <a href="portfolio.html">Portfolio</a>
    </nav>`;
// source for mailto: https://www.tutorialspoint.com/html/html_email_links.htm
// extra code needed since mailto doesn't count as visiting a site
document.querySelector("footer").innerHTML = `
    <p>
        <a href="mailto:walkerqr@rose-hulman.edu"onclick="this.style.color='#79c6ff'">Email me</a>
        <a href="https://rose-hulman.joinhandshake.com/profiles/quentin">Handshake Profile</a>
    </p>`;