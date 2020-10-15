import imagens from '../models/imagens';
import Imagens from '../models/imagens'

export default {
    render(imagens: Imagens ){
        return {
            
             id: imagens.id, 
             url: `htpp://localhost:3333/${imagens.path}`,//localhost:3333/upload/${imagens.path}'
                
        }; 
    },

    renderMany(imagens: imagens []) {
        return imagens.map( imagens => this.render(imagens)); 
    }
}; 