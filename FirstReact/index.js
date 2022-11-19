const myPage = (
  <div>
    <img src="React-icon.png" width="40px"></img>
    <h1>Fun facts about React</h1>
    <ul>
      <li>Was first released in 2013</li>
      <li>Was originally created by Jordan Walke</li>
      <li>My Name is Caesar Klidge C. Galutera</li>
    </ul>
  </div>
);

ReactDOM.render(myPage, document.getElementById("root"));

/*We import React from "react" because the JSX syntax is defined in "react"


Declarative - it will know how to do things without telling the details of the process

Imperative - tell the computer step-by-step how to do anything

Composable - It means that you can make small ui and put it in different components to make a build a website.
 It will also make you website maintainable
*/
