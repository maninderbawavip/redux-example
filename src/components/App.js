import './App.css';
import Celebs from './Celebs';
import EditName from './EditName';
import Search from './Search';
import UserInfo from './UserInfo';

function App() {
  return (
    <div className="App">
      <header className="App-header">

        <Search />
        <Celebs />

      </header>
    </div>
  );
}

export default App;
