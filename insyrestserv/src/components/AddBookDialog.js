import * as React from 'react';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';

export default function AddBookDialog(){

    const [open, setOpen] = React.useState(false);

    const handleClickOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
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
            autoFocus
            margin="dense"
            id="autor"
            label="Autor"
            variant="standard"
            type={'text'}
          />
         <TextField
            autoFocus
            margin="dense"
            id="Buchtitel"
            label="Buchtitel"
            variant="standard"
            type={'text'}
          />
         <TextField
            autoFocus
            margin="dense"
            id="verlag"
            label="Verlag"
            variant="standard"
          />
         <TextField
            autoFocus
            margin="dense"
            id="isbn"
            label="ISBN"
            variant="standard"
            type={'number'}
          />
          <TextField
            autoFocus
            margin="dense"
            id="Jahr"
            label="Jahr"
            variant="standard"
            type={'number'}
          />
          <TextField
            autoFocus
            margin="dense"
            id="ort"
            label="Ort"
            variant="standard"
          />
          <TextField
            autoFocus
            margin="dense"
            id="hersteller"
            label="Hersteller"
            variant="standard"
          />
          <TextField
            autoFocus
            margin="dense"
            id="auflage"
            label="Auflage"
            variant="standard"
            type={'number'}
          />
          <TextField
            autoFocus
            margin="dense"
            id="lieferung"
            label="Lieferung"
            variant="standard"
          />
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose}>Cancel</Button>
          <Button onClick={handleClose}>Subscribe</Button>
        </DialogActions>
      </Dialog>
    </div>
    );
}