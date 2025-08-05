import "./App.css";

function App() {

  fetch("http://localhost:8080/produtos")
    .then((response) => response.json())

  

  return <h1>Olá mundo</h1>;
}

export default App;
