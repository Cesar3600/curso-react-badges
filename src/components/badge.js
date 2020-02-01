import React,{Component} from 'react'
import imagensrc from '../images/badge-header.svg'
import './styles/Badge.css'

//const avatarIcon = 'https://www.gravatar.com/avatar?d=identicon'
const avatarIcon = 'https://en.gravatar.com/userimage/173006276/1dcde46af380ddd4a90d558bc80bc955.jpeg'

class Badge extends Component{
  render(){
    return(
      <div className='Badge'>
        <div className='Badge__header'>
          <img src={imagensrc} alt='header'/>
        </div>
        <div className='Badge__section-name'>
          <img className='Badge__avatar' src={avatarIcon} alt='avatar'/>
          <h1>Cesar<br/>Contreras</h1>
        </div>
        <div className='Badge__section-info'>
          <h3>Front-end Enginee</h3>
          <div>ccontre@</div>
        </div>
        <div className='Badge__footer'>
          #ccontre
        </div>


      </div>
    )
  }
}

export default Badge



