import { Response } from "express";
const response = (
  res: Response,
  statusCode: number,
  msg: string,
  data?: object
) => {
  if (statusCode == 200) {
    return res.status(statusCode).json({ status: "success", data });
  } else {
    return res.status(statusCode).json({ status: "error", message: msg });
  }
};
export default response;
