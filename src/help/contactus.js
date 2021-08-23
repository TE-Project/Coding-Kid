import React,{Component} from 'react'
import { connect } from 'react-redux'
import { createFeedback } from '../store/feedbackAction.js'
import {Modal,Row,Col,Container,Button} from 'react-bootstrap'
import {Redirect,withRouter} from 'react-router-dom'
import './help.css'
class ContactUS extends Component {
   state={
    fname:'',
    mail:'',
    feedback:'',
    flag:true
   }
   handleChange=(e)=>{
    this.setState({
      [e.target.name]:e.target.value
    });
    
   };

   handleSubmit=(e)=>{
    this.clearForm()
    e.preventDefault();
    if(this.state.fname!=''&&this.state.mail!=''&&this.state.feedback!='')
     { //console.log(this.state.mail);
        this.setState({
       flag:true
    },()=>{
      this.props.createFeedback(this.state);
        alert("feedback send successfully!!!!!");
          //console.log(e);
      
    });
        
       
   }
   else{
     alert("Please enter the information");
   }

 }
 clearForm=()=>{
  document.getElementById("contact").reset();
 }
   render(){
    if(this.flag)
    {
      this.setState({
        flag:false
      },()=>{
        //console.log(this.flag)
          return(
         <Redirect to='/' />
        )
        });
    
    }
  return(
  <div className="container">
  <form type="submit" onSubmit={this.handleSubmit} id='contact'>
    <h3>Contact US</h3>
    
    <div className="ip_box">
    <label for="fname">Name</label>
    <input type="text" value={this.fname}  id="fname" name="fname" placeholder="Your name.." onChange={this.handleChange} />
    </div>
    
    <div className="ip_box">
    <label for="email">Email</label>
    <input type="email" id="email"  value={this.mail} name="mail" placeholder="Your Email.." onChange={this.handleChange} />
    </div>

    <div className="ip_box">
    <label for="feedback">Feedback</label>
    <textarea id="feedback"  name="feedback" value={this.feedback} onChange={this.handleChange} placeholder="How can we help.."></textarea>
    </div>

    <div className="ip_box">
     {this.err==' '?<h6>{this.err}</h6>:null}
    <Button type="submit">Submit</Button>
    </div>
  </form>
</div> 
    )
  }
}


const mapDispatchToProps = dispatch => {
  return {
    createFeedback: (feedback) => dispatch(createFeedback(feedback))
  }
}

export default withRouter(connect(null, mapDispatchToProps)(ContactUS));
