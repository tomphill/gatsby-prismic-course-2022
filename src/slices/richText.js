import React from "react"
import { PrismicRichText } from "@prismicio/react"
import { RichTextWrapper } from "./richText.styles"
import { Link } from "gatsby"

export const RichText = props => {
  console.log("RICH TEXT: ", props)
  return (
    <RichTextWrapper>
      <PrismicRichText
        linkResolver={doc => {
          if (doc.type === "page") {
            return `/${doc.uid}`
          }
          return doc.uid
        }}
        internalLinkComponent={({ href, ...props }) => (
          <Link to={href} {...props} />
        )}
        field={props.slice.primary.rich_text_content.richText}
      />
    </RichTextWrapper>
  )
}
