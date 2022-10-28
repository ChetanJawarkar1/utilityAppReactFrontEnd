import React,{useEffect,  useState } from 'react';
import { Table,Button } from 'semantic-ui-react'
import userServices from '../services/userServices';
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import { properties } from '../properties';
import { saveAs } from 'file-saver';
import Spinner from '../Spinner';
import TextField from '@material-ui/core/TextField';
import Autocomplete,
{ createFilterOptions } from '@material-ui/lab/Autocomplete';



function CallThirdPartiApi() {

   
        const [env, setEnvironment] = useState('');
        const [filename, setFileName] = useState('test1.zip');
        const [dropdowndata, setDropDownData] = useState('');
        const [loading, setIsLoading] = useState(true);

        let listContent;
        if(loading) {
             listContent = <div className="list"><Spinner/></div>;
          }

          const filter = createFilterOptions();
       

        const postData = () => {
            alert(JSON.stringify(env));
        }


      

   const handleSubmit=()=>{
        let userData={
            id:this.state.id,
          
        }
        }

        function str2bytes (str) {
            var bytes = new Uint8Array(str.length);
            for (var i=0; i<str.length; i++) {
                bytes[i] = str.charCodeAt(i);
            }
            return bytes;
        }


    const downloadzipfile = () =>{
    //  path: dirs.DocumentDir + '/path-to-file.anything',
    setIsLoading(true);
        userServices.downloadZipFile(filename)
       .then((res) => {
        alert(JSON.stringify(res))
       // const blob = new Blob([res.data]);
       // var blob = new Blob([str2bytes(res)], {type: "application/zip"});
       //var blob = new Blob([str2bytes(res.Blob)], {type: "application/zip"});
      // var blob = new Blob([JSON.stringify(res)], {type: "application/zip"});
       saveAs(res, filename); 
        
       // saveAs(blob, "data.zip"); 
        setIsLoading(false);
        //alert(JSON.stringify(res));
        });
      // alert("fileName is::"+JSON.stringify(filename)+" Environment is::"+JSON.stringify(env));
   }

   
   const getfileslist = () =>{
    
   }

   const createSelectItems=()=> {
    
    let items = ['Chetan','Raja','taja','leta']; //userServices.setDropDownData();         
    for (let i = 0; i <= this.props.maxValue; i++) {             
         items.push(<option key={i} value={i}>{i}</option>);   
         //here I will be creating my options dynamically based on
         //what props are currently passed to the parent component
    }
    return items;
}  

const onDropdownSelected=(e)=> {

    setDropDownData(userServices.setDropDownData());
   console.log("THE VAL", e.target.value);
   //here you will see the current selected value of the select input
}
const options = ['One', 'Two', 'Three', 'Four']

    return (
        <form>
        
        <label>
         Please select environement
          <select  onChange={(e) => setEnvironment(e.target.value)}>
            <option>SELECT ENVIRONMENT</option>
            <option e="sit">SIT</option>
            <option e="uat">UAT</option>
            <option e="prod">PROD</option>
            <option e="qa">QA</option>
          </select>
          
        </label>
         <br/>
         <label>Please Enter Name of File</label>
         <input placeholder='filename' onChange={(e) => setFileName(e.target.value)} />
         <br /><br />
         <input type="select"  label="Multiple Select" multiple
      ={(dropdowndata)}
  />
        
        <br />
        <Button  onClick={() => getfileslist()} >GetListOfFiles</Button>
        <Button  onClick={() => downloadzipfile()} >DownloadFile</Button>
        <Button  onClick={() => createSelectItems()} >dropdowndata</Button>
       
        </form>

    )
}
export default CallThirdPartiApi