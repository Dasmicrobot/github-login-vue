module.exports = {
  devServer: {
    // allow redirects from foo.bar.com
    disableHostCheck: true
  },
  pages: {
    index: 'src/main.js',
    githubCallback: {
      // entry for the page
      entry: 'src/githubCallback.js',
      // the source template
      template: 'public/callback_github.html',
      // output as dist/index.html
      filename: 'callback_github.html'
    }
  }
}
