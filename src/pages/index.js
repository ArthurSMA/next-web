import React, { useState, useEffect } from "react";
import axios from 'axios';
import { Button, IconButton, CircularProgress, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Typography } from '@mui/material';
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';

const URL_API = "https://node-api-swart.vercel.app/api/usuarios/"

export default function Home() {
 const [data, setData] = useState(null);
 const [showTable, setShowTable] = useState(false);

 const fetchAllData = async () => {
     try {
         const response = await axios.get(URL_API);
         const data = response.data;
         setData(data);
     } catch (error) {
         console.log(`O erro é: ${error}`);
     }
 };

 const deleteUser = async (userId) => {
     try {
         await axios.delete(`${URL_API}${userId}`);
         fetchAllData();
     } catch (error) {
         console.log(`O erro é: ${error}`);
     }
 };

 useEffect(() => {
     fetchAllData();
 }, []);

 return (
     <>
         <Button onClick={() => setShowTable(!showTable)}>
             {showTable ? 'Ocultar usuários' : 'Mostrar usuários'}
         </Button>
         {showTable && data && (
             <TableContainer>
                <Table>
                   <TableHead>
                       <TableRow>
                           <TableCell>Id</TableCell>
                           <TableCell>Nome</TableCell>
                           <TableCell>Ações</TableCell>
                       </TableRow>
                   </TableHead>
                   <TableBody>
                       {data.map((item) => (
                           <TableRow key={item.id}>
                              <TableCell>{item.id}</TableCell>
                              <TableCell>{item.nome}</TableCell>
                              <TableCell>
                                  <IconButton aria-label="edit">
                                      <EditIcon />
                                  </IconButton>
                                  <IconButton aria-label="delete" onClick={() => deleteUser(item.id)}>
                                      <DeleteIcon />
                                  </IconButton>
                              </TableCell>
                           </TableRow>
                       ))}
                   </TableBody>
                </Table>
             </TableContainer>
         )}
     </>
 );
}
