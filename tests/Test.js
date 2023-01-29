import EventEmitter from "event";

import t from "./test.json" assert { type: 'json' };

export class Test extends EventEmitter {
	param;

	#param2;
	
	constructor(param) {
		super();
		this.param = param;
		this.#param2 = param ?? "default";
	}

	test() {
		console.log(`hey${this.param}`);
		console.log(`hey${this.#param2}`);
		console.log(`hey${t.four?.five}`);
		console.log(`hey${t.four?.five?.six}`);
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
