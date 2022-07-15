import { useState, useEffect } from "react";

function useButtonClick() {
  const [isClicked, setIsClicked] = useState(false);

  // useEffect(() => {
  //   setIsClicked(true);
  //   return () => setIsClicked(false);
  // }, []);
  
  return isClicked;
}

export default useButtonClick;