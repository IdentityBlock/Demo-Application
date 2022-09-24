import "./App.css";
// import Initial from "./components/Initial";
import Navbar from "./components/Navbar";
import Toolbar from "./components/Toolbar";
import Tabs from "./components/Tabs";
import Buttonbar from "./components/Buttonbar";

function App() {
  return (
    <div>
      {/* <Initial /> */}
      <Navbar />
      <div style={{ height: 20 }}></div>
      <Toolbar />
      <Tabs />
      <span className="apply-for">Apply For:</span>
      <Buttonbar />
    </div>
  );
}

export default App;
