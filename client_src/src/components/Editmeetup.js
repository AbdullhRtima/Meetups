import React ,{Component} from 'react' ;
import axios from 'axios' ;
import {Link} from 'react-router-dom';

class EditMeetup extends Component {
    constructor (props){
        super(props);
        this.state = {
            id : '' ,
            name : '' ,
            city : '' ,
            address : '' 
        }
    }
     componentWillMount (){
         this.getMeetupDetails();
     }
    getMeetupDetails(){
        let meetupId = this.props.match.params.id;
         axios.get(`http://localhost:3000/api/meetups/${meetupId}`) 
            .then(response => {
              this.setState ({
                  id : response.data.id ,
                  name : response.data.name ,
                  address : response.data.address ,
                  city : response.data.city  
              }, () =>{
                  console.log(this.state);
              });
            }) 
            .catch (err => console.log(err));
     }
     editMeetup (newMeetup){
        axios.request({
            method : 'put' ,
            url : `http://localhost:3000/api/meetups/${this.state.id}`,
            data : newMeetup 
        }).then (response => {
            this.props.history.push('/') ;
        }).catch (err => console.log(err)); 
     }
    onSubmit(e){
        const newMeetup ={
         name : this.refs.name.value ,
         city : this.refs.city.value ,
         address : this.refs.address.value
       }
        this.editMeetup (newMeetup);
        e.preventDefault () ;
        
    }
    handleInputChange (e){
        const target = e.target ;
        const value = target.value ;
        const name = target.name ;

        this.setState({
            [name] : value 
        });
    }
    render (){
        return (
           <div>
              <h1> EditMeetup </h1>
              <form onSubmit = {this.onSubmit.bind(this)}>
               <div className="input-field" >
               <input  type="text" name="name" ref="name"  value={this.state.name} onChange={this.handleInputChange.bind(this)}/> 
               
               </div>
               <div className="input-field" >
               <input type="text" name="city" ref="city" value={this.state.city}  onChange={this.handleInputChange.bind(this)}/> 
              
               </div>
               <div className="input-field" >
               <input type="text" name="address" ref="address" value={this.state.address} onChange={this.handleInputChange.bind(this)} /> 
           
               </div>
               <input type="submit" value="Save" className="btn"  />
               <Link className="btn grey right" to="/">Back</Link> 
               </form> 
           </div>
        )
    }
}

export default EditMeetup; 