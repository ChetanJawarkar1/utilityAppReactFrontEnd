import React,{useEffect,  useState } from 'react';
import { Table,Button } from 'semantic-ui-react'
import userServices from '../services/userServices';
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import '../App.css';
import Spinner from '../Spinner';



const setData = (data) => {
     let { id, firstName, lastName, email,checkbox,image } = data;
    localStorage.setItem('ID', id);
    localStorage.setItem('First Name', firstName);
    localStorage.setItem('Last Name', lastName);
    localStorage.setItem('Email', email);
    localStorage.setItem('Image File', image)
    localStorage.setItem('Checkbox Value',checkbox);
   
 }


function Read() {
   
    const [errors, setErrors] = useState([]);
    const [APIData, setAPIData] = useState([]);
    const [loading, setIsLoading] = useState(true);

    if(loading) {
        listContent = <div className="list"><Spinner/></div>;
      }
    
    
   
    useEffect(() => {
      //alert("calling from Read ko aya");
     // setErrors('kay ko a rhe tum');
     setIsLoading(true);
       userServices.getUsers1()
            .then((response) => {
               //alert(JSON.stringify(response.data));
                setAPIData(response.data);
                setIsLoading(false);   
             })
    
            
     }, [])
    // alert("data wapas agya"+APIData.data);  
    
    const getData = () => {
        userServices.getUsers1()
            .then((getData) => {
              setAPIData(getData.data);
              setIsLoading(false); 
             })
    }
 

     const deleteUser = (id) => {
        setIsLoading(true);  
         userServices.deleteUser(id).then(() => {
            getData();
            
         })
        
    }
    let navigate = useNavigate();
    const createUser = () =>{
         navigate('/createtest');
    }
    const backhome = () =>{
        navigate('/');
      }

     // window.URL.createObjectURL(data.imagefile)
     let listContent;
    
    

    return (

  

           
        <div>
            <Table singleLine>
                <Table.Header>
                    <Table.Row>
                        <Table.HeaderCell>First Name</Table.HeaderCell>
                        <Table.HeaderCell>Last Name</Table.HeaderCell>
                        <Table.HeaderCell>E-mail address</Table.HeaderCell>
                        <Table.HeaderCell>Profile Photo</Table.HeaderCell>
                        <Table.HeaderCell>Premium Plan</Table.HeaderCell>
                       
                    </Table.Row>
                </Table.Header>

                <Table.Body>
                 {APIData.map((data) => {
                              
                        return (
                        <Table.Row>
                            <Table.Cell>{data.firstName}</Table.Cell>
                            <Table.Cell>{data.lastName}</Table.Cell>
                            <Table.Cell>{data.email}</Table.Cell>
                            <Table.Cell ><img src={`data:image/jpg;base64,${data.image}`} style={{
        width: 100, height: 100, backgroundColor: 'steelblue' }}/></Table.Cell>
                            <Table.Cell>{data.checkbox ? 'Checked' : 'Unchecked'}</Table.Cell>
                            <Link to='/updatetest'><Table.Cell>  <Button onClick={() => setData(data)} >Update</Button></Table.Cell></Link>
                            <Table.Cell>  <Button onClick={() => deleteUser(data.id)} >Delete User</Button></Table.Cell>
                            </Table.Row>
                              
                    )})}
                </Table.Body>
                <Button  onClick={() => createUser()} >Add New User</Button>
                <Button  onClick={() => backhome()} >HOME</Button>
                
            </Table>
            { listContent }
        </div>
    )
}

export default Read;