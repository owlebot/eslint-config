# eslint-config

This is the global eslint config for all javascript projects.  
It supports last ECMA features such as `import assertions`.  
This configuration is not meant to be permissive, however, it aims to be fairly strict to guarantee consistent code style.  

The philosophy is to comply to the linter when writing the code. It helps you writing cleaner and more *efficient* code. If there is something you really don't want to do like the linter says, you *explicitly* disable the rule or the line. This way, we make sure to reduce errors as much as possible, and that if you choose to ignore a rule you're fully aware.  

All team projects should be using this configuration, however, everyone is welcome to use it.  

## Installation

This package is availabe on npm [here](https://www.npmjs.com/package/@owlebot/eslint-config).  
Install this package with `npm install @owlebot/eslint-config` or `yarn add @owlebot/eslint-config`.  
Make sure to have eslint already installed in your project.  
Now simply create a `.eslintrc.json` file and add the following: `"extends": "@owlebot/eslint-config"` or simply: `"extends": "@owlebot"`.

.eslintrc.json:  

```json
{
    "extends": "@owlebot/eslint-config"
}
```
