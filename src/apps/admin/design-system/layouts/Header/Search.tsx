import React, { useEffect } from "react";

export default function Search() {
  const [isOpened, open] = React.useState(false);

  useEffect(() => {
    function listener(e: any) {
      if (e.key === "k" && e.ctrlKey) {
        e.preventDefault();
        open(!isOpened);
      }
    }

    document.addEventListener("keydown", listener);

    return () => {
      document.removeEventListener("keydown", listener);
    };
  }, [isOpened]);

  return (
    <>
      <div>Search</div>
      {isOpened && <div>Search Opened</div>}
    </>
  );
}
