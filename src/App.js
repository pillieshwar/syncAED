import "./App.css";
import Home from "./components/home";
import Header from "./components/header";
import Navbar from "./components/navbar";


function App() {
  return (
    <div className='App'>
      <Header />
      <Navbar />
      <Home />
    </div>
  );
}

export default App;
