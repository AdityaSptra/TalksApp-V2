function active() {
	const nav = document.querySelectorAll(".nav a")
	
	nav.forEach((btn) => {
		btn.addEventListener("click",() => {
			for (let clear = 0; clear < nav.length; clear++) {
				nav[clear].classList.remove("active")
			}
			
			btn.classList.add("active")
		})
	})
}

export function initializeNavigation() {
	active()
}