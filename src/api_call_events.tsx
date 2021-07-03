import React, { useState, useEffect } from "react";
import axios from "axios";
import Events from "./events";
import Pagination from "./pagination";
import "./api_call_events.css";

//let SomeArr: string[] = [];
let tagArr: string[] = [];
//function IntermediaryEvents({
//menu,
//submenu,
//tags,
//}: {
//menu: string;
//submenu: string;
//tags: string;
//}) {
////const [tagArr, setTagArr] = useState<string[]>([]);
//console.log("tagArr:  " + tagArr);

//useEffect(() => {
//if (tags !== "") {
//if (tagArr.find((e) => e === tags) === undefined) {
//tagArr.push(tags);
//} else {
//tagArr = tagArr.filter((e) => e !== tags);
//}
//}
//}, [tags, tagArr]);

//return (
//<GetEvents menu={menu} submenu={submenu} tags={tags} TagArr={tagArr} />
//);
//}

function GetEvents({
  menu,
  submenu,
  tags,
  tfState,
}: {
  menu: string;
  submenu: string;
  tags: string;
  tfState: boolean;
}) {
  const [jsonData, setJsonData] = useState({ events: [] });
  //console.log("looking for tags in api call event: " + tags);
  //let someArr: string[] = [];
  //let someArr;
  //SomeArr.find((e) => e === tags) === undefined
  //? SomeArr.push(tags)
  //: SomeArr.splice(SomeArr.indexOf(tags), 1);

  //console.log("printing api arr:" + SomeArr);
  //if (SomeArr[0] === "") someArr = SomeArr.filter((e) => e !== "");
  //else someArr = SomeArr;

  //console.log("api_call_arr: " + TagArr);
  function settingTags() {
    if (tags !== "") {
      tagArr.find((e) => e === tags) === undefined
        ? tagArr.push(tags)
        : tagArr.splice(tagArr.indexOf(tags), 1);
    } else {
      tagArr = [];
    }
  }
  console.log("tags: " + tags);
  useEffect(() => {
    settingTags();
    console.log("api_call_arr: " + tagArr);
    async function getEvent() {
      try {
        const response = await axios.get(
          "https://api.codingninjas.com/api/v3/events",
          {
            params: {
              event_category: menu,
              event_sub_category: submenu,
              tag_list: tagArr.length ? tagArr.toString() : "",
              offset: 0,
            },
          }
        );
        setJsonData(response.data.data);
        //console.log(response);
        return jsonData;
      } catch (error) {
        console.error(error);
      }
    }
    getEvent();
  }, [tfState]);
  //event_data={jsonData.data.data}
  //console.log(typeof jsonData);
  const pagination = Events;
  return (
    <div className="DisplayData">
      {jsonData.events.length === 0 ? (
        <div id="noData">
          {" "}
          <h1> No Data found </h1>
          <img
            src="https://cdn.dribbble.com/users/285475/screenshots/2083086/dribbble_1.gif"
            className="CaveManGif"
            alt="cavemanGif"
          />
        </div>
      ) : (
        <Pagination
          data={jsonData}
          RenderComponent={pagination}
          pageLimit={5}
          dataLimit={5}
        />
      )}
    </div>
  );
}

export default GetEvents;
