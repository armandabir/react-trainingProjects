import Header from "./components/Header.jsx";
import CoreConcepts from "./components/CoreConcepts.jsx";
import Examples from "./components/Examples.jsx";

function App() {
  return (
    <>
     <Header/>
      <main>
        <h2>Time to get started!</h2>
        <CoreConcepts/>
        <Examples/>
      </main>
    </>
  );
}

export default App;
