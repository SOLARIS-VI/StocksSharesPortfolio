# shares_project

In addition to usual installs, follow these steps:

In terminal:
- npm i finnhub
- npm i querystring-es3

Then:

- Open client>node_modules>react-scripts>config>webpack.config.js

- Command-F and search for "fallback"
- In "resolve" object, add: 
      fallback: { 
        "querystring": require.resolve("querystring-es3") ,
      },

i.e. 
    resolve: {
      // This allows you to set a fallback for where webpack should look for modules.
      // We placed these paths second because we want `node_modules` to "win"
      // if there are any conflicts. This matches Node resolution mechanism.
      // https://github.com/facebook/create-react-app/issues/253
      modules: ['node_modules', paths.appNodeModules].concat(
        modules.additionalModulePaths || []
      ),
      fallback: { 
        "querystring": require.resolve("querystring-es3") ,
      },
# javascript_project
