## What are various ways to add images into our App? Explain with code examples.
we can add images either by using CDN or by storing images inside project folder, usually in web development we name such a folders as assets.

In case of CDN we can use image url directly.

```jsx
const MyComponent = () => {
  return (
    <div>
      <img src={'https://cdn.searchenginejournal.com/wp-content/uploads/2022/06/tineye-image-62c6eb4de8ce8-sej.png'} alt="img_of_something"/>
    </div>
  );
  export default MyComponent;
}
```

In case of assets.

```jsx
import Logo from 'asset-path/image-name.extension';

const MyComponent = () => {
  return (
    <div>
      <img src={Logo} alt="logo"/>
    </div>
  );

  export default MyComponent;
}
```

## What would happen if we do console.log(useState())?
we will get an array as `[undefined, f]`.

## How will useEffect behave if we don't add a dependency array ?
Its callback function will be called after every render.

```jsx
useEffect(()=> {
// do something
});
```

## What is SPA?
An `SPA` (Single-page application) is a web app implementation that loads only a single web document, and then updates the body content of that single document via JavaScript APIs such as `XMLHttpRequest` and `Fetch `when different content is to be shown.

## What is difference between Client Side Routing and Server Side Routing?
 - With server-side routing you download an entire new webpage whenever you click on a link.
 - With client-side routing the webapp downloads, processes and displays new data for you.
