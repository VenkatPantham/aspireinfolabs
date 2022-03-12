import { useMediaQuery } from "@material-ui/core";
import { useEffect, useState } from "react";

function useTabView() {
  const [state, setState] = useState({
    tabView: false,
  });
  const { tabView } = state;
  const matches = useMediaQuery("(max-width:1024px)");

  useEffect(() => {
    const setResponsiveness = () => {
      return window.innerWidth < 1024
        ? setState((prevState) => ({ ...prevState, tabView: true }))
        : setState((prevState) => ({ ...prevState, tabView: false }));
    };
    setResponsiveness();
    window.addEventListener("resize", () => setResponsiveness());
  }, []);
  return tabView || matches;
}

export default useTabView;
