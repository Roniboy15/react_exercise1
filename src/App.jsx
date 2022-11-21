import logo from './logo.svg';
import './App.css';
import Header from './components/header/header';
import Main from './components/main/main';
import Gift from './components/gift/gift';

function App() {
  return (
    <div className='conatiner-fluid'>
      <div className='row justify-content-center'>
        <Header/>
        <Main/>
        <Gift/>
      </div>
    </div>
  );
}

export default App;
