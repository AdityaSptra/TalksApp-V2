function menuDown() {
	const menu = document.querySelector(".call .header .menu")
	const menuList = document.querySelector(".call .header .menuList")
	
	menu.addEventListener("click", () => {
		menu.style.background = "var(--hover)"
		menuList.classList.toggle("menuDown")
		
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
			menu.style.background = "transparent"
			menuList.classList.remove("menuDown")
		}
	})
}

export function settingCall() {
	menuDown()
}