import React, { useEffect } from "react";
import "./App.css";
import { ThemeProvider, CSSReset } from "@chakra-ui/core";
import { useDispatch } from "react-redux";

import { Switch, Route } from "react-router-dom";

import { getUserWithStoredToken } from "./store/user/actions";

import Navigation from "./components/Navigation";
import Login from "./pages/Login/index";
import Signup from "./pages/Signup";
import Homepage from "./pages/Homepage";
import CreatePalettePage from "./pages/CreatePalettePage";
import CreateRecipePage from "./pages/CreateRecipePage";

function App() {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getUserWithStoredToken());
  }, [dispatch]);

  return (
    <ThemeProvider>
      <CSSReset />
      <Navigation />
      <Switch>
        <Route exact path="/" component={Homepage} />
        <Route path="/login" component={Login} />
        <Route path="/signup" component={Signup} />
        <Route exact path="/create-recipe" component={CreateRecipePage} />
        <Route path="/create-palette" component={CreatePalettePage} />
      </Switch>
    </ThemeProvider>
  );
}

export default App;
