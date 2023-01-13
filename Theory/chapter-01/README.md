## What is Emmet?
Emmet (formerly known as Zen Code) is basically a code editor plug-in which enables the developer for high speed coding and edting of HTML, XML and other structured code format via content assist.

for example `div#page>div.logo+ul#navigation>li*5>a` can be written for,

```html
<div id="page">
	<div class="logo"></div>
	<ul id="navigation">
		<li><a href=""></a></li>
		<li><a href=""></a></li>
		<li><a href=""></a></li>
		<li><a href=""></a></li>
		<li><a href=""></a></li>
	</ul>
</div>
```

## Difference between a Library and Framework?
The difference lies between inversion of control, which provide what. 

- Library
   * When we use libarary, we control the flow of our code.
  
- Framework 
   * It provides us slots where we put our code and framework decides when it will call it and use it.

## What is CDN? Why do we use it?
  CDN (Content Deliveery Network) is basically a network by which content is delivered to web-enabled devices with the help of caching the data near the user.
 - With CDN origin server also get less stress because of geographically situated servers provide the data to nearest users.
 - It reduces the time required to deliver the data to the user.

## Why is React known as React?
Because it reacts to change in state and prop, It changes the particular part of the code instead of refreshing the completed page.

## What is crossorigin in script tag?
Provides support for CORS( Cross-Origin Resource Sharing is an HTTP-header based mechanism that allows a server to indicate any origins (domain, scheme, or port) other than its own from which a browser should permit loading resources. ), defining how the element handles cross-origin requests, thereby enabling the configuration of the CORS requests for the element's fetched data.

## What is diference between React and ReactDOM?
- The react package holds the react source for components, state, props and all the code that is react.
- The react-dom package as the name implies is the glue between React and the DOM. Often, you will only use it for one single thing: mounting your application to the index.html file with ReactDOM.render().
- The reason React and ReactDOM were split into two libraries was due to the arrival of React Native (A react platform for mobile development).

## What is difference between react.development.js and react.production.js files via CDN?
 the `.development` contains user understandable code while `.production` contains minified code which is optimized for production applications.
 
 ## What is async and defer?
 
Case when both of these two are not applied.
  - HTML parsing is start, as soon as script tag is encountered HTML pasing is stopped and script are fetched from the network and then executed,
   after execution is completed, HTML parsing is start again.

Case when async is applied.
  - HTML parsing is start and the script with async are fetched and as soon as scripts are arrived HTML parsing is halted and scripts are executed after scripts are 
   executed, HTML parsing starts again.

Case when defer is applied.
  - In case of defer HTML is parsed first and script with defer are fetched parally, after HTML is parsed completely, script execution is start.

 ![Async_defer](https://www.growingwiththeweb.com/images/2014/02/26/async-vs-defer-twitter.png)
