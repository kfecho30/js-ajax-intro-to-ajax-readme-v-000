function getRepositories() {
  const req = new XMLHttpRequest()
  req.addEventListener("load", showRepositories);
  req.open("GET", 'https://api.github.com/users/kfecho30/repos')
  req.send()
}
