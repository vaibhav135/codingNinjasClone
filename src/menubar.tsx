import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
  useRouteMatch,
  useLocation,
} from "react-router-dom";
import Header from "./header";
import SubMenuBar from "./submenubar";
import "./header.css";
// code by \//\:}%#/\\/

function MenuBar() {
  return (
    <Router>
      <div className="Menubar">
        <nav className="NavHeader">
          <Header />
        </nav>
        <Switch>
          <Route exact path="/home">
            <AllEvents />
          </Route>
          <Route exact path="/Webinars">
            <Webinars />
          </Route>
          <Route exact path="/CodingEvents">
            <CodingEvents />
          </Route>
          <Route exact path="/BootCamps">
            <BootCamps />
          </Route>
          <Route exact path="/WorkShops">
            <WorkShops />
          </Route>
          <Route exact path="/">
            <Redirect from="/" to="/home" />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

function AllEvents() {
  //let [path,setPath] = useState("");
  //setPath(useRouteMatch().path);
  //let [somePath, urlPath] = [useLocation().pathname, useRouteMatch().url];
  //console.log(`hey look this path: ${somePath} and url: ${urlPath}`);
  let { path, url } = useRouteMatch();
  return (
    <div>
      <SubMenuBar currPath={path} currUrl={url} />
    </div>
  );
}

function Webinars() {
  //let [path,setPath] = useState("");
  //setPath(useRouteMatch().path);
  let { path, url } = useRouteMatch();
  return (
    <div>
      <SubMenuBar currPath={path} currUrl={url} />
    </div>
  );
}

function CodingEvents() {
  //let [path,setPath] = useState("");
  //setPath(useRouteMatch().path);
  //console.log(path);
  //console.log(typeof(path));
  let { path, url } = useRouteMatch();
  return (
    <div>
      <SubMenuBar currPath={path} currUrl={url} />
    </div>
  );
}

function BootCamps() {
  //setPath(useRouteMatch().path);
  let { path, url } = useRouteMatch();
  return (
    <div>
      <SubMenuBar currPath={path} currUrl={url} />
    </div>
  );
}

function WorkShops() {
  //setPath(useRouteMatch().path);
  let { path, url } = useRouteMatch();
  return (
    <div>
      <SubMenuBar currPath={path} currUrl={url} />
    </div>
  );
}

export default MenuBar;
