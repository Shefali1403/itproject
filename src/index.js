import React from "react";
import  ReactDOM  from "react-dom";
import 'mdb-react-ui-kit/dist/css/mdb.min.css';
import "@fortawesome/fontawesome-free/css/all.min.css";
import App from './App';
import "./index.css";
import {Store} from "./app/Store";
import { Provider } from "react-redux";
ReactDOM.render(<Provider store={Store}><App/></Provider>, document.getElementById('root'))
