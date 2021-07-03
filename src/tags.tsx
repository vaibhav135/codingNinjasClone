import React, { useState, useEffect } from "react";
import "./tags.css";
import GetEvents from "./api_call_events";

//const CallEventfunc = ({
//menu,
//submenu,
//}: {
//menu: string;
//submenu: string;
//}) => {
//return (
//<div>
//<GetEvents menu={menu} submenu={submenu} tags={TagArr} />
//</div>
//);
//};

export let TagArr: string[] = [];
const Tags = ({
  data,
  menu,
  submenu,
}: {
  data: any;
  menu: string;
  submenu: string;
}) => {
  const [tags, setTags] = useState("");
  const [tfstate, setTFState] = useState(true);
  const [activeButtonStatus, setActiveButtonStatus] = useState(new Map());
  if (activeButtonStatus.size <= 1)
    data.tags.map((d: string) =>
      setActiveButtonStatus(activeButtonStatus.set(d, "#fac482"))
    );

  console.log("size of the map:" + activeButtonStatus.size);

  useEffect(() => {
    console.log(tags);

    //Filling and removing the elements from Array here
    //TagArr.find((e) => e === tags) === undefined
    //? TagArr.push(tags)
    //: TagArr.splice(TagArr.indexOf(tags), 1);

    //console.log("printing tag arr:" + TagArr);
    //if (TagArr[0] === "") someArr = TagArr.filter((e) => e !== "");
    //else someArr = TagArr;

    //console.log("Some tag arr:" + someArr);
    //console.log("some arr: " + someArr);
    //console.log("calling parent function");
  }, [tags]);

  useEffect(() => {
    TagArr = [];
  }, [menu, submenu]);

  //function setFuncTags() {
  //if (tags !== "") {
  //if (tagArr.find((e) => e === tags) === undefined) {
  //setTagArr((e) => [...e, tags]);
  //} else setTagArr(tagArr.filter((e) => e !== tags));
  //}
  //}

  function addTags(item: string) {
    setTags(item);
    setTFState(!tfstate);
    setActiveButtonStatus(
      new Map(
        activeButtonStatus.set(
          item,
          activeButtonStatus.get(item) === "#fac482" ? "white" : "#fac482"
        )
      )
    );
    //setFuncTags();
  }

  return (
    <div>
      <div className="StickySide">
        <h2>
          <label> Tags </label>
        </h2>
        <ul>
          {data.tags.map((item: string, i: number) => (
            <li key={i}>
              <button
                className="TagButton"
                //className={
                //activeButtonStatus.get(item)
                //? "ButtonActive"
                //: "ButtonNotActive"
                //}
                style={{ backgroundColor: activeButtonStatus.get(item) }}
                onClick={() => addTags(item)}
              >
                {item}
              </button>
            </li>
          ))}
        </ul>
      </div>
      <div>
        <GetEvents
          menu={menu}
          submenu={submenu}
          tags={tags}
          tfState={tfstate}
        />
      </div>
    </div>
  );
};

export { Tags };
