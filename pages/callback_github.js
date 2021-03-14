import { useEffect } from 'react'

function CallbackGithub() {
  useEffect(() => {
    const parsedUrl = new URL(window.location.href);
    const githubAccessToken = parsedUrl.searchParams.get("access_token");
    if (githubAccessToken == null || !githubAccessToken.trim().length) {
      window.sessionStorage.removeItem('github_access_token');
    } else {
      window.sessionStorage.setItem('github_access_token', githubAccessToken);
    }

    setTimeout(() => {
      window.location.replace('/');
    }, 1000);
  })

  return <div>Authenticating ...</div>
}

export default CallbackGithub
