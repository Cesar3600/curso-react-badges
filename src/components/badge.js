import React,{Component} from 'react'
import imagensrc from '../images/badge-header.svg'
import './styles/Badge.css'

//const avatarIcon = 'https://www.gravatar.com/avatar?d=identicon'


class Badge extends Component{
  render(){
    return(
      <div className='Badge'>
        <div className='Badge__header'>
          <img src={imagensrc} alt='header'/>
        </div>
        <div className='Badge__section-name'>
          <img className='Badge__avatar' src={this.props.avatarIcon} alt='avatar'/>
          <h1>{this.props.firstName}<br/>{this.props.lastName}</h1>
        </div>
        <div className='Badge__section-info'>
        <h3>{this.props.charge}</h3>
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



