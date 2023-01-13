## What is difference between Named export, Default export ans * as export ?
when we export something from file as default,

```js
const Token_Expire_Time = 2000; //2 seconds
export default 
```

we have to import it like this,

```js
 import Token_Expire_Time from "filePath";
```

When we export something as Named export,

```js
export const Token_Expire_Time = 2000; //2 seconds
export const LogoutPageTitle = 'You\'re successfully logout!';
```

we need to import it in different way,

```js
import {Token_Expire_Time, LogoutPageTitle} from "filePath";
```

or we can also to this,

```js
import * as Constant from 'constants.js'

const time = Constant.Token_Expire_Time;
const pageTitle = Constant.LogoutPageTitle;
```

## What is the importance of config.js or constant.js file.
Suppose we want to keep some constant things like api url which we will use throughout the project, then it is good to maintain a file which will keep those things at single place.

## What are React Hooks?
Hooks are functions that let us “hook into” React state and lifecycle features from a functional component.React Hooks must be called only at the top level. It is not allowed to call them inside the nested functions, loops, or conditions. It is allowed to call the Hooks only from the Function Components.

## Why do we need a useState Hook?
`useState` hook let us create a local state variable in our functional component.

```jsx
  const [variable, setVariable] = useState('defaultValue');
```

- The current state. During the first render, it will match the initialState you have passed.
- The set function that lets you update the state to a different value and trigger a re-render.
