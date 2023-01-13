## Is JSX mandatory for React?
No JSX in not mandatory, we can use React.createElements to code in React as well, but JSX make code readable and developer friendly.

## Is ES6 mandatory for React?
No ES6 is not mandatory in react at all.

##  {TitleComponent} vs {<TitleComponent/>} vs {<TitleComponent></TitleComponent>} in JSX?
When we have to render a react element we can use `{TitleComponent}` and to render component in react we can use `{<TitleComponent/>}` and `{<TitleComponent></TitleComponent>}` alternatively.

## How can I write comments in JSX?
Same like JS we can write comment in JSX inside `{}`.

```jsx
{// Single line comment}

{/*
 * Multi
 * line 
 * comment
`*/}
```

## What is <React.Fragment></React.Fragment> and <></> ?
In React there can be only one parent element for ex.
```jsx
const MyElement = (
  <div>
      <p>I'm a p tag</p>
  </div>
  );
```

but when we want to write something like this, then react gives error of having only one parent no siblings allowed. 

```jsx
// WILL GIVE ERROR.
const MyElement = (
  <div>
      <p>I'm a first p tag</p>
  </div>
    <div>
      <p>I'm a Second p tag</p>
  </div>
);
```

to fix that issue we can wrap our code between `<React.Fragment></React.Fragment>` or `<></>` like this,
```jsx
const MyElement = (
<>
  <div>
      <p>I'm a first p tag</p>
  </div>
    <div>
      <p>I'm a Second p tag</p>
  </div>
</>
);
```

## What is Virtual DOM?
Virtual DOM is the programming concept where ideal or virtual state is maintained in memory and synced with actual or real DOM of browser. 

## What is Reconciliation in React?
It is a process in react, React DOM compares the element and its children to previous one, and only applies the DOM updates necessary to bring the DOM to the desired state.

```txt
React's diffing algorithm makes component updates faster for high performance apps. When render() function is called, 
React is creating a tree of React elements. When another time, render function is called, new tree is created. Here, React
needs to figure out optimal way of applying updates on real DOM based on the recent tree. So, there are some solutions like
state of art algorithms takes O(n^3) where n is the number of elements in tree. If React has 1000 elements in tree, it is costly.

for comparison. React implements heuristic O(n) algorithm with two assumptions:
  a) two elements of different type will have different tree
  b) children elements will have a key

 - When root elements have different tree, old DOM nodes are destroyed and new are created.
 - When DOM elements has same type, React looks at DOM attributes and only updates the attribute changes.
 - In case of children, if no key is provided, when adding items at start of list, it will re-render everything as it doesn't know what element it can persist. In order to solve this, React supports key attribute. The key should be unique among siblings, not globally. If no options, we can use index as key but only if there is no need of items to be re-ordered. If they need to be re-order, the process will be slow. Keys should be stable, predictable and unique. Unstable keys such as produced by Math.random() will cause performance degradation and loss of state in child components.
```

## What is React Fiber?
It is new reconciliation engine introduced in React 16. Its goal is to enable incremental rendering of virtual DOM.
Features of React Fibers are as follows - 

pause work and come back to it later.
assign priority to different types of work.
reuse previously completed work.
abort work if it's no longer needed.

## Why we need keys in React? When do we need keys in React?
To make the reconciliation process faster we should use key attributes on sibling element so that React can identify which elements is exactly updated. 
## Can we use index as keys in React?
It is not recommended to use index as a key it may cause some performance issues. use of index might break your code or display wrong data. for example in a array we have removed index 2 and added element also has index 2 so the react will think they are same and it will not render new code.

## What is props in React? 
React functional component are nothing but a normal functions, so to get the data from outside function needs a parameter that parameter in react terminology is called props.

## What is a Config Driven UI ?
A config-driven UI is a type of user interface (UI) that is designed to be driven and configured via configuration files. The idea is that the UI should be flexible and customizable, so a user can define and configure the look and feel of the UI according to their own preferences. This can range from simple colors and fonts to more complex elements like layout, animation, and interactivity. Config-driven UIs can be used for web, desktop, or mobile applications.





