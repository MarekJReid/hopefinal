import React from "react"
import { Link, graphql, useStaticQuery } from "gatsby"

import "./partners.scss"

import flag from "../../../images/countries/1.png"

function DropDownListItems({ visible }) {
  const data = useStaticQuery(graphql`
    query MyQuery {
      allCountriesInfoJson {
        edges {
          node {
            country
          }
        }
      }
    }
  `)

  const countryNames = data.allCountriesInfoJson.edges

  return (
    <div class="">
      {visible ? (
        <ul>
          {countryNames.map(item => (
            <li>
              <Link
                to={`/partners/${item.node.country}/`}
                exact={true}
                className=""
              >
                <p>{item.node.country}</p>
              </Link>
            </li>
          ))}
        </ul>
      ) : null}
    </div>
  )
}

export default DropDownListItems
