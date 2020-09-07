import EventEmitter from "event";

import t from "./test.json";

class Test extends EventEmitter {
	constructor(param) {
		super();
		this.param = param;
		this.param2 = param ?? "default";
	}

	test() {
		console.log(`hey${this.param}`);
		console.log("hey");
	}
	
	test2() {
		return {
			one: 1,
			two: 2,
		};
	}

	json() {
		return t;
	}
}

export default Test;
