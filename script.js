document.addEventListener("DOMContentLoaded", () => {
    const expandBtn = document.querySelector(".expand-btn");
    const hiddenRows = document.querySelectorAll(".hidden");
    const darkModeToggle = document.getElementById("dark-mode-toggle");

    // Expand/Collapse photo rows
    expandBtn.addEventListener("click", () => {
        hiddenRows.forEach(row => row.classList.toggle("hidden"));
        expandBtn.textContent = expandBtn.textContent.includes("Show More")
            ? "Show Less"
            : "Show More";
    });

    // Toggle Dark Mode
    darkModeToggle.addEventListener("click", () => {
        document.body.classList.toggle("dark-mode");
    });
});
