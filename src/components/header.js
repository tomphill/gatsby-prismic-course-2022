import * as React from "react"
import PropTypes from "prop-types"
import { Link, useStaticQuery, graphql } from "gatsby"
import { Menu, Header as HeaderStyled } from "./header.styles"

const Header = ({ siteTitle }) => {
  const result = useStaticQuery(graphql`
    {
      prismicNavigation {
        data {
          menu_items {
            label
            destination_page {
              uid
            }
          }
        }
      }
    }
  `)
  console.log(result)
  return (
    <HeaderStyled>
      <Menu>
        {result.prismicNavigation.data.menu_items.map(menuItem => (
          <Link
            to={`/${menuItem.destination_page.uid}`}
            key={menuItem.destination_page.uid}
          >
            {menuItem.label}
          </Link>
        ))}
      </Menu>
    </HeaderStyled>
  )
}

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
