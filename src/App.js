import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import ApolloClient from 'apollo-boost';
import { ApolloProvider } from '@apollo/react-hooks';

import './App.css';
import Nav from './components/Nav';
import About from './components/About';
import Home from './components/Home';
import Countries from './components/Countries';
import Country from './components/Country';
import ButtonLinks from './utilities/ButtonLinks';

const client = new ApolloClient({
  uri: 'https://countries.trevorblades.com/'
});

// Trial data fetch
/* client
  .query({
    query: gql`
      query {
        countries {
          name,
          code,
          native,
          phone,
          currency,
          languages {
            name,
            native
          },
          continent {
            name
          }
        }
      }
    `
  })
  .then(result => {
    console.log(`result: ${result}`);
    let countries = result.data.countries;
    console.log(countries);
  }) */

function App() {
  return (
    <ApolloProvider client={client}>
      <Router>
        <Nav />
        <div className="container">
          <Switch>
            <Route exact path="/" component={Home} />
            <Route exact path="/about" component={About} />
            <Route exact path="/countries" component={Countries} />
            <Route exact path="/countries/:code" component={Country} />
            <Route component={Page404} />
          </Switch>
        </div>
      </Router>
    </ApolloProvider>
    
  ); // end return

} // end App()

function Page404({ location }) {
  const style404 = {
    marginTop: '30px',
    fontSize: '2.9em'
  }
  return <div className="content-area">
    <h2 style={style404}>Sorry, we couldn't find the page you requested:<br /> 
    <code>{location.pathname}</code></h2><br/>
    <ButtonLinks />
  </div>
}

export default App;

/** Scoutbase Frontend Instructions 

# Front-end task of Code Challenge for Scoutbase

This task is for demonstrating your understanding of HTML, CSS, Javascript, React & related libraries.

If you’re doing the front-end only, you must use the https://countries.trevorblades.com endpoint for GraphQL API.

Preferred libraries:
  1. `styled-components` for styling ------used Bootstrap
  2. `apollo-client` for consuming GraphQL API ------completed
  3. `react-router` or any alternative to implement routing ------completed

Instructions:

1. Create a `create-react-app` repo. ------completed
2. Add a router with routes:
  - `/` - for displaying basic links for the other routes ------completed
  - `/countries` - for requesting GraphQL API and rendering the list ------completed
  - `/countries/(:code)` - for requesting GraphQL API and rendering the properties of a continent ------completed
3. Design is totally by you.
4. Countries list at `/countries` must contain the list of countries and the languages spoken in that country. ------completed
   Both in English and native languages. It should also contain the continent it is located in. ------completed
5. `/countries/(:code)` must render the currency and a area code (phone) of that country. ------completed
6. Routes must be fully loadable with a direct link. `/countries/CI` must render the page for Ivory Coast, for example. ------completed
7. End.
*/