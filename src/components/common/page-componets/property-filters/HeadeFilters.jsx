import React from "react";
import { FaList } from "react-icons/fa";
import { FiFilter, FiGrid } from "react-icons/fi";
import { useDispatch } from "react-redux";
import { openFilterMenu } from "../../../../features/uiSlice";

const HeadeFilters = ({ layout, setLayout }) => {
  const dispatch = useDispatch();
  return (
    <div className="flex-col gap-4 flex-center-between md:flex-row">
      <div className="w-full flex-center-between">
        <div className="gap-2 flex-align-center">
          <div
            className={`w-10 h-10 rounded-xl grid place-items-center bg-slate-100 hover:bg-slate-200 sm:cursor-pointer transition-a dark:bg-card-dark  ${
              layout === "grid" && "!bg-primary text-white"
            }`}
            onClick={() => setLayout("grid")}
          >
            <FiGrid />
          </div>
          <div
            className={`w-10 h-10 rounded-xl grid place-items-center bg-slate-100 sm:cursor-pointer hover:bg-slate-200 transition-a dark:bg-card-dark ${
              layout === "list" && "!bg-primary text-white"
            }`}
            onClick={() => setLayout("list")}
          >
            <FaList />
          </div>
          <div
            className="grid w-10 h-10 md:hidden rounded-xl place-items-center bg-slate-100 sm:cursor-pointer hover:bg-slate-200 transition-a dark:bg-card-dark"
            onClick={() => dispatch(openFilterMenu())}
          >
            <FiFilter />
          </div>
        </div>
      </div>
     
    </div>
  );
};

export default HeadeFilters;
