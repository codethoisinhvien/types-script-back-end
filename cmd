// question
sequelize model:create --name question --attributes id:interger,subject_id:interger,content:string
//subject
sequelize model:create --name subject  --attributes  name:string
//answer
sequelize model:create --name answer --attributes  content:string
//question_answer
sequelize model:create --name question_answer --attributes  question_id:interger,answer_id:interger
// exam
sequelize model:create --name exam  --attributes name:string ,score:interger ,timedo:interger ,status:boolean
//examquestion
sequelize model:create --name exam  --attributes exam_id:interger ,question_id:interger,score:interger 
// user
sequelize model:create --name user  --attributes first_name:string,last_name:string,username:string,password:string,birthday:Date,level:interger
