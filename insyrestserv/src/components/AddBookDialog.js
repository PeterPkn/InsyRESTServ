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
        <div>
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
          />
         <TextField
            autoFocus
            margin="dense"
            id="Buchtitel"
            label="Buchtitel"
            variant="standard"
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