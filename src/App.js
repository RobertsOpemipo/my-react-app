import logo from './logo.svg';
import './App.css';
import CarList from './components/CarList';
import './index.css'

function App() {
  return (

      <div>
        <CarList />
        {/* <h1 className='text-9xl text-cyan-600'>Hello</h1> */}
      </div>
    // <div className="App">
    //   <header className="App-header">
    //     <img src={logo} className="App-logo" alt="logo" />
    //     <p>
    //       Edit <code>src/App.js</code> and save to reload.
    //     </p>
    //     <a
    //       className="App-link"
    //       href="https://reactjs.org"
    //       target="_blank"
    //       rel="noopener noreferrer"
    //     >
    //       Learn React
    //     </a>
    //   </header>
    // </div>
  );
}

export default App;
