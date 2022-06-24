import React from "react";
import userServices from "../services/userServices";
import axios from "axios";

class EditUserComponent extends React.Component{
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

        this.saveUser = this.saveUser.bind(this);
        this.loadUser = this.loadUser.bind(this);
    }

    componentDidMount() {
        this.loadUser();
    }

    loadUser() {
        userServices.fetchUserById(window.localStorage.getItem("userId"))
            .then((res) => {
                let state = res.data.result;
                this.setState({
                    id:this.state.id,
                    firstName:this.state.firstName,
                    lastName:this.state.lastName,
                    email: this.state.email,
                })
            });
    }

    onChange = (e) =>
        this.setState({ [e.target.name]: e.target.value });

    saveUser = (e) => {
        e.preventDefault();
        let user = {id: this.state.id,firstName: this.state.firstName, lastName: this.state.lastName, email: this.state.email};
        userServices.editUser(user)
            .then(res => {
                this.setState({message : 'User added successfully.'});
                this.props.history.push('/users');
            });
    }

    render() {
        return (
            <div>
                <h2 className="text-center">Edit User</h2>
                <form>

                    <div className="form-group">
                        <label>User Name:</label>
                        <input type="text" placeholder="username" name="username" className="form-control" readonly="true" defaultValue={this.state.username}/>
                    </div>

                    <div className="form-group">
                        <label>First Name:</label>
                        <input placeholder="First Name" name="firstName" className="form-control" value={this.state.firstName} onChange={this.onChange}/>
                    </div>

                    <div className="form-group">
                        <label>Last Name:</label>
                        <input placeholder="Last name" name="lastName" className="form-control" value={this.state.lastName} onChange={this.onChange}/>
                    </div>

                    <div className="form-group">
                        <label>Last Name:</label>
                        <input placeholder="Email" name="email" className="form-control" value={this.state.email} onChange={this.onChange}/>
                    </div>
                   

                    <button className="btn btn-success" onClick={this.saveUser}>Save</button>
                </form>
            </div>
        );
    }
}

export default EditUserComponent;