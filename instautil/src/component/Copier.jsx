import React, {Component} from 'react'
import ReactDOM from 'react-dom';
import {CopyToClipboard} from 'react-copy-to-clipboard';

import '../static/css/copier.css'

class Copier extends Component{
  constructor(props){
    super(props)

    this.state = {
      user_input_text: '',
    }

    this.handleChange = this.handleChange.bind(this)
    this.clickCopyBtn = this.clickCopyBtn.bind(this)
  }

  handleChange(event) {
    this.setState(
      {
        [event.target.name] : event.target.value
      }
    )
  }

  clickCopyBtn(event){
    console.log("copy in")
    console.log(this.state.user_input_text)

  }

  render(){
    return(
      <div class="wrapper">
        <div class="header">
          <h1>Copier</h1>
        </div>
        <div class="body">
          <textarea name='user_input_text' class='text' rows='10' cols='45' onChange={this.handleChange}></textarea>
          <br></br>
          <CopyToClipboard
            onCopy={this.onCopy}
            text={this.state.user_input_text}>
            <button type="button" class="btn btn-primary" onClick={this.clickCopyBtn}>copy</button>
          </CopyToClipboard>
          <br/>
          <div class='mirror_area'>
            {this.state.user_input_text.split("\n").map((i,key) => {
            return <div key={key}>{i.split(' ').map((val,key) => {
              val = val + ' '
              return (val.indexOf('#') == 0) ? <span class='hash_tag' key={key}>{val}</span> : <span class='normal' key={key}>{val}</span>
            })}</div>;
            })}
          </div>
        </div>
      </div>
    )
  }
}

export default Copier