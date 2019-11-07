import * as request from "request-promise";

const BASE_URL = "https://fornex.com/api";

interface RequestParams {
  apikey: string;
  [name: string]: any;
}

export enum RequestMethod {
  GET = "GET",
  POST = "POST"
}

export async function makeAPIRequest(method: RequestMethod, endpoint: string, params?: RequestParams) {
  const reply = await request({
    method,
    url: `${BASE_URL}/${endpoint}`,
    qs: params
  });

  return JSON.parse(reply);
}
