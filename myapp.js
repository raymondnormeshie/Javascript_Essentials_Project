let elements = document.getElementsByName("cssProperty");

let div = document.getElementById("modify");

function set() {
	for (let index = 0; index < elements.length; index++) {
		let cssProperty = elements[index].getAttribute("id");

		let cssValue = elements[index].value;

		if (cssProperty == "width" || cssProperty == "height") {
			div.style[cssProperty] = cssValue;
		} else if (cssProperty == "background-image") {
			div.style[cssProperty] = `url(./images/${cssValue}.jpg)`;
		}
	}
}


document.getElementById("set").addEventListener("click", set);
