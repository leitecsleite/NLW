import express from 'express'
import routes from './routes'; 
import path from 'path';
import cors from 'cors';  
import './database/connection'; 
import 'express-async-errors';
import errorHandler from './errors/handler'; 


const app = express();
app.use(express.json()); 

app.use(cors()); 
app.use(routes); 
app.use('/uploads', express.static(path.join(__dirname, '..', 'uploads')));
app.use(errorHandler); 
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



