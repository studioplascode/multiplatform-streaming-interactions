import { loggerTitle } from "shared-types";

const loggerConfig: {
  debugFilter: {
    [title in loggerTitle]: boolean;
  };
} = {
  //Set which parts of the logging output should be displayed (only effects development environment)
  debugFilter: {
    "EXPRESS SERVER": true,
    "EXPRESS REQUEST": true,
    "REDIS CLIENT": true,
    "SOCKET": true
  }
};

export default loggerConfig;