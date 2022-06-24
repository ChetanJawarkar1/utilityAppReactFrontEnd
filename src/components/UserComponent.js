import React from "react";
import userServices from "../services/userServices";
import axios from "axios";


class UserComponent extends React.Component{
    constructor(props){
        super(props)
        this.state = {
            users: [],
            id:"",
            firstName:"",
            lastName:"",
            email: "",
            success:""
            
        }
             
    }

    componentDidMount(){
        userServices.getUsers()
        .then((res) => {
            this.setState({users: res.data})
        });
    }


    deleteBook = (id) => {
        userServices.deleteUser(id).then(
            (response) => {
                alert("Record Deleted Successfully");
                this.setState({
                   users: this.users.firstName.filter(book => book.id !== id)
                });
            }, (error) => {
                alert("Operation Failed Here");
            }
        );
    };
   
    editUser(id) {
        userServices.fetchUserById(id)
        .then((res) => {
          //  alert(JSON.stringify(res));
           // this.setState({users: res.data})
           let { id, firstName, lastName, email } = res;
           localStorage.setItem('id', id);
            alert(localStorage.getItem('id'));
        });

        //window.localStorage.setItem("userId", id);
       // alert("CALL COMES EDIT");
       // this.props.history.push('/edit-user');
        
    }


    




    loadUser() {
        userServices.fetchUserById(window.localStorage.getItem("userId"))
            .then((res) => {
                let user = res.data.result;
                this.setState({
                id: user.id,
                firstName: user.firstName,
                lastName: user.lastName,
                email: user.email,
               
                })
            });
    }


    handleChange=(e)=>{
        console.log(e.target.name,e.target.value)
        if(e.target.name=="id")
        {
            this.setState({id:e.target.value})
        }
        if(e.target.name=="firstName")
        {
            this.setState({firstName:e.target.value})
        }
        if(e.target.name=="lastName")
        {
            this.setState({lastName:e.target.value})
        }
        if(e.target.name=="email")
        {
            this.setState({email:e.target.value})
        }
        
    }



    handleSubmit=()=>{
        let userData={
            id:this.state.id,
            firstName:this.state.firstName,
            lastName:this.state.lastName,
            email: this.state.email,
        }
        alert("Submitted Successfully");
        userServices.postUsers(userData).then((response) =>{
            this.setState({success : response.data})
                       
        });
    }

    render(){
        return(
            <>
            <div>
            
            <table className="table table-bordered border-info shadow">
                    <thead>
                        <tr>
                    <th>ID</th>
                    <th>FIrst Name</th>
                    <th>Last Name</th>
                    <th>Email</th>
                   </tr>
                    </thead>
                    <tbody>
                        {
                            this.state.users.map(user=>{
                               return (<tr key={user.id}>
                                    <td>{user.id}</td>
                                    <td>{user.firstName}</td>
                                    <td>{user.lastName}</td>
                                    <td>{user.email}</td>
                                    <div style={{marginLeft:"20%",textAlign:"center"}}>
                                    <td><button style={{width:"80px",height:"50px",background:"yellow"}} className="btn btn-outline-danger" onClick={() => { this.deleteBook(user.id) }}>Delete</button></td>
                                    <td><button  onClick={() => { this.editUser(user.id) }}>UPDATE</button></td>
                                    </div>
                                 </tr>)
                            })
                        }
                    </tbody>
                    <div style={{marginLeft:"100%",height:"50%",textAlign:"center"}}>
                    
                    <input placeholder="Name"  name="firstName"  value={this.state.firstName} onChange={(e)=>this.handleChange(e)} type="text"></input>
                    <input placeholder="LastName"   name="lastName"  value={this.state.lastName} onChange={(e)=>this.handleChange(e)} type="text"></input>
                    <input placeholder="Email"   name="email"  value={this.state.email} onChange={(e)=>this.handleChange(e)} type="email"></input>
                    <div >
                    <button style={{width:"50px",height:"60px",background:"green"}} onClick={(e)=>this.handleSubmit(e)} type="submit">submit</button>
                     </div>
                     </div>
                     
                </table>
            </div>
            </>
        )
       
    }




}

export default UserComponent