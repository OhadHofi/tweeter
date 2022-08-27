const tweeterRender = function(){

    const renderPosts  = function(posts){
        $("#posts").empty()
        for (const post of posts){
            let postCommandsWraps = `
                            <div class="postCommantsWraps post">
                                <div class = "postWraps post">
                                    <button class="delete delete-post"><i class="fa fa-close" style="font-size: 10px; color: red"></i>
                                    </button>
                                    <div id = "${post.id}" class = "post-text">${post.text}</div>
                                </div>`


            const commands = post.comments
            postCommandsWraps +=`<div class = "commantsWraps">`
            for(const command of commands){
                postCommandsWraps+=
                                    `<div class = "commantWraps">
                                        <button class="delete delete-comment"><i class="fa fa-close" style="font-size: 10px; color: red"></i></button>
                                        <div id = "${command.id}" class = "comments">${command.text}</div>
                                    </div>`
            }
            postCommandsWraps+=   ` <div class="container-add-comment">
                                        <input class="input-comment" type="text" placeholder="Add Comment" />
                                        <button class="post-comment">Comment</button>
                                    </div>
                                </div>
                            </div>`
            $("#posts").append(postCommandsWraps)
        }
    }

    return {renderPosts}
}
