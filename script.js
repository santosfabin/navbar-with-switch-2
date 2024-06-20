document.addEventListener("DOMContentLoaded", function () {
	const volumeSlider = document.getElementById("buttom-slider");

    if (localStorage.getItem("theme") === "light") {
        volumeSlider.value = 0;
        document.body.classList.add("light");
        localStorage.setItem("theme", "light");
    } else {
        volumeSlider.value = 100;
        document.body.classList.remove("light");
        localStorage.removeItem("theme");
    }
	volumeSlider.addEventListener("change", function () {
		let volumeValue = parseInt(volumeSlider.value);

		if (volumeValue > 50) {
			volumeSlider.value = 100;
			document.body.classList.remove("light");
            localStorage.removeItem("theme");
		} else {
			volumeSlider.value = 0;
			document.body.classList.add("light");
            localStorage.setItem("theme", "light");
		}
	});
});


/*  */


