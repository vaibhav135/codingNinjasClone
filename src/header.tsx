import { Link, useLocation } from "react-router-dom";

const Header = () => {
  const location = useLocation();
  const splitLocation = location.pathname.split("/");
  //console.log(`header: ${splitLocation[1]} `);
  return (
    <ul className="MenuList" style={{ listStyleType: "none" }}>
      <li>
        <a href="https://www.codingninjas.com/events?event_category=ALL_EVENTS&event_sub_category=Upcoming&page=1#eventsWrapper">
          Coding Ninjas
        </a>
      </li>
      <li className={splitLocation[1] === "home" ? "active" : ""}>
        <Link to="/home"> AllEvents </Link>
      </li>
      <li className={splitLocation[1] === "Webinars" ? "active" : ""}>
        <Link to="/Webinars">Webinars </Link>
      </li>
      <li className={splitLocation[1] === "CodingEvents" ? "active" : ""}>
        <Link to="/CodingEvents"> CodingEvents </Link>
      </li>
      <li className={splitLocation[1] === "BootCamps" ? "active" : ""}>
        <Link to="/BootCamps"> BootCamps </Link>
      </li>
      <li className={splitLocation[1] === "WorkShops" ? "active" : ""}>
        <Link to="/WorkShops"> WorkShops </Link>
      </li>
    </ul>
  );
};

export default Header;
