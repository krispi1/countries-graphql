import React from 'react';
import { gql } from 'apollo-boost'
import { useQuery } from '@apollo/react-hooks';
import spinner from '../assets/rotatingGlobe200w.webp';

const FETCH_COUNTRIES = gql`
{
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
`; // FETCH_COUNTRIES

const loadingStyle = {
  display: 'flex',
  justifyContent: 'space-around',
  backgroundColor: 'black',
  margin: '0 auto',
  marginTop: '30px',
  color: 'cyan',
  fontSize: '2em',
  height: '50%',
  width: '80%',
}

function GetCountries() {
  const { loading, error, data } = useQuery(FETCH_COUNTRIES);
  if (loading) {
    return <div style={loadingStyle}> 
        <img src={spinner} alt="Loading Spinner" /> 
        <br/><br/>
        Loading....<br/>
      </div>;
  }
  if (error) return <p>Error: Error fetching data.{console.log(error)} </p>;

// Pull out countries array from the data object
const countries = data.countries;  
console.log(typeof countries);
console.log(`-------countries-------`);
console.log(countries[0]); // Inspect first country
console.log(`-------countries-------`);

let flagUrl = '';
let flagBaseUrl = "https://www.countryflags.io/";
let flagStyle = "/flat"; // Either flat or shiny
let flagSize = "/32.png"; // Sizes: 16, 24, 32, 64

  return (
    <div >
      <table 
        className="table table-hover table-striped table-dark tabl-row"
      >
        <thead className="table-head">
          <tr>
            <th>Country</th>
            <th>Code</th>
            <th>Flag</th>
            <th>Continent</th>
            <th>Language</th>
            <th>Native</th>
            <th>Currency</th>
            <th>Phone</th>
          </tr>
        </thead>
            
        {
          // Loop through all the countries
          countries.map(country => {

            // Grab the country code of each country
            let flagCode = country.code;
            // Generate custom url for each country's flag
            flagUrl = `${flagBaseUrl}${flagCode}${flagStyle}${flagSize}`;

            return <tbody key={`${country.code}${country.name}`}>
                <tr>
                  <td>{country.name}</td>
                  <td>{country.code}</td>
                  {/* Image alt name is important for accessibility purposes */}
                  <td><img src={flagUrl} alt={`${country.name} flag`}/></td>
                  <td>{country.continent.name}</td>
                  <td>{country.languages.map(
                    language => (`${language.name} `)
                  )}</td>
                  <td>{country.languages.map(
                    language => (`${language.native} `)
                  )}</td>
                  <td>{country.currency}</td>
                  <td>{country.phone}</td>
                </tr>
              </tbody>
            }
          )
        }     
      </table>
    </div>
  );
  
} // end GetCountries

export default GetCountries;

/** Countries Instructions
 * 
 * 1. Countries list at `/countries` must contain the list of
 * countries and the languages spoken in that country.
 * 
 * 2. Both in English and native languages. It should also
 * contain the continent it is located in.
 * 
 */
