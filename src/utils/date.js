import moment from "moment";
import { DEFAULT_TIME_WINDOW } from "../constants/constants";

export const dateFormat = "YYYY-MM-DD";
export const today = moment().format(dateFormat);
export const startDate = moment()
  .subtract(DEFAULT_TIME_WINDOW - 1, "days")
  .format(dateFormat);
