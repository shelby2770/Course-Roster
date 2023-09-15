import "./App.css";
import Header from "./components/Header";
import Contents from "./components/contents";

function App() {
  return (
    <>
      <Header></Header>
      <div className="flex flex-row">
        <div className='basis-4/5'>
          <Contents></Contents>
        </div>
        <div>
          <div className="w-1/2 h-12 border-2 border-red-500"></div>
        </div>
      </div>
    </>
  );
}

export default App;
