import User from "./components/User";
import "./App.css";
import React, { useState, useEffect } from "react";
import api from "../src/api/contacts";
import EditIcon from "@mui/icons-material/Edit";
import Deleteconfirm from "./components/Deleteconfirm";
import DeleteIcon from "@mui/icons-material/Delete";
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import Edituser from "./components/Edituser";
import {  Routes, Switch, Route } from "react-router-dom";
function App() {
  const [users, setUsers] = useState([]);
  const [query, setQuery] = useState("");
  const [open, setOpen] = useState(false);
  const getallusers = async () => {
    const res = await api.get("/api/users");
    return res.data;
  };
  let deleterecord = false;

  useEffect(() => {
    const getAllCOntacts = async () => {
      const allContacts = await getallusers();
      console.log("allContacts", allContacts);
      if (allContacts) setUsers(allContacts.data);
    };

    getAllCOntacts();
  }, []);

  const OnEdithandler = () => {};

  const OnDeletehandler = (id) => {
    const filteredusers = users.filter((user) => user.id !== id);
    console.log(filteredusers);
    setUsers(filteredusers);
    deleterecord=true;
  };
  const handleClickOpen = (id) => {
    setOpen(true);
    OnDeletehandler(id)
  };

  const handleClose = () => {
    setOpen(false);
  };
  return (
    <>
      <div style={{ margin: "30px auto", padding: "5px 20px" }}>
        <input
          type="text"
          placeholder="search user"
          onChange={(e) => setQuery(e.target.value)}
        />
      </div>
      <div className="App-container">
        {users
          .filter(
            (user) =>
              user.first_name.toLowerCase().includes(query) ||
              user.last_name.toLowerCase().includes(query)
          )
          .map((el, id) => {
            return (
              <div
                style={{
                  backgroundColor: "#CEF6F5",
                  border: "1px solid red",
                  margin: "5px",
                  width: "200px",
                  height: "200px",
                }}
                key={id}
              >
                <div>
                  <img src={el.avatar} />
                </div>
                <span>{el.first_name + " " + el.last_name}</span>
                <div>
                  <span>
                    <EditIcon
                      style={{ color: "red", margin: "5px" }}
                      onClick={()=>
                       <Edituser user={el}/>
                       }
                    />


                    
                  </span>
                  <span>
                    <DeleteIcon
                      style={{ color: "red", margin: "5px" }}
                      onClick={()=>handleClickOpen(el.id)}
                       />
                        <Dialog
        open={open}
        onClose={handleClose}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <DialogTitle id="alert-dialog-title">
          {"Confirmation To Delete Records?"}
        </DialogTitle>
        <DialogContent>
          <DialogContentText id="alert-dialog-description">
          'Are you sure you want to delete this record ?'
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose}>Cancel</Button>
          <Button onClick={handleClose} autoFocus>
            Confirm
          </Button>
        </DialogActions>
      </Dialog>
                  </span>
                </div>
              </div>
            );
          })}
      </div>
    </>
  );
}

export default App;
