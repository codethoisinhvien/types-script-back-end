import {sign,verify} from 'jsonwebtoken'
import *as express from 'express'
export default class AccessToken{
    key='phongthien';
    access= async (request: express.Request, response: express.Response,next:any)=>{
        
        let token:any= request.headers.authorization
     ;
        try{
            if(token!=null){
              //  token =token.split(' ')[1];
       let val = await verify(token,this.key);
          console.log('val',val)
          if(val==undefined){
            response.status(401).send({meassage:"Token không hợp lệ"})
          }else{
            next()
          }
      
        
        }
       
        }catch(e){
          console.log(e)
        response.status(401).send({meassage:"Token không hợp lệ"})
        }
    
    }
    modAccess=async (request: express.Request, response: express.Response,next:any)=>{
         
        let token:any= request.headers.authorization
        token =token.split(' ')[1];
      
        try{
            let val = await verify('eyJhbGcOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjoiZ2lhbmciLCJpYXQiOjE1NTQ2MTQyMDd9.uNxa67xjDG1SNE-0x791M3ijST1ru1pemZDErLyivXs',this.key);
            console.log(val);
            next()  
             }catch(e){
                response.status(401).send({meassage:"Token không hợp lệ"})
             }
         
    }
    adminAccess=()=>{

    }
 
}