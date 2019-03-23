/**
 * Libreria de funciones
 */
let Utils = {
	/**
	 * Devolverá la cookie con el nombre pasado como parametro
	 * @param {String} name 
	 */
	getCookie: function(name) {
		try {
			var value = '; ' + document.cookie;
			var parts = value.split('; ' + name + '=');
			if (parts.length == 2) return parts.pop().split(';').shift();
		} catch (e) {
			return '';
		}
	},
	/**
	 * Creara una cookie con el parametro nombre y valor pasados, y se le asignaran tantos dias como pases
	 * @param {String} cname 
	 * @param {String} cvalue 
	 * @param {integer} exdays 
	 */
	setCookie: function(cname, cvalue, exdays) {
		var d = new Date();
		d.setTime(d.getTime() + exdays * 24 * 60 * 60 * 1000);
		var expires = 'expires=' + d.toUTCString();
		document.cookie = cname + '=' + cvalue + ';' + expires + ';path=/';
	},
	/**
	 * Borrara la cookie con el nombre pasado como parametro
	 * @param {String} name 
	 */
	deleteCookie: function(name) {
		document.cookie = name + '=; Path=/; Expires=Thu, 01 Jan 1970 00:00:01 GMT;';
	},
	/**
	 * Funcion prediseñada para Inputs para asignar a su reducer el nombre y valor pasados como objeto HTML
	 * @param {Object} event 
	 */
	setInput: function(event) {
		this.setState({
			[event.target.name]: event.target.value
		});
	}
};
// Usar that para referirse a la propia Utils
//let that = Utils;

/**
 * Get Height of Background Image
 * var imageSrc = $('.informacion__container .background_image')
					.css('background-image')
					.replace('url(', '')
					.replace(')', '')
					.replace("'", '')
					.replace('"', '')
					.replace('"', '');
				var image = new Image();
				image.src = imageSrc;
				var height = image.height;
				console.log(height);
 * 
 */

export { Utils };
