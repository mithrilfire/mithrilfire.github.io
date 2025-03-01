document.addEventListener("DOMContentLoaded", function () {
    const startYear = 2024;
    const currentYear = new Date().getFullYear();
    const yearText = startYear === currentYear ? startYear : `${startYear}-${currentYear}`;
    document.getElementById("copyright").textContent = `© ${yearText} Fatih Çalışır`
});