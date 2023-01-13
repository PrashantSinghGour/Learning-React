## What is JSX?
It is HTML like syntax in Javascript, but it is not a HTML for example HTML doesn't support key attribute.

## Superpowers of JSX?
- Easy to read.
- Maintainable.
- HTML like Syntax.

## Role of `type` attribute in script tag? What options can I use there?
Type attribute specifies the type of script.
 default value can is `application/javascript` or `application/ecmascript`, we can also set it to   `module`, this value causes the code to be treated as a JavaScript module.

## `{TitleComponent}` vs `{<TitleComponent/>}` vs `{<TitleComponent></TitleComponent>}` in JSX.

we can render JSX element as `{TitleComponent}` in our JSX code as follows,

```jsx
const IconComponent = (
  <svg xmlns="http://www.w3.org/2000/svg" class="user-icon" viewBox="0 0 512 512">
    <path style={{ fill: 'white' }} d="M258.9 48C141.92 46.42 46.42 141.92 48 258.9c1.56 112.19 92.91 203.54 205.1 205.1 117 1.6 212.48-93.9 210.88-210.88C462.44 140.91 371.09 49.56 258.9 48zm126.42 327.25a4 4 0 01-6.14-.32 124.27 124.27 0 00-32.35-29.59C321.37 329 289.11 320 256 320s-65.37 9-90.83 25.34a124.24 124.24 0 00-32.35 29.58 4 4 0 01-6.14.32A175.32 175.32 0 0180 259c-1.63-97.31 78.22-178.76 175.57-179S432 158.81 432 256a175.32 175.32 0 01-46.68 119.25z" />
    <path d="M256 144c-19.72 0-37.55 7.39-50.22 20.82s-19 32-17.57 51.93C191.11 256 221.52 288 256 288s64.83-32 67.79-71.24c1.48-19.74-4.8-38.14-17.68-51.82C293.39 151.44 275.59 144 256 144z" />
  </svg>
);

const HeadersComponent = () => {
  return (
    <div className="header">
      <h2 style={{ color: 'white' }}>Im a Logo</h2>
      <span className="search"><input name="search" type="search" placeholder="Search..." /></span>
      <span>
        {IconComponent} {/*use as JSX element*/}
      </span>
    </div>
  )
}
```


we can render our functional component as `{<TitleComponent/>}` or `{<TitleComponent></TitleComponent>}` inside our JSX component (AKA Component composition).

```jsx
const IconComponent = () => (
  <svg xmlns="http://www.w3.org/2000/svg" class="user-icon" viewBox="0 0 512 512">
    <path style={{ fill: 'white' }} d="M258.9 48C141.92 46.42 46.42 141.92 48 258.9c1.56 112.19 92.91 203.54 205.1 205.1 117 1.6 212.48-93.9 210.88-210.88C462.44 140.91 371.09 49.56 258.9 48zm126.42 327.25a4 4 0 01-6.14-.32 124.27 124.27 0 00-32.35-29.59C321.37 329 289.11 320 256 320s-65.37 9-90.83 25.34a124.24 124.24 0 00-32.35 29.58 4 4 0 01-6.14.32A175.32 175.32 0 0180 259c-1.63-97.31 78.22-178.76 175.57-179S432 158.81 432 256a175.32 175.32 0 01-46.68 119.25z" />
    <path d="M256 144c-19.72 0-37.55 7.39-50.22 20.82s-19 32-17.57 51.93C191.11 256 221.52 288 256 288s64.83-32 67.79-71.24c1.48-19.74-4.8-38.14-17.68-51.82C293.39 151.44 275.59 144 256 144z" />
  </svg>
);

const HeadersComponent = () => {
  return (
    <div className="header">
      <h2 style={{ color: 'white' }}>Im a Logo</h2>
      <span className="search"><input name="search" type="search" placeholder="Search..." /></span>
      <span>
        {<IconComponent/>} {/*used as JSX Component*/}
        {/*or we can write it as `{<TitleComponent></TitleComponent>}`*/}
      </span>
    </div>
  )
}
```
