import React, { Component } from "react";
import { Link, Switch, Route } from "react-router-dom";
import StepOne from "../StepOne";
import StepTwo from "../StepTwo";
import StepThree from "../StepThree";
import store, { CANCEL } from '../../store'

export default class Wizard extends Component {
    cancel = () => {
        store.dispatch({
            type: CANCEL
        })
    }
  
    render() {
    return (
      <div>
        <h1>Add New Listing</h1>

        <Switch>
          <Route path="/wizard/step1" component={StepOne} />
          <Route path="/wizard/step2" component={StepTwo} />
          <Route path="/wizard/step3" component={StepThree} />
        </Switch>
        <Link to="/wizard/step1">
          <button>Add New Property</button>
        </Link>
        <Link to="/">
          <button onClick={this.cancel}>Cancel</button>
        </Link>
      </div>
    );
  }
}
