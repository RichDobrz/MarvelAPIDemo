import React, { Component } from "react"
import axios from "axios"
import md5 from "md5"
import { BrowserRouter, Route, Link } from 'react-router-dom'


class Home extends Component {

  constructor() {
    super()
    this.state = {
      searching: true
    }

    this.getCharacter = this.getCharacter.bind(this)
  }

  componentDidMount() {
    this.getCharacter()
  }
  
  getCharacter() {
    const ts = new Date().getTime()
    const privateKey =
    const publicKey = 
    const stringToHash = ts + privateKey + publicKey
    const hash = md5(stringToHash)
    axios.get("https://gateway.marvel.com:443/v1/public/characters?name=elektra&limit=10&" + "ts=" + ts + "&apikey=" + publicKey + "&hash=" + hash)
    .then(response => {
      console.log(response)
    })
  }


  render() {
    return (
      <div>
        <p>Home</p>
      </div>
    )
  }
}

export default Home