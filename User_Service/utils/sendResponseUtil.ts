import { ResponseHandler } from "../ts/types/utils.types";

const sendResponse: ResponseHandler = (res, statusCode, msg, data) => {
  if (statusCode == 200) {
    return res.status(statusCode).json({ status: "success", data });
  } else {
    return res.status(statusCode).json({ status: "error", message: msg });
  }
};
export default sendResponse;
