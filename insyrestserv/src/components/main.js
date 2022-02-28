import { useEffect } from "react";
import { useState } from "react";
import {FormControl, InputLabel, MenuItem, Select, Divider, Box, AppBar, Toolbar, Typography, Table, TableRow, TableCell, TableBody, TableHead} from "@mui/material"

async function postData(url = '', data = {}) {
  const response = await fetch(url, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(data)
  });
  return response.json();
}

export default function Main(){

    
    const [loaded, setLoaded] = useState(false);
    const [selectedAbteilung, setSelectedAbteilung] = useState();
    const [abteilungBooks, setAbteilungBooks] = useState();
    const [abteilungen, setAbteilungen] = useState();

    
    async function getData(){
        return await fetch("http://localhost:5000/").then(res=>res.json()).then(data=>data.data).then(d=>setAbteilungen(d));
      }

    async function getInfo(){
        return await fetch("http://localhost:5000/infos").then(res=>res.json()).then(data=>data.data).then(d=>setAbteilungen(d));
      }
    
      async function getData(){
        return await fetch("http://localhost:5000/sections").then(res=>res.json()).then(data=>data.data).then(d=>setAbteilungen(d));
      }

      async function getBooks(){
        return await fetch("http://localhost:5000/sections").then(res=>res.json()).then(data=>data.data).then(d=>setAbteilungen(d));
      }

    useEffect(()=>{
        setLoaded(true);
    }, [abteilungen]);


    useEffect(()=>{
      if(!loaded){
        getData();
      }
    }, [loaded]);

    useEffect(()=>{
      if (selectedAbteilung){
        postData("http://localhost:5000/abteilung", {abteilung: selectedAbteilung}).then(data=>data.data).then(d=>setAbteilungBooks(d));
      }

    }, [selectedAbteilung]);


return(
    <div>
    <AppBar>
      <Toolbar>
        <Typography sx={{ flexGrow: 1, fontWeight:"bold" }} >Buchladen</Typography>
        <Typography>Peter Bezak</Typography>
      </Toolbar>
    </AppBar>
    <Box sx={{padding:"5%"}}>
      <div style={{width:'100%', display:'flex', justifyContent:'center'}}>
      <FormControl>
        <InputLabel id="abteilungen-select-label">Abteilungen</InputLabel>
        <Select 
        value={selectedAbteilung} 
        label="Abteilungen" 
        style={{minWidth:"150px", maxWidth:"250px"}} 
        variant='outlined'
        labelId="abteilungen-select-label" 
        defaultValue={"Abteilung wählen"}
        onChange={e=>setSelectedAbteilung(e.target.value)}
        >
          {loaded && abteilungen?.map(name=><MenuItem value={name}>{name}</MenuItem>)}
        </Select>
      </FormControl>
      </div>

      <Divider style={{margin:20}}>Buchinfos</Divider>

      <Table sx={{ minWidth: 650 }} aria-label="simple table" >
        <TableHead>
          <TableRow>
            <TableCell>Buch</TableCell>
            <TableCell>Author</TableCell>
            <TableCell>ISBN</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {abteilungBooks?.map(
            (buch)=>{
              return <TableRow><TableCell>{buch?.buchtitel}</TableCell>
              <TableCell>{buch.autor[0].vorname[0] + " " + buch.autor[0].nachname[0]}</TableCell>
              <TableCell>{buch?.isbn}</TableCell>
              </TableRow>;
              
            }
            )}
        </TableBody>
      </Table>
    </Box>
    
    </div>
);

}