module.exports = {
	env: {
		es6: true,
		node: true,
		mongo: true,
	},
	extends: ["eslint:recommended"],
	plugins: [
		"import",
		"simple-import-sort",
		"json",
	],
	parserOptions: {
		ecmaVersion: 12,
		sourceType: "module",
	},
	rules: {
		// --------
		// plugins
		//---------
		"json/*": ["error", "allowComments"],

		// imports
		"simple-import-sort/sort": "error",
		"sort-imports": "off",
		"import/order": "off",
		"import/first": "error",
		"import/newline-after-import": "error",
		"import/no-duplicates": "error",
		"import/extensions": [
			"error",
			"always",
			{
			  ignorePackages: true,
			},
		],
	
		// -----------------------
		// ESLINT
		// -----------------------
		"no-use-before-define": [
			"error",
			{
				functions: true,
				classes: true,
				variables: true,
			},
		],
		"eqeqeq": [ // === instead of ==
			"error", "smart",
		],
		"yoda": [ // comparison: color === 'blue'
			"error",
			"never",
			{
				exceptRange: true,
			},
		],
		"max-classes-per-file": ["warn", 1],
		"no-magic-numbers": [
			"warn",
			{
				ignore: [
					-1,
					0,
					1,
					2,
					3,
					4,
					5,
					6,
					7,
					8,
					9,
					10,
					100,
					1000,
					10000,
					100000,
					1000000,
				],
				ignoreArrayIndexes: true,
			},
		],
		"strict": ["error", "global"],
		"no-unused-expressions": [
			"error",
			{
				allowShortCircuit: true,
				allowTernary: true,
			},
		],
		"accessor-pairs": "warn", // setter goes with a getter
		"array-callback-return": "error",
		"no-implied-eval": "error",
		"no-lone-blocks": "error",
		"no-sequences": "error", // commas
		"no-throw-literal": "error",
		"no-useless-call": "error", // .call
		"wrap-iife": "error", // const f = (function () { }()) <= wrap
		"object-shorthand": ["error", "always"],
		"no-confusing-arrow": [
			"error",
			{
				allowParens: true,
			},
		],
		"no-console": "off",
		"unicode-bom": ["error", "never"],
        
		// NEWLINE
		"newline-per-chained-call": [
			"error",
			{
				ignoreChainWithDepth: 3,
			},
		],
		"array-element-newline": [
			"error",
			{
				multiline: true,
				minItems: 3,
			},
		],
		"array-bracket-newline": [
			"error",
			{
				multiline: true,
				minItems: 3,
			},
		],
		"object-curly-newline": [
			"error",
			{
				multiline: true,
				consistent: true,
				minProperties: 5,
			},
		],

		// OPERATORS
		"no-lonely-if": "error",
		"no-mixed-operators": "error",
		"no-void": "error", // void operator
		"no-eval": "error", // eval operator
		"no-nested-ternary": "error",
		"no-unneeded-ternary": "error",
		"no-useless-computed-key": "error",
		"no-useless-constructor": "error",
		"no-else-return": [
			"error",
			{
				allowElseIf: false,
			},
		],

		"operator-assignment": ["error", "always"],
		"no-duplicate-imports": [
			"error",
			{
				includeExports: true,
			},
		],
		"prefer-arrow-callback": [
			"error",
			{
				allowNamedFunctions: false,
				allowUnboundThis: true,
			},
		],
		"prefer-rest-params": "error",
		"prefer-spread": "error",
		"prefer-destructuring": [ // CAREFUL FOR THIS ONE
			"warn",
			{
				array: false,
				object: true,
			},
			{
				enforceForRenamedProperties: false,
			},
		],
		"prefer-template": "warn",

		// VARIABLES
		"camelcase": [
			"error",
			{
				properties: "never", // API request sometimes need snake case names
				ignoreDestructuring: true,
			},
		],
		"one-var": [
			"error",
			{
				initialized: "never",
				uninitialized: "consecutive",
			},
		],
		"one-var-declaration-per-line": ["error", "always"],
		"no-invalid-this": "error", // this outside of class / function
		"no-shadow-restricted-names": "error",
		"no-shadow": [
			"warn",
			{
				builtinGlobals: true,
				hoist: "functions",
				allow: [
					"module",
					"cd",
					"resolve",
					"reject",
					"done",
					"cb",
					"callback",
				],
			},
		],
		"prefer-const": ["error"],
		"no-var": ["error"],
		"consistent-this": ["error", "self"],
		"no-self-compare": "error",
		"no-useless-rename": "error",
        
		// FUNCTIONS
		"no-empty-function": [
			"error",
			{
				allow: ["arrowFunctions"],
			},
		],
		"no-return-assign": "error", // assignement in return statement
		"no-return-await": "error",
		"callback-return": "error",
		"handle-callback-err": ["error", "^(err|error|.+Error)$"],
		"arrow-body-style": [
			"error",
			"as-needed",
			{
				requireReturnForObjectLiteral: true,
			},
		],
		"implicit-arrow-linebreak": ["error", "beside"],
		"consistent-return": [
			"error",
			{
				treatUndefinedAsUnspecified: true,
			},
		],

		// LOOP
		"no-unmodified-loop-condition": "error",

		// NUMBERS - CHAR
		"no-floating-decimal": "error",
		"no-octal-escape": "error", // \u00A9 or \xA9 (unicode or hexa)
		"no-useless-concat": "error",

		// CREATION
		"no-new-func": "error",
		"no-new-wrappers": "error",
		"no-new-object": "error",
		"no-array-constructor": "error",
		"no-new": "error",
		"new-cap": [
			"error",
			{
				newIsCap: true,
				capIsNew: true,
			},
		],
        
		// COMPLEXITY
		// --- other max rules are not used because too stricts? ---
		"max-depth": ["error", 4],
		"max-nested-callbacks": [
			"error",
			{
				max: 3,
			},
		],
		"max-statements-per-line": [
			"error",
			{
				max: 2,
			},
		],
        

		// -----------------------
		// STYLE (visual)
		// -----------------------
		"indent": [
			"error",
			"tab",
			{
				SwitchCase: 1,
			},
		],
		"semi": ["error", "always"],
		"comma-dangle": ["error", "always-multiline"],
		"semi-style": ["error", "last"],
		"linebreak-style": ["error", "unix"],
		"comma-style": ["error", "last"],
		"brace-style": [
			"error",
			"1tbs",
			{
				allowSingleLine: false,
			},
		],
		"curly": ["error", "all"],

		// CODE
		"dot-location": ["error", "property"],
		"dot-notation": [
			"error",
			{
				allowKeywords: true,
				allowPattern: "^[a-z]+((_|-)[a-z]+)+$",
			},
		],
		"operator-linebreak": ["error", "before"],
        
		// QUOTES
		"quotes": [
			"error",
			"double",
			{
				avoidEscape: true,
				allowTemplateLiterals: true,
			},
		],
		"quote-props": ["error", "consistent-as-needed"],
        
		// -----------------------
		// SPACING
		// -----------------------
		"eol-last": [ // ending space
			"error", "always",
		],
		"no-irregular-whitespace": [
			"error",
			{
				skipStrings: true,
				skipComments: true,
				skipRegExps: true,
				skipTemplates: true,
			},
		],
		"no-trailing-spaces": [
			"error",
			{
				skipBlankLines: true,
				ignoreComments: false,
			},
		],
		"no-mixed-spaces-and-tabs": ["error", "smart-tabs"],
		"no-whitespace-before-property": "error",
		"no-multi-spaces": [
			"error",
			{
				exceptions: {
					VariableDeclarator: true,
				},
			},
		],
		"space-in-parens": [
			"error",
			"never",
			{
				exceptions: [
					"{}",
					"[]",
					"()",
				],
			},
		],
		"func-call-spacing": ["error", "never"],
		"array-bracket-spacing": ["error", "never"],
		"object-curly-spacing": ["error", "always"],
		"arrow-spacing": [
			"error",
			{
				before: true,
				after: true,
			},
		],
		"comma-spacing": [
			"error",
			{
				before: false,
				after: true,
			},
		],
		"semi-spacing": [ // semi colon spacing
			"error",
			{
				before: false,
				after: true,
			},
		],
		"keyword-spacing": [
			"error",
			{
				before: true,
				after: true,
			},
		],
		"key-spacing": [
			"error",
			{
				beforeColon: false,
				afterColon: true,
				mode: "strict",
			},
		],
		"block-spacing": ["error", "always"],
		"computed-property-spacing": ["error", "never"],
		"rest-spread-spacing": ["error", "never"],
		"yield-star-spacing": [
			"error",
			{
				before: false,
				after: true,
			},
		],
		"template-curly-spacing": ["error", "never"],

		// BLOCK SPACING
		"padded-blocks": [ // CHECK IF NEED CHANGE ???
			"error", "never",
		],
		"space-before-blocks": ["error", "always"],
		"space-before-function-paren": [
			"error",
			{
				anonymous: "always",
				named: "never",
				asyncArrow: "never",
			},
		],
		"space-infix-ops": "error",
		"space-unary-ops": [
			"error",
			{
				words: true,
				nonwords: false,
			},
		],
		"lines-between-class-members": ["error", "always"],
        
		// COMMENTS
		"spaced-comment": [
			"error",
			"always",
			{
				exceptions: [
					"-",
					"*",
					"+",
				],
			},
		],
	},
};
