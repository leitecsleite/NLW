import {Entity, Column, PrimaryGeneratedColumn, ManyToOne, JoinColumn} from 'typeorm'
import Orphanage from './Orphanage'

@Entity('imagens')
export default class imagens{
  @PrimaryGeneratedColumn('increment')
    id: number;

  @Column()
   path:string; 
  
   @ManyToOne( ()=> Orphanage, orphanage => orphanage.imagens)
   @JoinColumn({ name:'orphanage_id'})
      orphanage: Orphanage; 



}