import { PrismicRichText } from "@prismicio/react"
import React from "react"
import {
  PriceOptionsWrapper,
  PriceOption,
  MostPopularLabel,
} from "./priceOptions.styles"

export const PriceOptions = props => {
  console.log("PRICE OPTIONS: ", props)
  return (
    <PriceOptionsWrapper>
      {props.slice.items.map((item, i) => {
        return (
          <PriceOption key={i} isMostPopular={item.is_most_popular}>
            {!!item.is_most_popular && (
              <MostPopularLabel>Most popular</MostPopularLabel>
            )}
            <PrismicRichText field={item.price_option_title.richText} />
            <h2>
              {"$"}
              {item.amount_per_month} / month
            </h2>
            <PrismicRichText field={item.price_option_description.richText} />
          </PriceOption>
        )
      })}
    </PriceOptionsWrapper>
  )
}
