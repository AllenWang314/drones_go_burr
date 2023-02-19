import Request from "./Request";

export default class SearchApi {
  static postSearch(searchStr) {
    return new Request({
      url: "/api/search/",
      method: "POST",
      data: { 
        query: searchStr, 
        project: "fcd09635-0025-487c-acac-ccdf9015870d" // hard coded project id
      } 
    });
  }

  static postImage(s3link) {
    return new Request({
      url: "/api/image/",
      method: "POST",
      data: { 
        s3_link: s3link, 
        project: "fcd09635-0025-487c-acac-ccdf9015870d" // hard coded project id
      } 
    });
  }
}