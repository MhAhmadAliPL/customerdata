import "./App.css";
import DenseTable from "./Components/CustomerTable/CustomerTable";
import Navbar from "./Components/Navbar/Navbar";

function App() {
  return (
    <div className="App">
      <div>
        <Navbar />
      </div>
      <div>
        <DenseTable />
      </div>
    </div>
  );
}

export default App;
