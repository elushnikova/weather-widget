import isOk from "@/store/utils/isOk";

function parse(response: Pick<Response, "status" | "json">) {
  isOk(response.status);
  return response.json();
}

export default parse;
