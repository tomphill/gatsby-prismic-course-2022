import styled from "styled-components"
import { Link } from "gatsby"

export const StyledLink = styled(Link)`
  color: white;
  background: orange;
  border-radius: 4px;
  padding: 5px 10px;
`

export const CallToActionWrapper = styled.div`
  max-width: 960px;
  margin: 40px auto;
  padding: 40px;
  border-radius: 10px;
  background-color: #eee;
  display: flex;
  > div {
    &:first-child {
      flex-grow: 1;
    }
    &:last-child {
      width: 200px;
      min-width: 200px;
    }
  }
`
