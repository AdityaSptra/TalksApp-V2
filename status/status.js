function menuDown() {
	const menu = document.querySelector(".status .header .menu")
	const menuList = document.querySelector(".status .header .menuList")
	
	menu.addEventListener("click", () => {
		menuList.classList.toggle("menuDown")
		menu.style.background = "var(--hover)"
		
		if (menuList.classList.contains("menuDown")) {
			menuList.style.top = menu.getBoundingClientRect().bottom + 10 + "px"
			menuList.style.left = menu.getBoundingClientRect().left-(menuList.getBoundingClientRect().width-menu.getBoundingClientRect().width) + "px"
		}
	})
	
	menuList.addEventListener("click", () => {
		menu.style.background = "var(--hover)"
	})
	
	window.addEventListener("click", (e) => {
		const x = e.clientX
		const y = e.clientY
		
		if (
		x < menuList.getBoundingClientRect().left ||
		y > menuList.getBoundingClientRect().bottom ||
		(x > 0 && x < menu.getBoundingClientRect().left && y > 0 && y < menuList.getBoundingClientRect().top)
		) {
			menuList.classList.remove("menuDown")
			menu.style.background = "transparent"
		}
	})
}

export function settingStatus() {
	menuDown()
}