function menuSetting() {
	const menu = document.querySelector(".community .header .menu")
	const setting = document.querySelector(".community .header .setting")
	
	menu.addEventListener("click", () => {
		setting.classList.toggle("menuSetting")
		menu.style.background = "var(--hover)"
		console.log("click")
		
		if (setting.classList.contains("menuSetting")) {
			console.log("yes")
			setting.style.top = menu.getBoundingClientRect().bottom + 10 + "px"
			setting.style.left = menu.getBoundingClientRect().left-(setting.getBoundingClientRect().width-menu.getBoundingClientRect().width) + "px"
		}
	})
	
	setting.addEventListener("click", () => {
		menu.style.background = "var(--hover)"
	})
	
	window.addEventListener("click", (e) => {
		const x = e.clientX
		const y = e.clientY
		
		if (
		x < setting.getBoundingClientRect().left ||
		y > setting.getBoundingClientRect().bottom ||
		(x > 0 && x < menu.getBoundingClientRect().left && y > 0 && y < setting.getBoundingClientRect().top)
		) {
			setting.classList.remove("menuSetting")
			menu.style.background = "transparent"
		}
	})
}

export function settingCommunity() {
	console.log("hello world")
	menuSetting()
}