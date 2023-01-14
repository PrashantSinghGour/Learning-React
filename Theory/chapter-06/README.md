## What is a Microservice?
Microservices - also known as the microservice architecture - is an architectural style that structures an application as a collection of services that are

- Independently deployable
- Loosely coupled
- Organized around business capabilities
- Owned by a small team
- Highly maintainable and testable

The microservice architecture enables the rapid, frequent and reliable delivery of large, complex applications. It also enables an organization to evolve its technology stack.

## What is Monolith architecture?
Monolith arch. is a traditional way of developing softwares, where everything is kept in one place.
Monolithic software is designed to be self-contained, wherein the program's components or functions are tightly coupled rather than loosely coupled, like in modular software programs.

## What is the difference between Monolith and Microservice?
In Monolith Arch. everything is kept in one code base which is easier to manage in small application, while in case of Microservice Arch. code is distributed over the different code bases for ex, one service will handle authentication while other will manage calculations.

Microservices are easily scalable but require security checks in all the services, whereas in case of Monolith we can handle security at on point.

read more at [monolithic-vs-microservice-architecture](https://www.digitalocean.com/blog/monolithic-vs-microservice-architecture)


## Why do we need a useEffect Hook?
The Effect Hook lets you perform side effects in function components.
Data fetching, setting up a subscription, and manually changing the DOM in React components are all examples of side effects.

## What is Optional Chaining?
The optional chaining (?.) operator accesses an object's property or calls a function. If the object accessed or function called is undefined or null, it returns undefined instead of throwing an error.

## What is Shimmer UI?
A shimmer screen is a version of the UI that doesn’t contain actual content. Instead, it mimics the page’s layout by showing its elements in a shape similar to the actual content as it is loading and becoming available (i.e. when network latency allows).

A shimmer screen is essentially a wireframe of the page, with placeholder boxes for text and images. 

## What is the difference between JS expression and JS statement?
An expression is any valid unit of code that resolves to a value, where as statement is a unit of code that performs an action.

```js
// Statements
let x = 0;
function add(a, b) { return a + b; }
if (true) { console.log('Hi'); }

// Expressions
x;          // Resolves to 0
3 + x;      // Resolves to 3
add(1, 2);  // Resolves to 3
```

## What is Conditional Rendering, explain with a code example.
Your components will often need to display different things depending on different conditions. In React, you can conditionally render JSX using JavaScript syntax like if statements, &&, and ? : operators.

```jsx 

export function Example() {
  const [count, setCount] = useState(0);

  return !count ? <div>
    <p>Count is Zero</p>
    <button onClick={() => setCount(count + 1)}>Click me</button>
  </div>: (
    <div>
      <p>You clicked {count} times</p>
      <button onClick={() => setCount(count + 1)}>Click me</button>
    </div>
  );
}

```
## What is CORS?
Cross-Origin Resource Sharing (CORS) is basically a HTTP header based mechanism, which is used by server to put restriction on APIs and resources.

read more at [CORS](https://developer.mozilla.org/en-US/docs/Web/HTTP/CORS)

## What is async and await? 
The async function declaration declares an async function where the await keyword is permitted within the function body. The async and await keywords enable asynchronous, promise-based behavior to be written in a cleaner style, avoiding the need to explicitly configure promise chains.

```js
function resolveAfter2Seconds() {
  return new Promise(resolve => {
    setTimeout(() => {
      resolve('resolved');
    }, 2000);
  });
}

async function asyncCall() {
  console.log('calling');
  const result = await resolveAfter2Seconds();
  console.log(result);
  // Expected output: "resolved"
}

asyncCall();
```


## What is the use of `const json = await data.json();` in  getRestaurants()
The json() method of the Response interface takes a Response stream and reads it to completion. It returns a promise which resolves with the result of parsing the body text as JSON.

read it more here [use of response.json](https://developer.mozilla.org/en-US/docs/Web/API/Response/json)
