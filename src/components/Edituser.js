
import  React, {useState} from 'react';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';


const Edituser = (props) => {
    const [open, setOpen] = useState(false);
    const initialuser={
        first_name:props.first_name,
        last_name:props.last_name
    }
    const[updateduser,setUpdateduser]=useState(initialuser)

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handlechange=(e)=>{
    
     setUpdateduser({...updateduser,first_name:e.target.value,last_name:e.target.value});
  }





  return (
    <div>
<Button variant="outlined" onClick={handleClickOpen}>
        Open form dialog
      </Button>
      <Dialog open={open} onClose={handleClose}>
        <DialogTitle>Subscribe</DialogTitle>
        <DialogContent>
          <DialogContentText>
          Please Fill updated data here....
          </DialogContentText>
          <TextField
            autoFocus
            margin="dense"
            id="name"
            label="First Name"
            type="text"
            name="fname"
            fullWidth
            variant="standard"
            onChange={handlechange}
          />
          <TextField
            autoFocus
            margin="dense"
            id="name"
            label="Last Name"
            type="text"
            name="lname"
            fullWidth
            variant="standard"
            onChange={handlechange}
          />
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose}>Cancel</Button>
          <Button onClick={handleClose}>Subscribe</Button>
        </DialogActions>
      </Dialog>






    </div>
  )
}

export default Edituser;



