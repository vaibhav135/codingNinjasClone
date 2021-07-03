import { Link, useLocation } from "react-router-dom";
//import "./header.css";

const SubHeader = ({ url }: { url: string }) => {
  const location = useLocation();
  const splitLocation = location.pathname.split("/");
  //console.log(
  //`subheader1: ${splitLocation[1]}  and subheader2: ${
  //splitLocation[2]
  //} and url: ${url.split("/")[1]}`
  //);

  return (
    <ul className="SubHeadersList" style={{ listStyleType: "none" }}>
      <li
        className={
          splitLocation[1] === url.split("/")[1] &&
          splitLocation[2] === undefined
            ? "active"
            : ""
        }
      >
        <Link to={`${url}`}> Upcoming </Link>
      </li>
      <li className={splitLocation[2] === "Archived" ? "active" : ""}>
        <Link to={`${url}/Archived`}> Archived </Link>
      </li>
      <li className={splitLocation[2] === "AllTime" ? "active" : ""}>
        <Link to={`${url}/AllTime`}> All Time </Link>
      </li>
    </ul>
  );
};

export default SubHeader;
