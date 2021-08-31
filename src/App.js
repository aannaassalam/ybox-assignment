import "./App.css";
import Navbar from "./layout/components/navbar/navbar";
import { Route, Switch } from "react-router-dom";
import Homepage from "./layout/pages/homepage/homepage";
import { Provider } from "react-redux";
import store from "./layout/redux/store";
import NewPosts from "./layout/pages/newPosts/newPosts";

function App() {
  return (
    <Provider store={store}>
      <div>
        <Navbar />
        <Switch>
          <Route exact path="/" component={Homepage} />
          <Route exact path="/new-posts" component={NewPosts} />
        </Switch>
      </div>
    </Provider>
  );
}

export default App;
