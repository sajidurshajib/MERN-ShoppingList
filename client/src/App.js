import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import NavBar from './components/AppNavbar'
import ItemModal from './components/ItemModal'
import ShoppingList from './components/ShoppingList'
import {Provider} from 'react-redux'
import store from './store'
import {loadUser} from './actions/authAction'
import { Component } from 'react';

class App extends Component{ 
  componentDidMount(){
    store.dispatch(loadUser())
  }
  render(){
    return (
      <Provider store={store}>
        <div className="App">
          <NavBar />
          <ItemModal />
          <ShoppingList />
        </div>
      </Provider>
    )
  };
}

export default App;
