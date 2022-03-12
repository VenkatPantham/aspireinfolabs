import { combineReducers } from "redux";
import userReducer from "../core/user/state/user.reducer";
import authReducer from "../core/user/state/auth.reducer";
import alertReducer from "../shared/components/alert/alert.reducer";
import dashboardReducer from "../modules/dashboard/state/dashboard.reducer";
import settingsReducer from "../modules/Settings/state/settings.reducer";
import contentReducer from "../modules/content/state/content.reducer";

const rootReducer = combineReducers({
  user: userReducer,
  auth: authReducer,
  alert: alertReducer,
  dashboard: dashboardReducer,
  settings: settingsReducer,
  content: contentReducer,
});

export default rootReducer;
