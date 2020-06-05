import React, { useEffect } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Landing from "./component/layout/Landing";
import Login from "./component/auth/Login";
import Register from "./component/auth/Register";
import Dashboard from "./component/layout/Dashboard";
import setAuthToken from "./utils/setAuthToken";
import { loadUser } from "./actions/auth";

import "./App.css";

// Redux
import { Provider } from "react-redux";
import store from "./store";
import Tasks from "./component/Tasks/Tasks";
import Task from "./component/Tasks/Task";
import AddTask from "./component/Tasks/AddTask";
import UpdateTask from "./component/Tasks/UpdateTask";
import { loadTask } from "./actions/task";

if (localStorage.token) {
  setAuthToken(localStorage.token);
}

function App() {
  useEffect(() => {
    store.dispatch(loadUser());
    store.dispatch(loadTask());
  }, []);

  return (
    <Provider store={store}>
      <Router>
        <div className='App'>
          <Route exact path='/' component={Landing} />
          <Switch>
            <Route exact path='/register' component={Register} />
            <Route exact path='/login' component={Login} />
            <Route exact path='/dashboard' component={Dashboard} />
            <Route exact path='/tasks' component={Tasks} />
            <Route exact path='/task/:id' component={Task} />
            <Route exact path='/add-task' component={AddTask} />
            <Route exact path='/edit-task' component={UpdateTask} />
          </Switch>
        </div>
      </Router>
    </Provider>
  );
}

export default App;
