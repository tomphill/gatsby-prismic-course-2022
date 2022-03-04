import React from "react"
import { PrismicRichText } from "@prismicio/react"
import { HeroWrapper } from "./hero.styles"

export const Hero = props => {
  console.log("HERO PROPS: ", props)
  return (
    <HeroWrapper image={props.slice.primary.background_image.gatsbyImageData}>
      <PrismicRichText field={props.slice.primary.title.richText} />
      <PrismicRichText field={props.slice.primary.subtitle.richText} />
    </HeroWrapper>
  )
}
