function saveUser(userProfile) {
  const URL = "http//workOut-server.net"
  const myInit = {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(userProfile),
  }

  fetch(URL, myInit)
    .then((response) => response.json())
    .catch((error) => error)
}

export default saveUser
