(function () {
	var isDark =
		localStorage.getItem("theme") === "dark" ||
		(!localStorage.getItem("theme") && window.matchMedia("(prefers-color-scheme: dark)").matches);
	if (isDark) {
		document.documentElement.classList.add("dark");
	}
})();
