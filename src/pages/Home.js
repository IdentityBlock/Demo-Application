import Navbar from "../components/Navbar";
import Toolbar from "../components/Toolbar";
import Tabs from "../components/Tabs";
import Buttonbar from "../components/Buttonbar";

function Home() {
  return (
    <>
      <Navbar />
      <div style={{ height: 20 }}></div>
      <Toolbar />
      <Tabs />
      <span className="apply-for">Apply For:</span>
      <Buttonbar />
    </>
  );
}
export default Home;
