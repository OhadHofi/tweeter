const tweeterModule = tweeter()

const tweeterView = tweeterRender()

tweeterView.renderPosts(tweeterModule.getPosts())


//Add Post
function post(){
    const postText = $("#input").val()
    if(postText != ""){
        tweeterModule.addPost($("#input").val())
        $("#input").val("")
        tweeterView.renderPosts(tweeterModule.getPosts())
    }
}


//Delete Post
$("#posts").on("click", ".delete-post", function(){
    tweeterModule.removePost($(this).siblings(".post-text").attr('id'))
    tweeterView.renderPosts(tweeterModule.getPosts())
})


//Add Comment
$("#posts").on("click", ".post-comment", function(){
    const textComment = $(this).siblings("input").val()
    if(textComment != ""){
        const postId = $(this).closest(".postCommantsWraps").find(".post-text").attr('id')
        $(this).siblings("input").val("")
        tweeterModule.addComment(postId, textComment)
        tweeterView.renderPosts(tweeterModule.getPosts())
    }
})


//Delete Comment
$("#posts").on("click", ".delete-comment", function(){
    const commentId = $(this).siblings("div").attr('id')
    postId = $(this).closest(".postCommantsWraps").find(".post-text").attr('id')
    tweeterModule.removeComment(postId, commentId)
    tweeterView.renderPosts(tweeterModule.getPosts())
})
