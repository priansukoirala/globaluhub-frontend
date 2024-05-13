import _ from "lodash";

export function paginate(items, pageNumber, pagesize) {
  const startIndex = (pageNumber - 1) * pagesize;
  return _(items).slice(startIndex).take(pagesize).value();
}
