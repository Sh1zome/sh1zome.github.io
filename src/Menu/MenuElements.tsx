import buttons from '../data/buttons-menu.json';

function MenuElements() {

	var elements : JSX.Element[] = [];
	for (let i = 0; i < buttons.length; i++) {

		let className = `button-menu btn-menu-${i}`
		
		if (i == 0) {
			className += ` button-menu-hovered`
		}

		elements.push(<div data-info={i} className={className}>{buttons[i].name}</div>)
	}

	return (
		<>
			{elements}
		</>
	)

}

export default MenuElements