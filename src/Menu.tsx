import './Menu.css'
import MenuElements from './MenuElements'

let buttons = document.querySelectorAll('.button-menu')
let element : EventTarget

document.onmousemove = function (e) {
	if (buttons.length == 0) {
		buttons = document.querySelectorAll('.button-menu')
	}

	e = e || window.event;

	if (e.target != null) {
		element = e.target
	}

	if (element.classList.contains('button-menu') == true) {
		for (let i = 0; i < buttons.length; i++) {
			buttons[i].classList.remove('button-menu-hovered')
		}
		element.classList.add('button-menu-hovered')
	}
}

document.addEventListener('keydown', function(event) {
	if (buttons.length == 0) {
		buttons = document.querySelectorAll('.button-menu')
	}

	if(event.keyCode == 38) {
		let place = document.querySelector('.button-menu-hovered').dataset.info
		buttons[place].classList.toggle('button-menu-hovered')

		if (place == 0) {
			buttons[buttons.length-1].classList.toggle('button-menu-hovered')
		} else {
			buttons[place-1].classList.toggle('button-menu-hovered')
		}
	}
	else if (event.keyCode == 40) {
		let place = parseInt(document.querySelector('.button-menu-hovered').dataset.info)
		buttons[place].classList.toggle('button-menu-hovered') 

		if (place == buttons.length-1) {
			buttons[0].classList.toggle('button-menu-hovered')
		} else {
			buttons[place+1].classList.toggle('button-menu-hovered')
		}
	}
});

function Menu() {
	return (
		<>
			<div className='text name'>GNU GRUB ShizOS version 2.04</div>
			<div className='text subname'>Select the system boot option</div>
			<div className='text box'>
				<MenuElements/>
			</div>
			<div className='text hint'>
			Use the ↑ and ↓ keys to select which entry is highlighted. 
			Press enter to boot the selected OS.
			</div>
		</>
	)
}

export default Menu
