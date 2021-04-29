import React, { useState, useEffect } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { loadArticles } from "../../redux/actions/article-actions";
import { loadUsers } from "../../redux/actions/user-actions";
import { Link } from "react-router-dom";
import { bindActionCreators } from "redux";

function ArticlesList({ loadArticles, loadUsers, articles, users }) {
  useEffect(() => {
    loadUsers().catch(error => alert(error));
    loadArticles().catch(error => alert(error));
  }, []);

  return (
    <table>
      <thead>
        <tr>
          <th>Title</th>
          <th>Author</th>
        </tr>
      </thead>
      <tbody>
        {articles.map((article) => {
          return (
            <tr key={article.id}>
              <td>
                <Link to={"/articles/"}>{article.title}</Link>
              </td>
              <td>{article.userId}</td>
            </tr>
          );
        })}
      </tbody>
    </table>
  );
}

ArticlesList.propTypes = {
  articles: PropTypes.array.isRequired,
  users: PropTypes.array.isRequired,
  loadArticles: PropTypes.func.isRequired,
  loadUsers: PropTypes.func.isRequired,
};

function mapStateToProps(state, ownProps) {
  return {
    articles: state.articles,
    users: state.users,
  };
}

function mapDispatchToProps(dispatch) {
  return {
    loadArticles: bindActionCreators(loadArticles, dispatch),
    loadUsers: bindActionCreators(loadUsers, dispatch),
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(ArticlesList);
