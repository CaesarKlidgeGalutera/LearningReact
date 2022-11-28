import "./App.css";
import { Navbar, Hero, Card } from "./components";
import image12 from "./components/images/image12.svg";
import wedding from "./components/images/wedding.svg";
import mountainbike from "./components/images/mountainbike.svg";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Hero />
      <Card
        img={image12}
        rating="5.0"
        reviewCount="(6)"
        title="Life lessons with Katie Zafares"
        price="$136"
      />
      <Card
        img={wedding}
        rating="5.0"
        reviewCount="(30)"
        title="Learn wedding photography"
        price="$125"
      />
      <Card
        img={mountainbike}
        rating="4.8"
        reviewCount="(2)"
        title="Group Mountain Biking"
        price="$50"
      />
      <Card
        img={image12}
        rating="5.0"
        reviewCount="(6)"
        title="Life lessons with Katie Zafares"
        price="$136"
      />
      <Card
        img={wedding}
        rating="5.0"
        reviewCount="(30)"
        title="Learn wedding photography"
        price="$125"
      />
      <Card
        img={mountainbike}
        rating="4.8"
        reviewCount="(2)"
        title="Group Mountain Biking"
        price="$50"
      />
      <Card
        img={image12}
        rating="5.0"
        reviewCount="(6)"
        title="Life lessons with Katie Zafares"
        price="$136"
      />
    </div>
  );
}

export default App;
