import React from "react";
import Layout from "./components/Layout";
import { Switch, Route } from "react-router-dom";

import Home from "./screens/Home";
import AddBag from "./screens/AddBag";

function App() {
  return (
    <Layout>
      <Switch>
        <Route path='/new' exact component={AddBag} />
        <Route path='/' exact component={Home} />
      </Switch>
    </Layout>
  );
}

export default App;
