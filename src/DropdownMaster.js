import React from "react";
import userServices from "./services/userServices";
import axios from "axios";
import { Button, Form, GridColumn, GridRow } from "semantic-ui-react";
import {useEffect,  useState } from 'react';
import TextField from '@material-ui/core/TextField';
import Autocomplete,
{ createFilterOptions } from '@material-ui/lab/Autocomplete';
import { saveAs } from 'file-saver';

function DropdownMaster(){

  const filter = createFilterOptions();
  const [options, setDropDownData] = useState([]);
  const [inputVal, setInput] = useState("");

  
  //const [options, setDropDownData] = useState(['One', 'test1.zip', 'Three', 'Four']);
 
  //Fetching dynamic data from backend
  useEffect(() => {
        userServices.getDropDownData().then((res) => {
            if (res.data && res.data.error == null) {
                setDropDownData(res.data);
            
            } else {
             alert("Issue in fetching data::"+res.data.error.description );
            }
        });
      }, [])

      const submitOption = () =>{
       alert("From submitOption::"+JSON.stringify(inputVal));
    //   console.log("----------------------------->"+inputVal);
   
      
   }

   const handleChange=(e)=> {
    setInput(e.target.value);
    console.log("Fruit Selected!!!!!!!!!!!"+e.target.value);
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

    console.log("Downloading File=========>>>>>"+inputVal);
       // userServices.downloadZipFile(inputVal)
        userServices.downloadZipFile(inputVal)
       .then((res) => {
       // alert(JSON.stringify(res))
       var blob = new Blob([(res.data)], {type: "application/zip"});
       saveAs(blob, inputVal); 
       //alert(JSON.stringify(res));
        });
      // alert("fileName is::"+JSON.stringify(filename)+" Environment is::"+JSON.stringify(env));
   }










        return (
        <form>
      <div style={{ marginLeft: '40%', marginTop: '60px' }}>
        <h3>Greetings from GeeksforGeeks!</h3>
        <Autocomplete
          filterOptions={(options, params) => {
            const filtered = filter(options, params);
            // Suggest the creation of a new value
            if (params.inputValue !== '') {
              filtered.push(`Add "${params.inputValue}"`);
             
            }
            setInput(params.inputValue)
            return filtered;
          }}

          selectOnFocus
          clearOnBlur
          handleHomeEndKeys
          options={options}
          renderOption={(option) => option}
          style={{ width: 500 }}
          freeSolo
          renderInput={(params) => (
            <TextField {...params} onSelectCapture={handleChange} label="Enter Something"
              variant="outlined" />
          )}
       
        />
        <Button width="500%" onClick={() => downloadzipfile()} >Enter Report Name</Button>
       
                                 
      </div>
      </form>
        );
    };


export default DropdownMaster