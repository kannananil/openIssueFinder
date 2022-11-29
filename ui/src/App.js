import './App.css';
import Repos from './components/Repos';
import Navbar from './components/Navbar';

const App = () => {
  return (
    <div className='App'>
      <Navbar/>
      <Repos/>
    </div>
  );
}

export default App;
