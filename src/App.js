import './App.css';
import Navbar from './component/Navbar';
import Table from './component/Table';
import Footer from './component/Footer';


function App() {

  return (
    <div className='bg'>
      <div className="myBG">
        <Navbar />
      </div>
      <div className="myTable">
        <Table />
      </div>
      <footer>
        <Footer />
      </footer>
    </div>
  );
}

export default App;
