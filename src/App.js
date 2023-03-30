import './App.css';
import Navbar from './component/Navbar';
import Table from './component/Table';


function App() {

  return (
    <div>
      <div className="myBG">
        <Navbar />
      </div>
      <div className="myTable">
        <Table />
        {/* <Testing /> */}
      </div>
    </div>
  );
}

export default App;
