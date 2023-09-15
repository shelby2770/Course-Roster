import "./App.css";
import Header from "./components/Header";
import Contents from "./components/contents";

function App() {
  return (
    <>
      <Header></Header>
      <div id="all_contents">
        <Contents></Contents>
      </div>
    </>
  );
}

export default App;
