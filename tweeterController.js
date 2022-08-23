const tweeterModule = tweeter()

const tweeterView = tweeterRender()

tweeterView.renderPosts(tweeterModule.getPosts())