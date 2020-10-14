import express from 'express'
import { getRepository } from 'typeorm'
import Orphanage from './models/Orphanage'

import './database/connection'; 

const app = express();

app.use(express.json()); 

//Rota = conjunto; 
//Recursos = Usuario; 
// metodos HTTP


//Get = buscar uma informação (Lista de item); 
//POST = Criando uma informação;


//Put = Editando uma informação; 
// Delete = Deletando uma informação; 


//parâmtros 
//Query: http://localhost:3333/users?search=diego
//Router: http://localhost:333/users/1 (identificar um rescurso)

//Body: http://localhost:333/users/1 (identificar um rescurso)



app.listen(3333); 

//localHost: 3333;



