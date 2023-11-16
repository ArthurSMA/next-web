import { Link, Table, TableBody, TableCell, TableContainer, TableHead, TableRow } from '@mui/material';
import IconButton from '@mui/material/IconButton';
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';
import AddIcon from '@mui/icons-material/Add';
import { deletarUsuario } from '../api/api';

export default function Tabela({ rows }) {
    const handleDelete = async (id) => {
        const usuarios = await deletarUsuario(id);
        window.location.reload();
    };

    return (
        <>
            <Link href="/cadastrar"> <AddIcon /></Link>
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
                        {rows.map((row) => (
                            <TableRow key={row.id}>
                                <TableCell> {row.id} </TableCell>
                                <TableCell>{row.nome}</TableCell>
                                <TableCell>
                                    <IconButton>
                                        <EditIcon />
                                    </IconButton>
                                    <IconButton onClick={() => handleDelete(row.id)}>
                                        <DeleteIcon />
                                    </IconButton>
                                </TableCell>
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
            </TableContainer>
        </>
    );
}
