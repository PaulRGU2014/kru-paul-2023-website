import deepMap from "deep-map";
//----------------------------------------------------------------
/**
 * processContent
 * Any additional processing that the content needs is done here
 */
export default function processContent(content) {
  return deepMap(content, (val) => {
    if (typeof val === "string" && val.indexOf("//develop-") > -1) {
      val = val.replace("//develop-", "//cms.develop-");
    }
    return val;
  });
}