import React from "react";
import ListCollapse from "../components/ListCollapse";

const LeftList = () => {
  return (
    <aside>
      <div className="text-white  font-semibold max-w-72 ">
        <ul>
          <ListCollapse
            title="Getting Started"
            list1={"Introduction"}
            list2="Why React-Bootstrap"
            list3="Theming"
            list4={"Color modes"}
            list5={"Getting help"}
            list6={"RTL"}
            list7={"Server-side Rendering"}
          />
          <ListCollapse
            title="Layout"
            list1={"Breakpoints"}
            list2="Grid"
            list3="Stacks"
          />
          <ListCollapse
            title={"Forms"}
            list1={"Overview"}
            list2={"Form controls"}
            list3={"Form text"}
            list4={"Select"}
            list5={"Checking and radios"}
            list6={"Range"}
            list7={"Input Gropup"}
          />
          <ListCollapse
            title={"Forms"}
            list1={"Accordion"}
            list2={"Alerts"}
            list3={"Badges"}
            list4={"Breadcrumbs"}
            list5={"Button group"}
            list6={"Buttons"}
            list7={"Cards"}
          />
          <ListCollapse
            title="Utilities"
            list1={"Transitions"}
            list2="Ratios"
            list3="@restart/ui"
          />
          <li className="px-4 py-1 mb-2 text-lg text-white">
            <div className="collapse-li">Migrating</div>
          </li>
          <li className="px-4 py-1 mb-2 text-lg text-white">
            <div className="collapse-li">About</div>
          </li>
        </ul>
      </div>
    </aside>
  );
};

export default LeftList;
