# any-dom
consistent API for any virtual dom library

[![Greenkeeper badge](https://badges.greenkeeper.io/tusharmath/any-dom.svg)](https://greenkeeper.io/)

Provides a consistent API for any virtual dom library. 
Now I can create libraries that are not bound to only a single virtual dom library implementation.

# Idea

There are so many virtual dom libraries on the internet right now and all of them have different APIs to create or patch the DOM. This makes it awfully tough to remember the signature while using and deters developers to make frameworks/libraries that are Virtual DOM agnostic.

**Any DOM** aims to solve this problem but keeping the API simple and consistent. 
It abstracts the original patching function and provides a more simpler function that looks like this — 

```ts
function patch (container: HTMLElement, vNode: VirtualNode) : void 
``` 

The `patch` function takes in two arguments — First is the real DOM element and second is Virtual DOM element and it returns nothing. Now we can pass the `patch` function as an argument to our framework/library and expect it to just work :-)


# Usage


**Simplified Imports**
```typescript

// Using react
import {patch} from 'any-dom/react'

// using snabbdom
import {patch} from 'any-dom/snabbdom'

// using preact
import {patch} from 'any-dom/preact'

```

**Usage inside the DOM**

```typescript jsx

import {patch} from 'any-dom/react'

function formatName(user) {
  return user.firstName + ' ' + user.lastName;
}

const user = {
  firstName: 'Harper',
  lastName: 'Perez'
};

const element = (
  <h1>
    Hello, {formatName(user)}!
  </h1>
)

patch(
  document.getElementById('root'),
  element  
)
```

# Supported Libraries
- [React]
- [Preact]
- [Snabbdom]


[React]: https://github.com/facebook/react
[Preact]: https://preactjs.com
[Snabbdom]: https://github.com/snabbdom/snabbdom


# Wishlist

- Add mode virtual dom libraries.
- Add consistent Hyperscript helpers 