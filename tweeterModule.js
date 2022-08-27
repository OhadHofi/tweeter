const tweeter = function(){
    const posts = [];
    let postId = 0;
    let commentId = 0;

    const getPosts = function(){
        return posts;
    }

    const addPost = function(text){
        const newPost = {
            text: text,
            id: "p"+postId,
            comments: []
        }
        postId++

        posts.unshift(newPost)
    }

    const removePost = function(id){
      for (let i = posts.length - 1; i >= 0; --i) {
        if (posts[i].id === id) {
          posts.splice(i,1);
        }
      }
    }

    const addComment = function(postId, text){
        const newComment = {
            id: "c"+commentId,
            text: text
        }
        commentId++
        const index = posts.findIndex(post => post.id === postId);
        posts[index].comments.push(newComment)
    }

    const removeComment = function(postId, commentId){
        const index = posts.findIndex(post => post.id == postId);
        posts[index].comments = posts[index].comments.filter(comment => comment.id != commentId);
    }


    return {
        getPosts,
        addPost,
        removePost,
        addComment,
        removeComment
    }
}