import { useMediaQuery } from "@material-ui/core";
import { useEffect, useState } from "react";

function useMobileView() {
  const [state, setState] = useState({
    mobileView: false,
  });
  const { mobileView } = state;
  const matches = useMediaQuery("(max-width:600px)");

  useEffect(() => {
    const setResponsiveness = () => {
      return window.innerWidth < 600
        ? setState((prevState) => ({ ...prevState, mobileView: true }))
        : setState((prevState) => ({ ...prevState, mobileView: false }));
    };
    setResponsiveness();
    window.addEventListener("resize", () => setResponsiveness());
  }, []);
  return mobileView || matches;
}

export default useMobileView;
