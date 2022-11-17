function saveUser(user) {
  const URL = "http//workOut-server.net"
  const myInit = {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(user),
  }
  fetch(URL, myInit)
    .then((response) => {
      return response.json
    })
    .catch((error) => error)
}

export default saveUser
