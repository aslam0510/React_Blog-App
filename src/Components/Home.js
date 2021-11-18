import React from 'react';
import Feed from './Feed'
function Home({ posts }) {
  return (
    <main className="Home">
      {posts.length ? (
        <Feed posts={posts} />
      ) : (
        <h1 style={{ marginTop: '2rem' }}>No Posts to display.</h1>
      )}
    </main>
  );
}

export default Home;
