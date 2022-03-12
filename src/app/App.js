import "./App.css";
import { Router } from "react-router-dom";
import { theme } from "../assets/styles/muiTheme";
import { MuiThemeProvider } from "@material-ui/core";
import ScrollToTop from "./shared/utils/ui-effects/ScrollToTop";
// import Website from "./micro-frontends/website/Website";
import Routes from "./routes/routes";
import history from "./routes/history";

function App() {
  return (
    <MuiThemeProvider theme={theme}>
      <Router history={history}>
        <ScrollToTop />
        <Routes />
      </Router>
    </MuiThemeProvider>
  );
}

export default App;
