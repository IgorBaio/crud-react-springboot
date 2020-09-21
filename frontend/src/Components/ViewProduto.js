import React, {Component, useState,useEffect} from "react";
import Avatar from "@material-ui/core/Avatar";
import Button from "@material-ui/core/Button";
import CssBaseline from "@material-ui/core/CssBaseline";
import TextField from "@material-ui/core/TextField";
import { Link, useLocation } from "react-router-dom";
import Grid from "@material-ui/core/Grid";
import DashboardIcon from '@material-ui/icons/Dashboard';
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";
import Container from "@material-ui/core/Container";

const useStyles = makeStyles(theme => ({
   paper: {
     marginTop: theme.spacing(7),
     display: "flex",
     flexDirection: "column",
     alignItems: "center"
   },
   avatar: {
     margin: theme.spacing(1),
     backgroundColor: theme.palette.success.dark
   },
   form: {
     width: "100%", 
     marginTop: theme.spacing(3)
   },
   submit: {
     margin: theme.spacing(3, 0, 2)
   },
   textField: {
     marginLeft: theme.spacing(1),
     marginRight: theme.spacing(1),
     width: "100%"
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
 }));

 const ViewProduto = () =>{
   let location = useLocation();
   const [id, setId] = useState("");
   const [nome, setNome] = useState("");
   const [codigoBarras, setCodigoBarras] = useState("");
   const [descricao, setDescricao] = useState("");
   const [categoria, setCategoria] = useState("");
   const [quantidade, setQuantidade] = useState("");
   const [message, setMessage] = useState("Nada salvo na sessão ainda.");

   useEffect(() => {
      fetch(`/api/produto/${location.state}`)
        .then(data => {
          return data.json();
        })
        .then(data => {
          setId(data.id);
          setNome(data.nome);
          setCategoria(data.categoria);
          setCodigoBarras(data.codigoBarras);
          setDescricao(data.descricao);
          setQuantidade(data.quantidade);
        })
        .catch(err => {
          console.log(err);
        });
    }, []);

    async function updateItem(toInput){
      const response = await fetch("/api/produto", {
         method: "PUT",
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
      setMessage(body.id ? "Dado atualizado com sucesso" : "Falha na atualização do dado");
   }

   const handleCodigoBarrasChange = event => setCodigoBarras(event.target.value);
   const handleNomeChange = event => setNome(event.target.value);
   const handleDescricaoChange = event => setDescricao(event.target.value);
   const handleCategoriaChange = event =>setCategoria(event.target.value);
   const handleQuantidadeChange = event =>setQuantidade(event.target.value);

   const handleSubmit = variables => {
      const toInput = {id: id,nome: nome, codigoBarras: codigoBarras, descricao: descricao, quantidade: quantidade, categoria:categoria};
      updateItem(toInput);
      setNome("");
      setCodigoBarras("");
      setDescricao("");
      setCategoria("");
      setQuantidade("");

   };

   const classes = useStyles();
   return (
      <Container component="main" maxWidth="xs">
         <CssBaseline />
         <div className={classes.paper}>
         <Avatar className={classes.avatar}>
            <DashboardIcon />
         </Avatar>
         <Typography component="h1" variant="h5">
            Atualização do Produto
         </Typography>
         <form className={classes.form} noValidate>
            <Grid container spacing={2}>
               <Grid item xs={12}>
               <TextField
                  variant="outlined"
                  required
                  fullWidth
                  id="name"
                  value={nome}
                  label="Nome"
                  name="name"
                  autoComplete="name"
                  onChange={handleNomeChange}
               />
               </Grid>
               <Grid item xs={12} sm={6}>
                  <TextField
                     autoComplete="quantidade"
                     name="quantidade"
                     variant="outlined"
                     required
                     fullWidth
                     value={quantidade}
                     id="quantidade"
                     label="Quantidade"
                     onChange={handleQuantidadeChange}
                  />
               </Grid>
               <Grid item xs={12} sm={6}>
               <TextField
                  variant="outlined"
                  required
                  fullWidth
                  id="categoria"
                  value={categoria}
                  label="Categoria"
                  name="categoria"
                  autoComplete="categoria"
                  onChange={handleCategoriaChange}
               />
               </Grid>
               <Grid item xs={12}>
                  <TextField
                     variant="outlined"
                     required
                     fullWidth
                     id="descricao"
                     value={descricao}
                     label="Descrição"
                     name="descricao"
                     autoComplete="descricao"
                     onChange={handleDescricaoChange}
                  />
               </Grid>
               <Grid item xs={12}>
                  <TextField
                     autoComplete="codigoBarras"
                     name="codigoBarras"
                     variant="outlined"
                     required
                     fullWidth
                     value={codigoBarras}
                     id="codigoBarras"
                     label="Código de barras"
                     onChange={handleCodigoBarrasChange}
                  />
               
               </Grid>
            </Grid>
            <Button
               fullWidth
               variant="contained"
               color="primary"
               preventDefault
               className={classes.submit}
               onClick={handleSubmit}
            >
               Atualizar
            </Button>

         </form>
         <Typography style={{ margin: 7 }} variant="body1">
            Status: {message}
         </Typography>
         
         </div>
         <Link className={classes.link} to="/view">
            <Typography align="left">
               &#x2B9C; Voltar para visualizar produtos no estoque
            </Typography>
         </Link>
      </Container>
   );
};

export default ViewProduto;
 