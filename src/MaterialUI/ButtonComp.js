import {React} from 'react';
import Button from '@mui/material/Button';
import DeleteIcon from '@mui/icons-material/Delete';


function ButtonComp() {
  return (
    <div>
        <h2>Button Components</h2>
    
      <Button variant="contained">Contained</Button><br></br><br></br>

        <Button variant="contained" color="success">
             Success
        </Button><br></br><br></br>

        <Button variant="outlined" startIcon={<DeleteIcon />}>
        Delete
      </Button>




    
      </div>
     
  );
}
export default ButtonComp;