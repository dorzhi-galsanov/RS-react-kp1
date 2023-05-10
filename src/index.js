import React from "react"
import ReactDom from "react-dom"
import "bootstrap/dist/css/bootstrap.css"
import './index.css';
import reportWebVitals from './reportWebVitals';
import App from "./app/App"

const root = ReactDom.createRoot(document.getElementById('root'))
root.render(
    <React.StrictMode>
        <App />
    </React.StrictMode>
)
reportWebVitals()