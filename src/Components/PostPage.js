import React from 'react';
import { useLocation, useParams, Link } from 'react-router-dom';

function PostPage({ posts, handleDelete }) {
  const { id } = useParams();
  const post = posts.find((post) => post.id.toString() === id);

  return (
    <main className="PostPage">
      <article className="post">
        {post && (
          <>
            <h2>{post.title}</h2>
            <p className="postBody">{post.body}</p>
            <button
              className="btn btn-danger"
              onClick={() => handleDelete(post.id)}
            >
              Delete Post
            </button>
          </>
        )}
        {!post && (
          <>
            <h2>Post not Found</h2>
            <p>
              <Link to="/">Visit our Home Page</Link>
            </p>
          </>
        )}
      </article>
    </main>
  );
}

export default PostPage;
