import React from 'react';
import './App.css';
import Nav from './components/Nav';
import About from './components/About';
import Countries from './components/Countries';
import Country from './components/Country';

import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'

function App() {
  return (
    <Router>
      <Nav />
      <div className="App">
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/about" component={About} />
          <Route path="/countries" component={Countries} />
          <Route path="/countries/:id" component={Country} />
        </Switch>
      </div>
    </Router>
  );

} // end App()

function Home() {
  return (
    <div className="container">
      <h1>Scoutbase Frontend Siele</h1>  
    </div>
  );

} // end Home()

export default App;

/** Scoutbase Frontend Instructions 

# Front-end task of Code Challenge for Scoutbase

This task is for demonstrating your understanding of HTML, CSS, Javascript, React & related libraries.

If you’re doing the front-end only, you must use the .

Preferred libraries:
  1. `styled-components` for styling
  2. `apollo-client` for consuming GraphQL API
  3. `react-router` or any alternative to implement routing

Instructions:

1. Create a `create-react-app` repo.
2. Add a router with routes:
  - `/` - for displaying basic links for the other routes
  - `/countries` - for requesting GraphQL API and rendering the list
  - `/countries/(:code)` - for requesting GraphQL API and rendering the properties of a continent
3. Design is totally by you.
4. Countries list at `/countries` must contain the list of countries and the languages spoken in that country. 
   Both in English and native languages. It should also contain the continent it is located in.
5. `/countries/(:code)` must render the currency and a area code (phone) of that country.
6. Routes must be fully loadable with a direct link. `/countries/CI` must render the page for Ivory Coast, for example.
7. End. 
*/