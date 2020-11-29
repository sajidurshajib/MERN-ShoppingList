import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import NavBar from './components/AppNavbar'
import ItemModal from './components/ItemModal'
import ShoppingList from './components/ShoppingList'
import {Provider} from 'react-redux'
import store from './store'

function App() { 
  return (
    <Provider store={store}>
      <div className="App">
        <NavBar />
        <ItemModal />
        <ShoppingList />
      </div>
    </Provider>
  );
}

export default App;
