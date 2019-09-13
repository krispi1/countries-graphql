import React from 'react';
import { gql } from 'apollo-boost';
import { useQuery } from '@apollo/react-hooks';

const FETCH_COUNTRY = gql`
{
  country(code: "KE"){
    code,
    name,
    native,
    phone,
    currency,
    emoji,
    emojiU,
    continent {
      code,
      name, 
      countries {
        name,
        code
      }
    },
    languages {
      code,
      name,
      native
    }
  }
}
`; // FETCH_COUNTRY

function GetCountry() {
  const { loading, error, data } = useQuery(FETCH_COUNTRY);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: Error fetching data. Please check 
    your internet and try again. {console.log(error)} </p>;

  //console.log(`Data: ${JSON.stringify(data)}`);
  
  const result = data.country
  console.log(typeof result);
  console.log(result);

  return (
    <div>
  {/*Example result
      code: null
      continent: {code: "AF", name: "Africa", countries: Array(58), __typename: "Continent"}
      currency: "KES"
      emoji: "🇰🇪"
      emojiU: "U+1F1F0 U+1F1EA"
      languages: (2) [{…}, {…}]
      name: "Kenya"
      native: "Kenya"
      phone: "254" */}

      <h3>{`${result.name} ${result.phone}`}</h3>
      <h4>{`${result.currency} ${result.native}`}</h4>
      <h5>{`${result.emoji} ${result.emojiU}`}</h5>
    </div>
  ) 
  
} // end GetCountry()

export default GetCountry;

// `/countries/(:code)` must render the currency and the area
// code (phone) of that country.