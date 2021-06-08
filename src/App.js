import "./App.css";
import Footer from "./Footer/footer";
import Header from "./Header/Header";
import gasgasgas from "./Son/manuel-gas-gas-gas.mp3";
import beaver from "./Image/290px-American_Beaver.jpg";

function App() {
  const user = {
    firstName: "ZORAB DE LA NUIT",
  };
  const content_fr = {
    greetingsMessage: "Hello Traveler ! ",
  };

  return (
    <div className="App">
      <Header pseudo={user.firstName} message={content_fr.greetingsMessage} />

      <header className="App-header">
        <img src={beaver} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>

        <audio controls autoplay>
          <source src={gasgasgas} type="audio/ogg" />
        </audio>

        <a
          className="App-link"
          href="https://wh40k-fr.lexicanum.com/wiki/Accueil"
          target="_blank"
          rel="noopener noreferrer"
        >
          <h1>Ameno , imperidum adapare AMENO !</h1>
        </a>
      </header>
      <Footer/>
    </div>
  );
}

export default App;
