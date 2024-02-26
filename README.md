# Convert to Roman 

Convert string to camelcase

## Installation

```bash
  npm install string-to-camelcase
```
    
## Usage/Examples

```javascript
const convert = require('string-to-camelcase')

var hello = convert.toCamelCase("hello-world")
console.log(hello);
// output helloWorld
```

```javascript
var hello = convert.toCamelCase("hello_world")
console.log(hello);
// output helloWorld
```