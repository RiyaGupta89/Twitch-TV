import './App.css';
import Header from "./Header";
import Sidebar from "./Sidebar";
import Hero from "./Hero";

function App() {
  return (
    <div className="app">
        <Header />
        <div className="app__main">
        <Sidebar />
        <Hero />
        </div>
    </div>
  );
}

export default App;
