//import ReactDOM from 'react-dom';

import Header from "./Header";
import Footer from "./Footer";

ReactDOM.render(
  <div>
    <Header />
    <Page />
    <Footer />
  </div>,
  document.getElementById("root")
);

/*We import React from "react" because the JSX syntax is defined in "react"


Declarative - it will know how to do things without telling the details of the process

Imperative - tell the computer step-by-step how to do anything

Composable - It means that you can make small ui and put it in different components to make a build a website.
 It will also make you website maintainable

 React component are reasuable codes, they are created so our application is more maintainable.
 it is a function that returms React elements

*/
