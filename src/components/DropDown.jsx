import { useState } from "react";

function DropDown({ list, isArray, isOpen, setIsOpen, value, setValue }) {
  const [originalList, setOriginalList] = useState("");
  const [searchValue, setSearchValue] = useState("");

  const handleAdd = (v) => {
    if (value === v || value.includes(v)) {
      return;
    }
    setIsOpen(!isOpen);
    if (isArray) {
      const copiedValue = [...value];
      copiedValue.push(v);
      setValue(copiedValue);
    } else {
      setValue(v);
    }
  };

  const handleDelete = (v) => {
    if (isArray) {
      setIsOpen(!setIsOpen);
      const filteredValue = [...value].filter(
        (filterValue) => v !== filterValue
      );
      setValue(filteredValue);
    } else {
      setValue("");
    }
  };

  return (
    <ul className="shadow-md border border-t-0 rounded absolute bg-white w-[calc(100%-0.5rem)] z-10">
      {list.map((v, i) => {
        if (
          [...value].filter((filterValue) => v === filterValue).length === 1
        ) {
          return (
            <li
              key={i}
              onClick={() => handleAdd(v)}
              className="px-2 py-1 flex justify-between cursor-not-allowed hover:bg-gray-200"
            >
              <span className="cursor-pointer text-gray-300 cursor-not-allowed">
                {v}
              </span>
              <button
                onClick={() => handleDelete(v)}
                className="border-none p-0 rounded-none bg-transparent cursor-disabled focus:outline-none"
              >
                ❌
              </button>
            </li>
          );
        } else {
          return (
            <li
              key={i}
              onClick={() => handleAdd(v)}
              className="px-2 py-1 cursor-pointer hover:bg-gray-200"
            >
              <span>{v}</span>
            </li>
          );
        }
      })}
    </ul>
  );
}

export default DropDown;
