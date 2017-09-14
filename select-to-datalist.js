/**
 * @param {HTMLElement} - select
 * @param {string} - placeholder
 */
function selectToDatalist( select, placeholder ) {
	var eSelect = select
	,	options= eSelect.children
	,	eInput = document.createElement("input")
	,	eDatalist = document.createElement("datalist")
	,	selected
	;

	for ( var o in options ) {
		option = options[o];

		if ( !(option && option.value) ) { continue; }

		if ( option.selected ) {
			selected = option.value;
		}

		eDatalist.appendChild(option.cloneNode());
	}

	eDatalist.id = "datalist-" + eSelect.name;

	eInput.name = eSelect.name;
	eInput.setAttribute("list", eDatalist.id);
	eInput.placeholder = placeholder || "Enter your " + eInput.name;
	selected && ( eInput.value = selected );

	eSelect.parentNode.appendChild(eInput);
	eSelect.parentNode.appendChild(eDatalist);

	eSelect.parentNode.removeChild(eSelect);

	return eInput;
}