import React from "react"
import { FormWrapper } from "./form.styles"
import { useForm } from "@formspree/react"

export const Form = props => {
  console.log("FORM: ", props)
  const [state, handleSubmit] = useForm(props.slice.primary.form_endpoint)

  if (state.succeeded) {
    return <div>Thank you!</div>
  }

  return (
    <FormWrapper onSubmit={handleSubmit}>
      {props.slice.items.map((item, i) => {
        if (item.input_type === "textarea") {
          return (
            <div key={i}>
              <textarea
                placeholder={item.placeholder}
                name={item.placeholder}
                required={item.is_required}
              />
            </div>
          )
        }
        return (
          <div key={i}>
            <input
              placeholder={item.placeholder}
              required={item.is_required}
              type={item.input_type}
              name={item.placeholder}
            />
          </div>
        )
      })}
      <button type="submit" disabled={state.submitting}>
        Submit
      </button>
    </FormWrapper>
  )
}
