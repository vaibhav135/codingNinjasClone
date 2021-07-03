import React, { useState, useEffect } from "react";
import axios from "axios";
import { Tags } from "./tags";

function GetTags({ menu, submenu }: { menu: string; submenu: string }) {
  const [jsonData, setJsonData] = useState({ tags: [] });
  useEffect(() => {
    async function fetchTags() {
      try {
        const response = await axios.get(
          "https://api.codingninjas.com/api/v3/event_tags"
        );
        setJsonData(response.data.data);
        console.log(response);
      } catch (error) {
        console.error(error);
      }
    }
    fetchTags();
  }, []);

  //{callEvents}
  //let callEvents = compareString(menu, submenu);
  return (
    <div>
      <Tags data={jsonData} menu={menu} submenu={submenu} />{" "}
    </div>
  );
  //return <ul>{JSON.stringify(jsonData.tags)}</ul>;
}

/***
 * current api's :
 *		https://api.codingninjas.com/api/v3/event_tags
 *		https://api.codingninjas.com/api/v3/events?event_category=WEBINAR&event_sub_category=Upcoming&tag_list=&offset=0
 */

export default GetTags;
