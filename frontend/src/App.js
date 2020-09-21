import React, { Component } from 'react';
import './App.css';
import { Route, BrowserRouter as Router } from "react-router-dom";
import AddProduto from './Components/AddProduto';
import Table from './Components/Table';
import ViewProduto from './Components/ViewProduto';


class App extends Component {
  render()
  {
      return (
        <Router>
          <Route exact path="/" component={AddProduto} />
          <Route exact path="/view" component={Table} />
          <Route exact path="/produto_view" component={ViewProduto} />
        </Router>  
      );
  }
}

export default App;
