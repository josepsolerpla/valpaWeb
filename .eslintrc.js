module.exports = {
	env: {
		browser: true,
		commonjs: true,
		es6: true,
		mocha: true,
		node: false
	},
	parser: 'babel-eslint',
	parserOptions: {
		ecmaVersion: 6,
		sourceType: 'module',
		ecmaFeatures: {
			jsx: true
		}
	},
	settings: {
		react: {
			createClass: 'createReactClass', // Regex for Component Factory to use,
			// default to "createReactClass"
			pragma: 'React', // Pragma to use, default to "React"
			version: 'detect', // React version. "detect" automatically picks the version you have installed.
			// You can also use `16.0`, `16.3`, etc, if you want to override the detected value.
			flowVersion: '0.53' // Flow version
		},
		propWrapperFunctions: [
			// The names of any function used to wrap propTypes, e.g. `forbidExtraProps`. If this isn't set, any propTypes wrapped in a function will be skipped.
			'forbidExtraProps',
			{ property: 'freeze', object: 'Object' },
			{ property: 'myFavoriteWrapper' }
		],
		linkComponents: [
			// Components used as alternatives to <a> for linking, eg. <Link to={ url } />
			'Hyperlink',
			{ name: 'Link', linkAttribute: 'to' }
		]
	},
	plugins: [ 'react' ],
	rules: {
		'no-const-assign': 'warn',
		'no-console': 'off',
		'no-this-before-super': 'warn',
		'no-undef': 'warn',
		'no-unreachable': 'warn',
		'no-unused-vars': 'warn',
		'constructor-super': 'warn',
		'valid-typeof': 'warn',
		// semi: 'error',
		'react/jsx-no-bind': [
			'error',
			{
				allowArrowFunctions: true,
				allowBind: false,
				ignoreRefs: true
			}
		],
		'react/no-did-update-set-state': 'error',
		'react/no-unknown-property': 'error',
		'react/no-unused-prop-types': 'error',
		'react/prop-types': 'error',
		'react/react-in-jsx-scope': 'error'
	},
	extends: [ 'eslint:recommended', 'plugin:react/recommended' ]
};
