const tweeterRender = function(){

    const renderPosts  = function(posts){
        $("#posts").empty()
        for (const post of posts){
            $("#posts").append(`<div id = "${post.id}" class = "post post-text">${post.text}</div>`)

            const commands = post.comments
            for(const command of commands){
                $(`${`${"#"+post.id}`}`).append(`<div id = "${command.id}" class = "comments">${command.text}</div>`)
            }
        }
    }

    return {renderPosts}
}