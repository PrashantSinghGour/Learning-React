## How do you create Nested Routes react-router-dom configuration? 
To create a nested route of any route we need to create an array of children which will contain the list of all child routes.

```jsx
const appRouter = createBrowserRouter([
  {
    path: '/',
    element: <AppLayout />,
    errorElement: <Error />,
    children: [
      {
        path: '/',
        element: <Body />
      },
      {
        path: '/about',
        element: <About />,
        children: [ // this is the children route.
          {
          /* we should not write / here before `profile` because it will consider it as localhost:1234/profile which will create an error.*/
            path: 'profile',  
            element: <Profile />
          }
        ]
      },
      {
        path: '/contact',
        element: <Contact />
      },
      {
        path: '/restaurant/:id',
        element: <RestaurantMenu></RestaurantMenu>
      }
    ]
  }
]);
```


## Read abt createHashRouter, createMemoryRouter from React Router docs.

`createHashRouter`
This router is useful if you are unable to configure your web server to direct all traffic to your React Router application. Instead of using normal URLs, it will use the hash (#) portion of the URL to manage the "application URL".

Other than that, it is functionally the same as `createBrowserRouter`. its use is not recommended.

```jsx
import * as React from "react";
import * as ReactDOM from "react-dom";
import {
  createHashRouter,
  RouterProvider,
} from "react-router-dom";

import Root, { rootLoader } from "./routes/root";
import Team, { teamLoader } from "./routes/team";

const router = createHashRouter([
  {
    path: "/",
    element: <Root />,
    loader: rootLoader,
    children: [
      {
        path: "team",
        element: <Team />,
        loader: teamLoader,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <RouterProvider router={router} />
);
```


`createMemoryRouter` Instead of using the browsers history a memory router manages it's own history stack in memory. It's primarily useful for testing and component development tools like Storybook, but can also be used for running React Router in any non-browser environment.

[Read More](https://reactrouter.com/en/main/routers/create-memory-router)


## What is the order of life cycle method calls in Class Based Components?

There are 3 stages and 2 phases as shown below in diagram.

In `mounting` stage, when component renders 1st time.
  - In first phase i.e, render phase, constructor called after that component gets render.
  - In Second phase i.e, commit phase, React update the DOM and Refs after that `componentDidMount` lifecycle gets called.

In `updating` stage, when props or state is updated.
  - In first phase, component get render again.
  - In second phase, React update the DOM and Refs after that `componentDidUpdate` lifecycle gets called.

In `unmounting` stage, when component is destroyed after use is navigated to other page.
  - `componentWillUnmount` get called, where we can clear the resources getting used in our component such as subscription to socket, setIntervals etc.



![React Lifecycle Diagram](https://projects.wojtekmaj.pl/react-lifecycle-methods-diagram/ogimage.png)

<br/>
<br/>

## Why do we use componentDidMount?
Suppose we want call an api, so it is the place where we can do that, because `componentDidMount` gets called only once i.e, after first render (mounting stage).

## Why do we use componentWillUnmount? Show with example.
This is the place, where we can clear the resources of our component.

```jsx
componentDidMount() {
  this.interval = setInterval(()=> {
    console.log('logging interval');
  }, 1000);
}

componentWillAmount() {
  clearInterval(this.interval);
}
```

## Why do we use super(props) in constructor?

There is only one reason when one needs to pass props to super():

When you want to access this.props in constructor.

Passing:

```jsx
class MyComponent extends React.Component {    
    constructor(props) {
        super(props)

        console.log(this.props)
        // -> { icon: 'home', … }
    }
}
```

Not passing:
```jsx
class MyComponent extends React.Component {    
    constructor(props) {
        super()

        console.log(this.props)
        // -> undefined

        // Props parameter is still available
        console.log(props)
        // -> { icon: 'home', … }
    }

    render() {
        // No difference outside constructor
        console.log(this.props)
        // -> { icon: 'home', … }
    }
}
```

Note that passing or not passing props to super has no effect on later uses of this.props outside constructor. That is render, shouldComponentUpdate, or event handlers always have access to it.


## Why can't we have the callback function of useEffect async?
This WORKS, but you should avoid it. Why? Because React’s useEffect hook expects a cleanup function returned from it which is called when the component unmounts. Using an async function here will cause a bug as the cleanup function will never get called. 
```jsx
// ❌ Don't do this!
useEffect(async () => {
  const users = await fetchUsers();
  setUsers(users);

  return () => {
    // this never gets called, hello memory leaks...
  };
}, []);
```

So what we do is call async function inside `useEffect`.

```jsx
// 🆗 Ship it
useEffect(() => {
  const getUsers = async () => {
    const users = await fetchUsers();
    setUsers(users);
  };

  getUsers(); // run it, run it

  return () => {
    // this now gets called when the component unmounts
  };
}, []);
```

Either way, we’re now safe to use `async` functions inside `useEffect` hooks. Now if/when you want to return a cleanup function, it will get called and we also keep `useEffect` nice and clean and free from race conditions.
