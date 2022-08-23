const tweeter = function(){
    const posts = [
        {
          text: "First post!",
          id: "p1",
          comments: [
            { id: "c1", text: "First comment on first post!" },
            { id: "c2", text: "Second comment on first post!!" },
            { id: "c3", text: "Third comment on first post!!!" },
          ],
        },
        {
          text: "Aw man, I wanted to be first",
          id: "p2",
          comments: [
            {
              id: "c4",
              text: "Don't wory second poster, you'll be first one day.",
            },
            { id: "c5", text: "Yeah, believe in yourself!" },
            { id: "c6", text: "Haha second place what a joke." },
          ],
        },
      ];
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

        posts.push(newPost)
    }

    const removePost = function(id){
        posts = posts.filter(function(post) {
            return post.id != id;
        });
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
        console.log(index)
        posts[index].comments = posts[index].comments.filter(function(comment) {
            return comment.id != commentId;
        });
    }


    return {
        getPosts: getPosts,
        addPost: addPost,
        removePost: removePost,
        addComment: addComment,
        removeComment: removeComment
    }
}


const newTweeter = tweeter()
renderPosts(newTweeter.getPosts())
newTweeter.addPost("post 1")
renderPosts(newTweeter.getPosts())
newTweeter.addPost("post 2")
renderPosts(newTweeter.getPosts())
newTweeter.addPost("post 3")
renderPosts(newTweeter.getPosts())

newTweeter.addPost("post 4")
renderPosts(newTweeter.getPosts())

newTweeter.addPost("post 5")
renderPosts(newTweeter.getPosts())

newTweeter.removePost("p2")
renderPosts(newTweeter.getPosts())

newTweeter.removePost("p4")
renderPosts(newTweeter.getPosts())

newTweeter.addComment("p1", "commebt 1")
renderPosts(newTweeter.getPosts())

newTweeter.addComment("p1", "commebt 2")
renderPosts(newTweeter.getPosts())

newTweeter.addComment("p1", "commebt 3")
renderPosts(newTweeter.getPosts())

newTweeter.addComment("p1", "commebt 4")
renderPosts(newTweeter.getPosts())

newTweeter.addComment("p3", "commebt 3")
renderPosts(newTweeter.getPosts())

newTweeter.addComment("p0", "commebt 4")
renderPosts(newTweeter.getPosts())

newTweeter.removeComment("p1","c0")
renderPosts(newTweeter.getPosts())

newTweeter.removeComment("p1","c2")
renderPosts(newTweeter.getPosts())

newTweeter.removeComment("p3", "c4")
renderPosts(newTweeter.getPosts())

newTweeter.removeComment("p1", "c1")
renderPosts(newTweeter.getPosts())





