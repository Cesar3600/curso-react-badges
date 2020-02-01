import React,{Component} from 'react'
import imagensrc from '../images/badge-header.svg'

const avatarIcon = 'https://www.gravatar.com/avatar?d=identicon'


class Badge extends Component{
  render(){
    return(
      <div>
        <div>
          <img src={imagensrc} alt='header'/>
        </div>
        <div>
          <img src={avatarIcon} alt='avatar'/>
          <h1>Cesar<br/>Contreras</h1>
        </div>
        <div>
          <p>Front-end Enginee</p>
          <p>ccontre@</p>
        </div>
        <div>
          #ccontre
        </div>


      </div>
    )
  }
}

export default Badge



