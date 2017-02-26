has-id
============

Utility for finding or filtering in array.

## Install

```sh
$ npm install --save has-id
```

## Usage

```js
import hasId from "has-id"

const collection = [{ id: 123 }, { id: 321 }, { id: 213 }]
const someId = 123
const result = collection.find(hasId(someId))
// same as
const result2 = collection.find(item => item.id === someId)
```
