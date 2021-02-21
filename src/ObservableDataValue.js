/**
* A class that represents an observable data value.
* @module @zamasaur/js-observabledatavalue
*/

/**
 * A class that represents an observable data value.
 */
export class ObservableDataValue {

	/**
	 * Constructor.
	 * 
	 * @param {*} value 
	 */
	constructor(value) {
		this._value = value;
		this._options = { once: false };
		this.onchange = (event) => { };
		Object.seal(this);
	}

	/**
	 * Returns the value.
	 */
	get value() {
		return this._value;
	}

	/**
	 * Sets the value.
	 * 
	 * @param {*} value 
	 */
	set value(value) {
		if (this._value !== value) {
			this._value = value;
			var event = {
				target: this,
				timeStamp: Date.now(),
				type: "change",
			}
			this.onchange(event);
			if(this._options.once){
				this.removeEventListener("change", this.onchange);
			}
		}
	}

	/**
	 * Adds an event listener to the value.
	 * 
	 * @param {string} type A case-sensitive string representing the event type to listen for.
	 * @param {function} listener The object that receives a notification.
	 * @param {object} options Optional { once: true } indicating that the listener should be invoked at most once after being added.
	 */
	addEventListener(type, listener, options = { once: false }) {
		this._options = options;
		switch (type) {
			case "change":
				this.onchange = listener;
				break;
			default:
				break;
		}
	}

	/**
	 * Removes an event listener previously registered.
	 * 
	 * @param {string} type A case-sensitive string representing the event type to listen for.
	 * @param {function} listener The object that receives a notification.
	 */
	removeEventListener(type, listener) {
		switch (type) {
			case "change":
				if (this._options.once) {
					this._options = { once: false };
				}
				this.onchange = (event) => { };
				break;
			default:
				break;
		}
	}
}