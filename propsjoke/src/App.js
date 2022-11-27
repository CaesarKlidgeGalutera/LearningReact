import "./App.css";
import Jokes from "./Components/Jokes";

function App() {
  return (
    <div className="App">
      <Jokes
        setup="Ano ang tawag sa maliit na tsunami?"
        punchline="edi tsuNANO"
      />
      <Jokes
        setup="Ano ang tawag sa pusong sumusugod?"
        punchline="edi heart attack"
      />
      <Jokes
        setup="Ano ang tawag sa cellphone ng mga lola?"
        punchline="edi motoLOLA"
      />
      <Jokes
        setup="Ano ang tawag sa isdang relihiyoso?"
        punchline="edi FISH be with you"
      />
    </div>
  );
}

export default App;
