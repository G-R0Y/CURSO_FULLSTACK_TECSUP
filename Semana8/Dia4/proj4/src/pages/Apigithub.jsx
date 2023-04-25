import React, { useState } from "react"
import FromUser from "../componentes/FromUser";
function Apigithub() {

  const [search, setSearch] = useState("");

  const [user, setUser] = useState({});

  const fetchUser = async () => {
    const response = await fetch(`https://api.github.com/users/${search}`)
    const data = await response.json()

    setUser(data)
  }



  return (
    <div className="App">
      <FromUser />

      <div className="container">

        <h1>Buscador de Usuarios</h1>
        <div className="grid">
          <input onChange={(e) => setSearch(e.target.value)} type="text" placeholder="ingresa nombre" />
        </div>
        <div>
          <button onClick={fetchUser}>Buscar</button>
        </div>
      </div>
      <article>
        <div className="container">
          <img src={user.avatar_url} alt="" />
          <h4>{user.name}</h4>
          <p>{user.bio}</p>
        </div>
      </article>
    </div>

  )
}

export default Apigithub