/**
* Use snippet for OOP validation with Vuejs
*/


// use of ES6

/**
* Creating Error Class.
*/
class Error {
	constructor() {
		this.errors = {};
	}

	/**
	* Function that checks if it has an error with this 'field'.
	* @return boolean
	*/
	has(field) {
		return this.errors.hasOwnProperty(field);
	} 

	/**
	* Function that gets the error's property field.
	* @return boolean
	*/
	get(field) {
		if (this.errors[field]) {
			return this.errors[field][0];
		}
	}

	/**
	* Function that clears / deletes the error's property field.
	* @return boolean
	*/
	clear(field) {
		delete this.errors[field];
	}

	/**
	* Function that stores the error's property field.
	* @return boolean
	*/
	store(field) {
		this.errors = errors;
	}
}