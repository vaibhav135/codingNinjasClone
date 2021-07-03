import React, { useState, useEffect } from "react";
import GetTags from "./api_call";

const passingArgs: any = {
  category: {
    home: "ALL_EVENTS",
    Webinars: "WEBINAR",
    CodingEvents: "CODING_EVENT",
    BootCamps: "BOOTCAMP_EVENT",
    WorkShops: "WORKSHOP",
  },
  subCategory: {
    Upcoming: "Upcoming",
    Archived: "Archived",
    AllTime: "All Time Favorites",
  },
};

const MainContent = ({ path, subCat }: { path: string; subCat: string }) => {
  //console.log(passingArgs.category[path.slice("/")[1]]);
  console.log(typeof passingArgs.category[path.slice(1, path.length)]);
  console.log(typeof passingArgs.subCategory[subCat]);
  const menu = passingArgs.category[path.slice(1, path.length)];
  const submenu = passingArgs.subCategory[subCat];
  return (
    <div>
      <GetTags menu={menu} submenu={submenu} />
    </div>
  );
};

export default MainContent;
