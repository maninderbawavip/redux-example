import React, { Component } from 'react';
import { AppContext } from '../contexts/AppContext';
import './App.css';
import Celebs from './Celebs';
import EditName from './EditName';
import Search from './Search';
import UserInfo from './UserInfo';

class App extends Component {

  constructor(props){
    super(props);
    this.state = {
      theme: "light"
    }
  }


  changeTheme = () => {
    this.setState({ theme: this.state.theme === "light" ? "dark": "light"})
  }

  render(){

    return (
      <div className="App">
        <header className="App-header">

          {/* //exposed some value from provider */}
          <AppContext.Provider value={{
            currentTheme: this.state.theme,
            changeTheme: this.changeTheme
          }}>
            <Search />
            
            <Celebs />
          </AppContext.Provider>
        </header>
      </div>
    );

  }
  
}

export default App;
