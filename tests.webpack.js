// require all `/test/**/.spec.ts(x)`
const testsContext = require.context('./test', true, /^\.\/.*\.(ts|tsx)$/);
testsContext.keys().forEach(testsContext);

// require all `/src/components/**/index.js`
const componentsContext = require.context('./src/todos', true, /\.(ts|tsx)$/);
componentsContext.keys().forEach(componentsContext);