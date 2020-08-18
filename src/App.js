import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import MoviewMain from './Components/MoviesMain';
import './App.css';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <Router>
        <Route path={['/']} component={MoviewMain}></Route>
      </Router>
    );
  }
}

export default App;
