import "./events.css";

const TakingTime = (timestamp: any) => {
  var d = new Date(timestamp * 1000), // Convert the passed timestamp to milliseconds
    yyyy = d.getFullYear(),
    mm = ("0" + (d.getMonth() + 1)).slice(-2), // Months are zero based. Add leading 0.
    dd = ("0" + d.getDate()).slice(-2), // Add leading 0.
    hh = d.getHours(),
    h = hh,
    min = ("0" + d.getMinutes()).slice(-2), // Add leading 0.
    ampm = "AM",
    time;

  if (hh > 12) {
    h = hh - 12;
    ampm = "PM";
  } else if (hh === 12) {
    h = 12;
    ampm = "PM";
  } else if (hh === 0) {
    h = 12;
  }

  // ie: 2014-03-24, 3:00 PM
  time = yyyy + "-" + mm + "-" + dd + ", " + h + ":" + min + " " + ampm;
  //console.log(time);
  return time;
};

const Events = ({ event_data }: { event_data: any }) => {
  //d.forEach((value: any, key: any) => {})
  //let innerData = new Map<any, any>();
  //for (const props in data) {
  ////console.log(`using for....in : ${props}`);
  //let tempData = new Map();
  //for (const inner_props in data[props]) {
  //tempData.set(inner_props, data[props][inner_props]);
  ////console.log(`${inner_props} :  ${data[props][inner_props]}`);
  //}
  //innerData.set(props, new Map(Array.from(tempData)));
  //}

  //console.log(Array.from(something.values()).map((val) => val));

  //console.log(innerData);
  //innerData.forEach((value, key) => {
  //console.log(`key: ${key}  value: ${value}`);
  //value.forEach((val: any, k: any) => {
  ////console.log(`Innerkey: ${typeof k}  Innervalue: ${typeof val}`);
  ////let s = k === "cover_picture" ? value.get(k) : "";
  ////if (s !== "") console.log(s);
  //console.log(event_data);
  //console.log(Object.values(data).map((v: any) => v["id"]));
  console.log(typeof event_data);

  //console.log(typeof event_data);
  //console.log(deepdata);
  //console.log(Object.getOwnPropertyNames(data));

  //console.log(event_data.events[0]);
  //console.log(JSON.stringify(event_data));
  return (
    <ul>
      <li className="Gallery">
        <div className="TextOverImage">
          <img
            className="Images"
            src={event_data["cover_picture"]}
            alt={event_data["short_desc"]}
          />
          <div className="TimeDate">
            {" "}
            registration <strong>open</strong> till{" "}
            {TakingTime(event_data["event_end_time"])}{" "}
          </div>
        </div>
        <div className="Name">{event_data["name"]}</div>
        <div className="InitialEventDetails">
          <div className="StartingDate">
            {" "}
            <label id="common-text"> Starts on: </label>{" "}
            {TakingTime(event_data["event_start_time"])}{" "}
          </div>
          <div className="Venue">
            <label id="common-text">Venue: </label>
            {event_data["venue"]}{" "}
          </div>
          <div className="Fee">
            <label id="common-text">Fees: </label>
            {event_data["fees"] === 0 ? "Free" : event_data["fees"]}{" "}
          </div>
        </div>
        <hr className="solid" />
        <div className="Desc fade"> {event_data["short_desc"]}</div>
      </li>
    </ul>
  );
};

export default Events;
