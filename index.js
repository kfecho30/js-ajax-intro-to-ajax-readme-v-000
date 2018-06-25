function showRepositories(event, data) {
  //this is set to the XMLHttpRequest object that fired the event
  const repos = JSON.parse(this.responseText)
}

function getRepositories() {
  const req = new XMLHttpRequest()
  req.addEventListener("load", showRepositories);
  req.open("GET", 'https://api.github.com/users/kfecho30/repos')
  req.send()
}
