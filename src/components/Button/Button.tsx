import React from "react";

const PrimaryButton = () => {
  return (
    <button className="bg-blue-500 text-white font-bold hover:opacity-70 border-none focus:border-none focus:outline-none active:opacity-100">
      Primary
    </button>
  );
};
const SecondaryButton = () => {
  return (
    <button className="bg-purple-500 text-white font-bold hover:opacity-70 border-none focus:border-none focus:outline-none active:opacity-100">
      Secondary
    </button>
  );
};
export { PrimaryButton, SecondaryButton };
