import React, {useState} from "react";
import { makeStyles } from "@material-ui/core/styles";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import Paper from "@material-ui/core/Paper";
import Avatar from "@material-ui/core/Avatar";
import EditIcon from '@material-ui/icons/Edit';
import LineStyleIcon from '@material-ui/icons/LineStyle';
import { Link } from "react-router-dom";
import Typography from "@material-ui/core/Typography";
import CircularProgress from "@material-ui/core/CircularProgress";
import { Button } from "@material-ui/core";

const useStyles = makeStyles(theme => ({
   table: {
      marginTop:15,
      minWidth: 600
   },
   avatar: {
     margin: theme.spacing(1),
     backgroundColor: theme.palette.success.dark
   },
   paper: {
     display: "flex",
     flexDirection: "column",
     justifyContent: "center",
     alignItems: "center",
     margin: `10px`,
     height: "100%",
     width: "99%",
     marginTop: theme.spacing(7)
   },
   link: {
      marginTop:25,
     color: "rgba(0,0,0,0.65)",
     textDecoration: "none",
     marginLeft: "10%",
     alignSelf: "flex-start",
     "&:hover": {
       color: "rgba(0,0,0,1)"
     }
   },
   header:{
      fontWeight:"bold",
      backgroundColor: "#CCC",
      boxShadow: '0 3px 5px 2px rgba(120, 120, 120, .3)',
   }
 }));
 

export default function SimpleTable() {
   const classes = useStyles();
   const [data, updateData] = useState([]);
   const [firstLoad, setLoad] = useState(true);
   let isLoading = true;

   async function getProdutos(){
      let response = await fetch('/api/produto');
      let body = await response.json();
      updateData(body);
   }

   async function deleteFunc(toInput){
      const response = await fetch(`/api/produto/${toInput}`, {
         method: "DELETE",
         mode: "cors",
         cache:"no-cache",
         credentials:"same-origin",
         headers:{
            "Content-Type":"application/json"
         },
         redirect:"follow",
         referrerPolicy: "no-referrer",
         body: JSON.stringify(toInput) 
      });

      let body = await response.json();
      console.log(body.id);
   }
   

   if(firstLoad){
      getProdutos();
      setLoad(false);
   }

   if(data.length>0) isLoading = false;
   const preparaId=(id)=>{
      deleteFunc(id);
      window.location.reload(false);
   }

   return (
      <div className={classes.paper}>
         <Avatar className={classes.Avatar}>
            <LineStyleIcon />
         </Avatar>
         <Typography component="h1" variant="h5">
            Lista de produtos
         </Typography>

         {isLoading ? (
            <CircularProgress />
         ) : (
            <TableContainer
               style={{width: "80%", margin: "0 10px" }}
               component={Paper}
            >
               <Table className={classes.table} aria-label="simple table">
                  <TableHead>
                     <TableRow >
                        <TableCell align="center" className={classes.header}>Id</TableCell>
                        <TableCell align="center" className={classes.header}>Nome</TableCell>
                        <TableCell align="center" className={classes.header}>Categoria</TableCell>
                        <TableCell align="center" className={classes.header}>Descrição</TableCell>
                        <TableCell align="center" className={classes.header}>Quantidade</TableCell>
                        <TableCell align="center" className={classes.header}>Codigo de Barras</TableCell>
                        <TableCell align="center" className={classes.header}>Editar</TableCell>
                        <TableCell align="center" className={classes.header}>Apagar</TableCell>
                     </TableRow>
                  </TableHead>
                  <TableBody>
                     {data?.map(row=>(

                        <TableRow key={row.nome}>
                           
                           <TableCell align="center">{row.id}</TableCell>
                           <TableCell align="center">{row.nome}</TableCell>
                           <TableCell align="center">{row.categoria}</TableCell>
                           <TableCell align="center">{row.descricao}</TableCell>
                           <TableCell align="center">{row.quantidade}</TableCell>
                           <TableCell align="center">{row.codigoBarras}</TableCell>
                           <TableCell align="center"><Link to={
                                    {pathname:'/produto_view',
                                    state:row.id
                                    }
                                 }
                                 id={row.id}
                                 name={row.nome} ><Button
                                                   fullWidth
                                                   variant="contained"
                                                   color="primary"
                                                   preventDefault
                                                   className={classes.submit}
                                                   onClick={()=>{}}

                                                >
                                                   <EditIcon />
                                                </Button></Link></TableCell>
                           <TableCell align="center"><Button
                                                   fullWidth
                                                   variant="contained"
                                                   color="primary"
                                                   preventDefault
                                                   className={classes.submit}
                                                   onClick={()=>preparaId(row.id)
                                                   }

                                                >
                                                   X
                                                </Button></TableCell>
                        </TableRow>
                     ))}
                  </TableBody>
               </Table>
            </TableContainer>
         )}
         <Link className={classes.link} to="/">
            <Typography align="left">
               &#x2B9C; Voltar para o cadastro de produtos
            </Typography>
         </Link>
      </div>
   );



}

