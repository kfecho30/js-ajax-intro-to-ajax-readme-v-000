function showRepositories(event, data) {
  //this is set to the XMLHttpRequest object that fired the event
  const repos = JSON.parse(this.responseText)
  console.log(repos)
  const reposList = `<ul>${repos.map(r => '<li>' + r.name + '</li>').join('')}</ul>`
  
  document.getElementById("repositories").innerHTML = repoList
}

function getRepositories() {
  const req = new XMLHttpRequest()
  req.addEventListener("load", showRepositories);
  req.open("GET", 'https://api.github.com/users/kfecho30/repos')
  req.send()
}
