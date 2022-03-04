import * as React from "react"
import { graphql, Link } from "gatsby"

import Layout from "../components/layout"
import Seo from "../components/seo"
import { SliceZone } from "@prismicio/react"
import { components } from "../slices"

const Page = props => {
  console.log(props)
  return (
    <Layout>
      <Seo
        title={props.data.prismicPage.data.title}
        description={props.data.prismicPage.data.description}
      />
      <SliceZone
        components={components}
        slices={props.data.prismicPage.data.body}
      />
    </Layout>
  )
}

export const query = graphql`
  query PageQuery($id: String) {
    prismicPage(id: { eq: $id }) {
      data {
        title
        description
        body {
          ... on PrismicPageDataBodyRichText {
            id
            slice_type
            primary {
              rich_text_content {
                richText
              }
            }
          }
          ... on PrismicPageDataBodyForm {
            id
            slice_type
            primary {
              form_endpoint
            }
            items {
              input_type
              is_required
              placeholder
            }
          }
        }
        page_title {
          text
          richText
        }
      }
    }
  }
`

export default Page
