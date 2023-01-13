import React from "react";
import ReactDOM from "react-dom";

const header = React.createElement('h1', {
  key: 'header1'
  /**
  Keys help React identify which items have changed, are add
  ed, or are removed. Keys should be given to the elements inside the arr
  ay to give the elements a stable identity */
}, 'Text to be shown!');

const header2 = React.createElement('h2', {
  style: { color: 'red' },
  key: 'header2'
},
  'Im a header2'
);
const container = React.createElement('div', {
  id: 'container'
},
  [
    header,
    header2
  ]);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(container);
