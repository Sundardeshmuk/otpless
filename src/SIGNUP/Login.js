import React from "react"
import { Helmet } from "react-helmet"
export default function Component() {
  return (
    <>
      <Helmet>
        <script
          src="https://otpless.com/auth.js"
          crossorigin="anonymous"
          async
        ></script>
      </Helmet>
      ...
    </>
  )
}