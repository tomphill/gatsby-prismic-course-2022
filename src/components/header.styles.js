import styled from "styled-components"

export const Header = styled.header`
  background: black;
  display: flex;
  padding: 0 20px;
`

export const Menu = styled.div`
  line-height: 60px;
  display: flex;
  margin-left: auto;
  a {
    padding: 0 10px;
    color: white;
    &:hover {
      color: orange;
    }
  }
`
