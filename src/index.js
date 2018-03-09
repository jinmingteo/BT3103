import React from "react";
import { render } from "react-dom";
import { BrowserRouter } from "react-router-dom";
import Root from "./Router";
import firebase from "firebase";
import AppFrame from "./AppFrame";
import Dashboard from "react-dazzle";
import {
  PieChart,
  Pie,
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  BarChart,
  Tooltip,
  Legend
} from "recharts";
import Victory from "./Victory";
import { Provider } from "react-redux";
import store from "./store";
//const {XAxis, YAxis, CartesianGrid, Tooltip, Legend} = Recharts;
// CHANGE HERE

var config = {
  apiKey: "AIzaSyB1UnzuQoOIG7T6AgTe9IWpIlKLKrT6vqw",
  authDomain: "week-6-bt3103.firebaseapp.com",
  databaseURL: "https://week-6-bt3103.firebaseio.com",
  projectId: "week-6-bt3103",
  storageBucket: "week-6-bt3103.appspot.com",
  messagingSenderId: "215589390545"
};

try {
  firebase.initializeApp(config);
} catch (error) {}

var db = firebase.database();
db.ref("/").on("value", data => {
  if (data.val()) {
    store.dispatch({ type: "SET_VAL", payload: data.val() });
    //  console.log('dispatched & displaying getstate:')
    //  console.log(store.getState());
  }
});

render(
  <BrowserRouter>
    <Provider store={store}>
      <Root />
    </Provider>
  </BrowserRouter>,
  document.getElementById("root")
);

//render(<App />, document.getElementById('root'));
