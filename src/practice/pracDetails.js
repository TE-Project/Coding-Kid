
import { Container, Row,Nav,Accordion,Card,Button} from 'react-bootstrap';
import IdeButton from '../idecontainer/idecontainer.js'
import React, { Component } from 'react'
import './pracDetails.css'
export default class pracDetails extends Component {
  render() {
    
    const ques=this.props.ques;
    const id=this.props.match.params.id;
    return (
      <div>
        
  {ques.filter(que => 
    que._id == id).map(filteredque => (
    
       /* /* <div> */
      /* <h1>{filteredque.title}</h1></div>
    <h3>{filteredque.description}</h3>
    <h1>{filteredque.input}</h1>
    <h1>{filteredque.output}</h1> */ 
    <div class="wrapper_det">
  <div class="top"><div class="title"><h1>{filteredque.title}</h1></div></div>
  <div class="content">
    <div class="card first">
      
      
      <p class="text tit">{filteredque.description}</p>
                       <Accordion>
                       <Card>
                         
                           <Accordion.Toggle as={Button} className="btn btn-primary btn-sm" variant="button"eventKey="0">
                             Input format
                           </Accordion.Toggle>
                         
                         <Accordion.Collapse eventKey="0">
                           <Card.Body>{filteredque.input} </Card.Body>
                         </Accordion.Collapse>
                       </Card>
                       <Card>
    
                           <Accordion.Toggle as={Button} className="btn btn-primary btn-sm" variant="button" eventKey="1">
                            Output format
                           </Accordion.Toggle>
                         
                      
                         <Accordion.Collapse eventKey="1">
                           <Card.Body>{filteredque.output} </Card.Body>
                         </Accordion.Collapse>
                       </Card>
                       <Card>
                           
                              <p class="text"> {filteredque.constraints} </p>
                          
                       </Card>
                       <Card>
                            <p>Test Cases</p>
                            <hr />
                              {filteredque.examples.map(ex=>(
                                <div>
        
                                     <p class="text">Input: {ex.input}</p>
                                     <p class="text">Output: {ex.output}</p>
                                     <hr/>
                                </div>
                              ))
                              }                          
                       </Card>
                       <Card>
                         <Card.Header>
                           <Accordion.Toggle as={Button} className="btn btn-danger" variant="button" eventKey="4">
                             Show Explanation
                           </Accordion.Toggle>

                           
                         </Card.Header>
                         <Accordion.Collapse eventKey="4">
                           <Card.Body>{filteredque.explanation} </Card.Body>
                         </Accordion.Collapse>
                       </Card>
                     </Accordion>
                     
    </div>
    </div>
  
  </div>





          
        
      

  ))}
    {ques.filter(que => 
    que._id == id).map(filteredque => (
<IdeButton ipdata={filteredque}  solve={this.props.solve} solveE={this.props.solveE} solveM={this.props.solveM} solveH={this.props.solveH} uid={this.props.uid}/>
    ))}
   

 
</div>
    )
  }
}

