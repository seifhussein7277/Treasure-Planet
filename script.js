document.addEventListener("DOMContentLoaded", function () {
    const navHTML = `
    <nav class="navbar">
        <a href="index.html" class="nav-brand">✨ TREASURE PLANET</a>
        <ul class="nav-links">
            <li><a href="index.html">Home</a></li>
            <li><a href="characters.html">Crew</a></li>
            <li><a href="fleet.html">Ships</a></li>
            <li><a href="atlas.html">Atlas</a></li>
        </ul>
    </nav>
    `;
    document.body.insertAdjacentHTML("afterbegin", navHTML);

    const currentPage = window.locationHTML("afterbegin", navHTML);
    document.querySelectorAll(".nav-links a").forEach(link => {
        if (link.getAttribute("href") === currentPage) {
            link.classlist.add("active");
        }
    });
});
