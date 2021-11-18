import React from 'react'

function NewPost({handleSubmit,postTitle,postBody,setPostTitle,setPostBody}) {
  return (
    <main className="NewPost">
      <h1>New post</h1>
      <form onSubmit={handleSubmit} className="newPostForm">
        <label htmlFor="postTitle">Title : </label>
        <input type="text" required id="postTitle" name="title" value={postTitle} onChange={(e) =>setPostTitle(e.target.value)} />
        <label htmlFor="postBody">Post :</label>
        <textarea type="text" required id="postBody" name="title" value={postBody} onChange={(e) =>setPostBody(e.target.value)}/>
        <button type="submit" className="btn btn-primary">Submit</button>
      </form>

    </main>
  )
}

export default NewPost
