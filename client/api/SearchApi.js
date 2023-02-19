import Request from "./Request";

export default class SearchApi {
  static postSearch(searchStr, projectId) {
    return new Request({
      url: "/api/search/",
      method: "POST",
      data: { 
        query: searchStr, 
        project: projectId
      } 
    });
  }

  static postImage(s3link, projectId) {
    return new Request({
      url: "/api/image/",
      method: "POST",
      data: { 
        s3_link: s3link, 
        project: projectId
      } 
    });
  }

  static getProjects() {
    return new Request({
      url: "/api/project/",
      method: "GET",
    });
  }
  
  static postProject(description, name, email) {
    return new Request({
      url: "/api/project/",
      method: "POST",
      data: { 
        description: description, 
        email: email,
        name: name
      }
    });
  }
}