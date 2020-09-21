import React, {useState} from "react";
import Avatar from "@material-ui/core/Avatar";
import Button from "@material-ui/core/Button";
import CssBaseline from "@material-ui/core/CssBaseline";
import TextField from "@material-ui/core/TextField";
import { Link } from "react-router-dom";
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
    width: "100%", // Fix IE 11 issue.
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
    marginRight: "0%",
    alignSelf: "flex-end",
    "&:hover": {
      color: "rgba(0,0,0,1)"
    }
 },
}));

export default function AddProduto(){
   const classes = useStyles();
   const [firstLoad, setLoad] = useState(true);

   const [nome, setNome] = useState("");
   const [codigoBarras, setCodigoBarras] = useState("");
   const [descricao, setDescricao] = useState("");
   const [categoria, setCategoria] = useState("");
   const [quantidade, setQuantidade] = useState("");

   const handleCodigoBarrasChange = event => setCodigoBarras(event.target.value);
   const handleNomeChange = event => setNome(event.target.value);
   const handleDescricaoChange = event => setDescricao(event.target.value);
   const handleCategoriaChange = event =>setCategoria(event.target.value);
   const handleQuantidadeChange = event =>setQuantidade(event.target.value);

   const [message, setMessage] = useState("Nada salvo na sessão ainda.");

   async function setProduto(toInput){
      const response = await fetch("/api/produto", {
         method: "POST",
         mode: "cors",
         cache:"no-cache",
         credentials:"same-origin",
         headers:{
            "Content-Type":"application/json"
         },
         redirect:"follow",
         referrerPolicy: "no-referrer",
         body: JSON.stringify(toInput) //"Content-Type" header
      });

      let body = await response.json();
      console.log(body.id);
      setMessage(body.id ? "Dado cadastrado com sucesso" : "Falha no cadastro");
   }

   const handleSubmit = variables => {
      const toInput = {nome: nome, codigoBarras: codigoBarras, descricao: descricao, quantidade: quantidade, categoria:categoria};
      setProduto(toInput);
      setNome("");
      setCodigoBarras("");
      setDescricao("");
      setCategoria("");
      setQuantidade("");

   };

   if(firstLoad){
      setLoad(false);
   }


   return (
      <Container component="main" maxWidth="xs">
      <CssBaseline />
      <div className={classes.paper}>
        <Avatar className={classes.avatar}>
          <DashboardIcon />
        </Avatar>
        <Typography component="h1" variant="h5">
          Cadastro Produto
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
            Save
          </Button>

        </form>
        <Typography style={{ margin: 7 }} variant="body1">
          Status: {message}
        </Typography>
        
        <Link className={classes.link} to="/view">
            <Typography align="right">
              Visualizar produtos no estoque &#x2B9E;
            </Typography>
         </Link>
      </div>
    </Container>
  );

}