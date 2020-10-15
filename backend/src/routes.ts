import { Router} from 'express'; 
import OrphanagesControllers from './controllers/OrphanagesControllers'; 
import multer from  'multer'; 

import uploadConfig from './config/upload';

const routes = Router (); 
const upload = multer(uploadConfig); 

//mvc
//model 
//views
routes.get('/orphanages', OrphanagesControllers.index);
routes.get('/orphanages/:id', OrphanagesControllers.show);
routes.post('/orphanages',upload.array('imagens') ,  OrphanagesControllers.create); 

  export default routes; 
 