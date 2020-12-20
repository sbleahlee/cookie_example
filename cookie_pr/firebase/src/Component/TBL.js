import React, { Component } from 'react';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableRow from '@material-ui/core/TableRow';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import Paper from '@material-ui/core/Paper';
import { makeStyles } from '@material-ui/core/styles';
//import { DataGrid } from '@material-ui/data-grid';

// const columns = [
//   { field: 'id', headerName: 'ID', width: 70 },
//   { field: 'name', headerName: 'Name', width: 130 },
//   { field: 'phone', headerName: 'Phone number', width: 130 },
// ];

class TBL extends Component {

    render(){
        var users = this.props.user;
        console.log('USER : ',users);

        // Object.users(user).forEach(user=>{                
        //     <TableRow key={user.id}>
        //         <TableCell>
        //             {console.log(`user.id : ${user.id}`)}
        //             {user.id}
        //         </TableCell>
        //         <TableCell align="middle">
        //             {console.log(`user.name : ${user.name}`)}{user.name}
        //         </TableCell>
        //         <TableCell align="middle">
        //             {console.log(`user.phone : ${user.phone}`)}{user.phone}
        //         </TableCell>
        //     </TableRow>
        // });

        // const classes = makeStyles();

        return (
        <TableContainer component={Paper}>
            <Table aria-label = "simple table">
                <TableHead>
                    <TableRow>
                        <TableCell>ID</TableCell>
                        <TableCell>Name</TableCell>
                        <TableCell>Phone</TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>    
                    {/* {user} */}
                    {users.map((user)=>(            
                        <TableRow key={user.id.toString()}>
                            <TableCell>
                                {user.uid.toString()}
                            </TableCell>
                            <TableCell align="middle">
                                {user.name.toString()}
                            </TableCell>
                            <TableCell align="middle">
                                {user.phone.toString()}
                            </TableCell>
                        </TableRow>
                    ))} 
                </TableBody>
            </Table>
        </TableContainer>
        )
    }
} 

export default TBL;