import * as React from 'react';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import { FormControl, InputLabel, Select, MenuItem, Snackbar, Alert } from '@mui/material';

export default function AddBookDialog({...props}){
    const postNewBook = props.postNewBook;
    const getAllBookData = props.getData;

    const [SnackBarOpen, setSnackBarOpen] = React.useState(false);
    const [open, setOpen] = React.useState(false);
    const [newBookData, setNewBookData] = React.useState({
      autor: [ [""] ],
      buchtitel: [ '' ],
      verlag: [ '' ],
      isbn: [ '' ],
      jahr: [ '' ],
      ort: [ '' ],
      hersteller: [ "" ],
      auflage: [ '' ],
      lieferung: [ [""] ]
    });

    const handleClickOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
        setNewBookData({
          autor: [ [""] ],
      buchtitel: [ '' ],
      verlag: [ '' ],
      isbn: [ '' ],
      jahr: [ '' ],
      ort: [ '' ],
      hersteller: [ "" ],
      auflage: [ '' ],
      lieferung: [ [""] ]
        });
    };

    const addBook = async () => {
        let response = await postNewBook(newBookData);
        console.log(response);
        handleClose();
        getAllBookData();
    };

          /* BUCH:
      autor: [ [Object] ],
      buchtitel: [ 'Kulturgeschichte der Neuzeit' ],
      verlag: [ 'dtv' ],
      isbn: [ '3423300620' ],
      jahr: [ '1927' ],
      ort: [ 'München' ],
      hersteller: [ "C. H. Beck'sche Buchdruckerei" ],
      auflage: [ '13' ],
      lieferung: [ [Object] ]
      */

    return(
        <div style={{display:'flex', justifyContent:'center', margin:50}}>
          <Snackbar>
            <Alert open={SnackBarOpen} autoHideDuration={3000} onClose={()=>{}}></Alert>
          </Snackbar>
      <Button variant="outlined" onClick={handleClickOpen}>
        Buch hinzufügen
      </Button>
      <Dialog open={open} onClose={handleClose}>
        <DialogTitle>Neues Buch</DialogTitle>
        <DialogContent>
          <DialogContentText>
            Buchinformationen Angeben
          </DialogContentText>
          <TextField
          onChange={e=>setNewBookData({...newBookData,autor:[{vorname:[e.target.value.split(' ')[0]], nachname:[e.target.value.split(' ').slice(1).join(' ')]}]})}
            autoFocus
            required
            margin="dense"
            id="autor"
            label="Autor"
            variant="standard"
            type={'text'}
          />
         <TextField
            onChange={e=>setNewBookData({...newBookData,buchtitel:[e.target.value]})}
            autoFocus
            required
            margin="dense"
            id="Buchtitel"
            label="Buchtitel"
            variant="standard"
            type={'text'}
          />
         <TextField
            onChange={e=>setNewBookData({...newBookData,verlag:[e.target.value]})}
            autoFocus
            required
            margin="dense"
            id="verlag"
            label="Verlag"
            variant="standard"
          />
         <TextField
            onChange={e=>setNewBookData({...newBookData, isbn:[e.target.value]})}
            autoFocus
            required
            margin="dense"
            id="isbn"
            label="ISBN"
            variant="standard"
            type={'number'}
          />
          <TextField
            onChange={e=>setNewBookData({...newBookData, jahr:[e.target.value]})}
            autoFocus
            required
            margin="dense"
            id="Jahr"
            label="Jahr"
            variant="standard"
            type={'number'}
          />
          <TextField
            onChange={e=>setNewBookData({...newBookData, ort:[e.target.value]})}
            autoFocus
            required
            margin="dense"
            id="ort"
            label="Ort"
            variant="standard"
          />
          <TextField
            onChange={e=>setNewBookData({...newBookData, hersteller:[e.target.value]})}
            autoFocus
            required
            margin="dense"
            id="hersteller"
            label="Hersteller"
            variant="standard"
          />
          <TextField
            onChange={e=>setNewBookData({...newBookData, auflage:[e.target.value]})}
            autoFocus
            required
            margin="dense"
            id="auflage"
            label="Auflage"
            variant="standard"
            type={'number'}
          />

      
        <FormControl style={{minWidth:"150px", maxWidth:"250px",margin:"8px"}} >
          <InputLabel id="abteilungen-select-label">Lieferung</InputLabel>
          <Select 
          margin='dense'
          required
          label="Abteilungen"
          style={{minWidth:"150px", maxWidth:"250px"}} 
          variant='standard'
          labelId="abteilungen-select-label" 
          defaultValue={"Abteilung wählen"}
          onChange={e=>setNewBookData({...newBookData, lieferung:[{"$":{status:e.target.value}}]})}
          >
            <MenuItem value={"Lagernd"}>Lagernd</MenuItem>
            <MenuItem value={"Bestellt"}>Bestellt</MenuItem>
            <MenuItem value={"nicht Lagernd"}>nicht Lagernd</MenuItem>
          </Select>
        </FormControl>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose}>Cancel</Button>
          <Button onClick={addBook}>Hinzufügen</Button>
        </DialogActions>
      </Dialog>
    </div>
    );
}