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
       let val :any= await verify(token,this.key);
          console.log('val',val)
          if(val==undefined||val.user.role==0){
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
      console.log(token)
      
        try{
            let val :any= await verify(token,this.key);
          if(val.user.role==2){
            next()  
          }else{
            response.status(401).send({meassage:"Không có quyền truy câp"})
          }
         
             }catch(e){
               console.log(e)
                response.status(401).send({meassage:"Token không hợp lệ"})
             }
         
    }
    adminAccess=async (request: express.Request, response: express.Response,next:any)=>{
   
      let token:any= request.headers.authorization
      console.log(token)
      
        try{
            let val :any= await verify(token,this.key);
          if(val.user.role==3){
            next()  
          }else{
            response.status(401).send({meassage:"Không có quyền truy câp"})
          }
         
             }catch(e){
               console.log(e)
                response.status(401).send({meassage:"Token không hợp lệ"})
             }
    }
 
}