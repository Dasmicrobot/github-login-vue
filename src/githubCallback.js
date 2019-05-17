const urlParse = require('url-parse')

const parsedUrl = urlParse(window.location.href, true)
const stateMessageNode = document.getElementById('state')

function checkState (candidateState, cb) {
  console.log('checking state')
  const state = window.sessionStorage.getItem('state')
  if (!state || !state.trim().length) {
    return cb(new Error('Something is wrong, you either did not initiate the request or browser storage is disabled'))
  }

  if (!candidateState || !candidateState.trim().length || candidateState !== state) {
    return cb(new Error('Request was tampered with!'))
  }

  cb()
}

function exchangeCodeForToken (code) {
  console.log('exchanging code for token')
}

checkState(parsedUrl.query.state, (err) => {
  if (err) {
    stateMessageNode.textContent = err.message
    return
  }

  stateMessageNode.textContent = 'States match'

  exchangeCodeForToken(parsedUrl.query.code)
})
