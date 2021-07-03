import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import SubHeader from "./subheaders";
import MainContent from "./maincontent";
// code by \//\:}%#/\\/
interface args {
  currPath: string;
  currUrl: string;
}
function SubMenuBar({ currPath, currUrl }: args) {
  //console.log(`current path: ${currPath}`);
  //console.log(currPath === currUrl);
  //console.log(`${currUrl}/Archived`);
  //console.log(`${currPath}/Archived`);
  let path = currPath;
  return (
    <Router>
      <div className="SubMenubar">
        <nav id="NavSubheader">
          <SubHeader url={currUrl} />
        </nav>
        <Switch>
          <Route exact path={`${path}`}>
            <MainContent path={`${path}`} subCat="Upcoming" />
          </Route>
          <Route exact path={`${path}/Archived`}>
            <MainContent path={`${path}`} subCat="Archived" />
          </Route>
          <Route exact path={`${path}/AllTime`}>
            <MainContent path={`${path}`} subCat="AllTime" />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

//const Upcoming = () => {
//return (
//<div>
//<MainContent />
//</div>
//);
//};

//const Archived = () => {
//return (
//<div>
//<MainContent />
//</div>
//);
//};

//const AllTime = () => {
//return (
//<div>
//<MainContent />
//</div>
//);
//};
export default SubMenuBar;
