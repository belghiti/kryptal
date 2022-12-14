import React from "react"
import ReactDOM from "react-dom"

import App from "./App"
import { TransactionsProvider } from "./context/transaction-context"
import "./index.css"

ReactDOM.render(
  <TransactionsProvider>
    <App />
  </TransactionsProvider>,
  document.getElementById("root"),
)
