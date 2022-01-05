import React, { useState, useEffect } from "react"
import { login, jwt } from "./cart"
import Login from "./Login"

const CartContent = () => {
  const [token, setToken] = useState("")

  useEffect(() => {
    return jwt.subscribe((val) => setToken(val ?? ""))
  }, [])

  return(
    <div>
      JWT: {token}
      <Login />
    </div>
  )
}

export default CartContent
