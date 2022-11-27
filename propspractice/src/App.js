import "./App.css";
import Contact from "./component/contact/Contact";

function App() {
  return (
    <div>
      <Contact
        img=""
        name="Mr. Whiskerson"
        img2=""
        contactNum="(212) 555-1234"
        img3=""
        email=" mr.whiskaz@catnap.meow"
      />

      <Contact
        img=""
        name="Mr. Whiskerson"
        img2=""
        contactNum="(212) 555-1234"
        img3=""
        email=" mr.whiskaz@catnap.meow"
      />

      <Contact
        img=""
        name="Mr. Whiskerson"
        img2=""
        contactNum="(212) 555-1234"
        img3=""
        email=" mr.whiskaz@catnap.meow"
      />

      <Contact
        img=""
        name="Mr. Whiskerson"
        img2=""
        contactNum="(212) 555-1234"
        img3=""
        email=" mr.whiskaz@catnap.meow"
      />
    </div>
  );
}

//props help us accomplish change contents of our code without hard coding it - makes it resuable

//we can pass a prop into a component by
//<MyComponent myProp="***"/>

/*
we can recieve a prop in a component in this example

function Navbar(props){
  return(
    <header>
      {props.myProp}
    </header>
  )
}
*/
export default App;
