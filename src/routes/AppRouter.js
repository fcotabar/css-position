import React from "react";
import { Switch, Route } from "react-router-dom";
import { Grid } from "../components/grid/Grid";
import { GridBasic2 } from "../components/grid/GridBasic2";
import { GridTemplateArea } from "../components/grid/GridTemplateArea";

export const AppRouter = () => {
  return (
    <>
      <div>
        <Switch>
          <Route
            exact
            path="/grid"
            component={() => <Grid className="App-container" />}
          />
          <Route
            exact
            path="/grid-basic"
            component={() => <GridBasic2 className="App-container" />}
          />
          <Route
            exact
            path="/grid-template-area"
            component={() => <GridTemplateArea className={`App-container`} />}
          />
        </Switch>
      </div>
    </>
  );
};
