import * as actionTypes from "./action-types";
import * as articlesAPI from "../../api/articles";

export function loadArticlesSuccess(articles) {
  return { type: actionTypes.LOAD_ARTICLES_SUCCESS, articles };
}

export function updateArticleSuccess(article) {
  return { type: actionTypes.UPDATE_ARTICLE_SUCCESS, article };
}

export function createArticleSuccess(article) {
  return { type: actionTypes.CREATE_ARTICLE_SUCCESS, article };
}

export function loadArticlesFailed(error) {
  throw error;
}

export function loadArticles() {
  return function (dispatch) {
    return articlesAPI
      .getAll()
      .then((articles) => dispatch(loadArticlesSuccess(articles)))
      .catch((error) => loadArticlesFailed(error));
  };
}

// export function saveCourse(course) {
//     return function(dispatch) { // dispatch can provide an argument "getState which provides store data"
//         return courseApi.saveCourse(course)
//             .then(savedCourse => {
//                 course.id? dispatch(updateCourseSuccess(savedCourse)) : dispatch(createCourseSuccess(savedCourse));
//             })
//             .catch(error => saveCourseFailure(error));
//     }
// }
