import './App.css';
import MainComponent from './Components/MainComponent';
import { Component } from 'react';
import {BrowserRouter} from 'react-router-dom';
import {Provider} from 'react-redux';
import {ConfigStore} from './redux/configStore';

//Provider makes the redux store to be available for our project

const store = ConfigStore();

class App extends Component{
render()
{  return (
  <Provider store={store}>
    <BrowserRouter>
      <div >  
        <MainComponent/>
      </div>
    </BrowserRouter>
  </Provider>
  
  );
}
}

export default App;
