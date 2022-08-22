const tweeter = function(){
    posts = [];
    postId = 0;
    commentId = 0;

    const getPosts = function(){
        return posts;
    }

    const addPost = function(text){
        const newPost = {
            text: text,
            id: postId,
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
            id: commentId,
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
console.log(newTweeter.getPosts())
console.log(newTweeter.addPost("post 1"))
console.log(newTweeter.addPost("post 2"))
console.log(newTweeter.getPosts())
console.log(newTweeter.addPost("post 3"))
console.log(newTweeter.addPost("post 4"))
console.log(newTweeter.addPost("post 5"))
console.log(newTweeter.getPosts())
console.log(newTweeter.removePost(2))
console.log(newTweeter.removePost(4))
console.log(newTweeter.getPosts())
console.log(newTweeter.addComment(1, "commebt 1"))
console.log(newTweeter.addComment(1, "commebt 2"))
console.log(newTweeter.addComment(1, "commebt 3"))
console.log(newTweeter.addComment(1, "commebt 4"))
console.log(newTweeter.getPosts())
console.log(newTweeter.addComment(3, "commebt 3"))
console.log(newTweeter.addComment(0, "commebt 4"))
console.log(newTweeter.getPosts())
console.log(newTweeter.removeComment(1,0))
console.log(newTweeter.removeComment(1,2))
console.log(newTweeter.getPosts())
console.log(newTweeter.removeComment(3, 4))
console.log(newTweeter.removeComment(1, 1))
console.log(newTweeter.getPosts())






