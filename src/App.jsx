import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { Switch } from 'react-router-dom';
import React from 'react';
import HomePage from './Components/HomePage';
import SearchBar from './Components/SearchBar';
import Calendar from './Components/Calendar';
import Chat from './Components/Chat';
import Login from './Components/LogIn';
import Register from './Components/Register';
import Register from './Components/MapComponent';

const App = () => {
  return (
    <Router>
      <Switch>
        <Route path="/" exact component={HomePage} />
        <Route path="/search" component={SearchBar} />
        <Route path="/calendar" component={Calendar} />
        <Route path="/chat" component={Chat} />
        <Route path="/login" component={Login} />
        <Route path="/register" component={Register} />
        <Route path="/MapComponent" component={Register} />
      </Switch>
    </Router>
  );
};

export default App;

