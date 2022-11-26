Goal: 2 months to complete

1. [Complete Intro to Web Development, v3](https://frontendmasters.com/courses/web-development-v3/)
2. [JavaScript: First Steps](https://frontendmasters.com/courses/javascript-first-steps/)
3. [JavaScript: The Hard Parts, v2](https://frontendmasters.com/courses/javascript-hard-parts-v2/)
4. [Deep JavaScript Foundations, v3](https://frontendmasters.com/courses/deep-javascript-v3/)
5. [Functional JavaScript First Steps](https://frontendmasters.com/courses/functional-first-steps/)
6. [JavaScript: The Recent Parts](https://frontendmasters.com/courses/js-recent-parts/)
7. [JavaScript: The New Hard Parts](https://frontendmasters.com/courses/javascript-new-hard-parts/)
8. [Complete Intro to React, v7](https://frontendmasters.com/courses/complete-react-v7/)
9. [Intermediate React, v4](https://frontendmasters.com/courses/intermediate-react-v4/)
10. [State Management in Pure React, v2](https://frontendmasters.com/courses/pure-react-state/)
11. [TypeScript Fundamentals, v3](https://frontendmasters.com/courses/typescript-v3/)
12. [Intermediate TypeScript](https://frontendmasters.com/courses/intermediate-typescript/)
13. [React and TypeScript](https://frontendmasters.com/courses/react-typescript/)
14. [Redux Fundamentals (feat. React)](https://frontendmasters.com/courses/redux-fundamentals/)
15. [Complete Intro to Computer Science](https://frontendmasters.com/courses/computer-science-v2/)
16. [The Last Algorithms Course You'll Need](https://frontendmasters.com/courses/algorithms/)

# Notes

## Difference between HTML DOM Document `getElementsByClassName()` and `querySelectorAll()`

- `getElementsByClassName`

  - `getElementsByClassName` returns a `HTMLCollection` and it is **live** - which is updated when the DOM changes.
  - Time complexity is O(1)

- `querySelectorAll`
  - `querySelectorAll` returns a `NodeList` and it is **not live** - so changing the DOM doesn't affect it.
  - Time complexity is O(n)

### You will got this by looking at the example below:

Firstly, I create two variables called `a` - using `getElementsByClassName` and `b` using `querySelectorAll`
![](./images/dom-1.png)
Then I delete the div has `container` class
![](./images/dom-2.png)
After that, I check value of `a` and `b`
![](./images/dom-3.png)

## Diffderence between `innerText` and `textContent`

- `innerText` returns the **visible** text contained in a node, while `textContent` returns the full text. For example, on the following code:

```html
<span>Hello <span style="display: none">World</span></span>
```

`innerText` will return `'Hello'`, while `textContent` will return `'Hello World'`

- As a result, innerText is much more performance-heavy: it requires layout information to return the result.

- `innerText` will turn `<br>` elements into newline characters, while `textContent` will just ignore them

- If you change the `text-transform` of an element by CSS, it will affect the result of `innerText`, but not the result of `textContent`.

For example:

```html
<div style="text-transform: uppercase;">Hello World</div>
```

`innerText` will be `"HELLO WORLD"`, while `textContent` will be `"Hello World"`.

For [more information](https://developer.mozilla.org/en-US/docs/Web/API/Node/textContent)

## Difference between Parameters vs Arguments in JavaScript

**Parameter** is declared inside the function header. Parameters's values is unknown until we call the function.

> **Note**: Parameters can only accessed inside function scope

**Argument** is the value that we pass into the function. When we call a function, _arguments_ we pass in will be value of the corresponding _parameters_.

## fetch & Promises

Imagine you fetch an API and you see `Promise {<state>: "pending}`, JS said: I promise I'm gonna get you this value but I don't have it yet. `Promise` is a construct in JS that lets represent a value that we don't have yet (take a while to get the value).

`Promise` can be in 3 possible states:

- `pending`: still waiting for the value
- `fulfilled` (resolved): finally got the value, all done
- `rejected`: sorry couldn't get the value, all done

It takes time for Promises to resolve, so they are "asynchronous".

But our program needs the data, we want JS to stop and wait for the `Promise` to resolve.

`await` lets us tell JS to stop and wait for an asynchronous operation to finish.

`async function` tells JS to expect to `await` async operations inside the function

> Notes: When we create a script like this `<script type="module"> </script>`, we can use `await` in there, but this will create its `own scope`, it means we can't access variables inside of this in another scope (like console on browser). Between

## import && export

`export` lets us expose variables from our module's scope to the outside world

```javascript
// myModule.js
const veryUsefulFunction = () => "I came from a module";
export { veryUsefulFunction };
```

`import` lets us use an exposed variable from another module

```javascript
// myModule.js
import { veryUsefulFunction } from "./myModule.js";
veryUsefulFunction();
```

## Browser DEbugger

You can also use the browser's debugger to _pause_ JS and inspect what's happening

```javascript
function whyIsntThisWorking(input) {
  debugger;
  return thingThatDoesntWork(input);
}
```

The `debugger` statement creates a _breakpoint_ where JS will pause and let you look around.
