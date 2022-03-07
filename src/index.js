import React from "react";
import ReactDOM from "react-dom";

const myfirstelement = (
  <div>
    <h1>We are rendering this myfirstelement in the React DOM</h1>
    <h1>We must render multiple things inside a parent element like a div</h1>
    <h1>
      This index.js file is being run inside the root div element in the
      index.html file.
    </h1>
  </div>
);

// JS comments work here

ReactDOM.render(myfirstelement, document.getElementById("root"));
