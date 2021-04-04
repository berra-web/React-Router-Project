import './App.css';
import Home from './pages/Home';
import ManageItem from './pages/admin/manage/ManageItem';
import Nav from './components/Nav';
import ItemPages from './pages/admin/item/ItemPages';
import UpdateItem from './pages/admin/update/UpdateItem';
import CreateItem from './pages/admin/create/CreateItem';
import 'bootstrap/dist/css/bootstrap.min.css';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";



function App() {

  
  return (
      <Router>
        <div className="App">
          <Nav />
          <Switch>
            <Route path='/' exact component={Home}/>
            <Route path='/manage-post' component={ManageItem}/>
            <Route path='/update-post/:id' component={UpdateItem}/>
            <Route path='/item-page/:id' component={ItemPages}/>
            <Route path='/create-post' component={CreateItem} />
          </Switch>
        </div>
      </Router>
  );
}

export default App;
