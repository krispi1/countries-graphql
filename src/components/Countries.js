import React from 'react';
import { gql } from 'apollo-boost'
import { useQuery } from '@apollo/react-hooks';

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


function GetCountries() {
  const { loading, error, data } = useQuery(FETCH_COUNTRIES);
 
  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {console.log(error)} </p>;

  // Pull out countries array from the data object
  const countries = data.countries;  
  console.log(typeof countries);
  console.log(`-------countries-------`);
  console.log(countries[0]); // Inspect first country
  console.log(`-------countries-------`);
  
  return (
    <div >
      <table 
        className="table table-hover table-striped table-dark tabl-row"
      >
        <thead className="table-head">
          <tr>
            <th>Country</th>
            <th>Code</th>
            <th>Continent</th>
            <th>Language</th>
            <th>Native</th>
            <th>Currency</th>
          </tr>
        </thead>
            
        {
          countries.map(country => (
            //console.log(country.languages),
            <tbody key={`${country.code}${country.name}`}>
              <tr>
                <td>{country.name}</td>
                <td>{country.code}</td>
                <td>{country.continent.name}</td>
                <td>{country.languages.map(
                  language => (`${language.name} `)
                )}</td>
                <td>{country.languages.map(
                  language => (`${language.native} `)
                )}</td>
                <td>{country.currency}</td>
              </tr>
            </tbody>
          ))
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
