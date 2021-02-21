# js-observabledatavalue

A class that represents an observable data value.

## Requirements

JS >=ES6

## Installation

Let the folder structure of your project look like the one described below.

```
root/
	bin/
	config/
	docs/
	public/
	resources/
	src/
		index.js
	tests/
	node_modules/
```

To install this package via npm you must add it to your `package.json` file in the root of your project. 

```json
/* package.json */
{
	"name": "@myname/myproject",
	"type": "module",
	"dependencies": {
		"@zamasaur/js-codec": "https://github.com/zamasaur/js-observabledatavalue.git"
	}
}
```

You can now install the dependencies by running nmp's install command.
```
$ npm install
```

To use it you must include this line inside your `index.js`:

```js
import { ObservableDataValue } from "../node_modules/@zamasaur/js-codec/src/ObservableDataValue.js";
```

## Usage

Example:

```js
/* index.js */
import { ObservableDataValue } from "../node_modules/@zamasaur/js-codec/src/ObservableDataValue.js";

var dataValue = new ObservableDataValue(1);

function myFunction(event){
    console.log(event.target.value);
}

dataValue.addEventListener("change", (event) => {
    myFunction(event)
}, { once: true });

dataValue.value = 2;
dataValue.value = 3;
dataValue.value = 4;

dataValue.addEventListener("change", (event) => {
    myFunction(event)
});

dataValue.value = 5;
dataValue.value = 6;
dataValue.value = 7;

dataValue.removeEventListener("change", (event) => {
    myFunction(event)
});

dataValue.value = 8;
dataValue.value = 9;
dataValue.value = 10;
```

## JSDoc

This package comply with the JSDoc standard, to generate them you must use the following command in a terminal opened in the root folder.

```
$ ./node_modules/.bin/jsdoc -r ./src/ -d ./docs/api
```
