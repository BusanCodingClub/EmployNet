function TabMenu({ idx, activeState, content }) {
  const base =
    "text-center font-bold pb-2.5 mr-3.5 w-20 text-base leading-4 md:w-28 md:mr-5";
  const noneAcitveStyle = "text-zinc-400";
  const activeStyle = "text-black border-b-2 border-solid border-b-black";

  return (
    <li
      className={
        activeState === idx
          ? `${base} ${activeStyle}`
          : `${base} ${noneAcitveStyle}`
      }
    >
      {content}
    </li>
  );
}

export default TabMenu;
