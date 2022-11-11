function postServer(userData) {
  const URL = "http//workOut-server.net"
  const myInit = {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(userData),
  }
  fetch(URL, myInit)
    .then((response) => {
      console.log("Dentro del then 1")
      return response.json
    })
    .catch((error) => error)
}

export default postServer
