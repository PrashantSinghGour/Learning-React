import React from "react";
import ReactDOM from "react-dom/client";

const container = React.createElement('div', {
  id: 'container',
  className: 'title'
},
  [
    React.createElement('h1', {
      style: { color: 'red' },
      key: 'header1'
    },
      'Im a header1'
    ),
    React.createElement('h2', {
      style: { color: 'red' },
      key: 'header2'
    },
      'Im a header2'
    ),
    React.createElement('h3', {
      style: { color: 'red' },
      key: 'header3'
    },
      'Im a header3'
    )
  ]);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(container);
