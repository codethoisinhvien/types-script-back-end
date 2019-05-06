import Sequelize from 'sequelize/index';
import { UserFactory } from './user';
import { QuestionFactory } from './question';
import { SubjectFactory } from './subject';
import { QuestionAnswerFactory } from './question_answer';
import { AnswerFacatory } from './answer';
import { ExamFactory } from './exam';
import { ExamQuestionFactory } from './examquestion';
import { TaskFactory } from './task';
import { TaskExamQuestionFactory } from './taskexamquestion';
import { NotificationFactory } from './notification';
import { UserNotificationFactory } from './usernotification';
 interface DbInterface {
  sequelize: Sequelize.Sequelize;
  Sequelize: Sequelize.SequelizeStatic;
}
export class Database{
  private static instance:Database;
  db:any;
  sequelize:any
 private constructor(sequelizeConfig:any){
  const { database, username, password, params } = sequelizeConfig;
  this.sequelize = new Sequelize(database, username, password, params);
  this.db={
    sequelize:this.sequelize,
    Sequelize,
   User:UserFactory(this.sequelize,Sequelize),
   QuestionAnswer:QuestionAnswerFactory(this.sequelize,Sequelize),
   Question:QuestionFactory(this.sequelize,Sequelize),
   Answer:AnswerFacatory(this.sequelize,Sequelize),
   Subject:SubjectFactory(this.sequelize,Sequelize),
   Exam  :ExamFactory(this.sequelize,Sequelize),
   ExamQuestion:ExamQuestionFactory(this.sequelize,Sequelize),
   Task:TaskFactory(this.sequelize,Sequelize),
   TaskExamQuestion:TaskExamQuestionFactory(this.sequelize,Sequelize),
   Notification:NotificationFactory(this.sequelize,Sequelize),
   UserNotification:UserNotificationFactory(this.sequelize,Sequelize)
  }
  Object.keys(this.db).forEach(async (modelName) => {
    if (this.db[modelName].associate) {
      this.db[modelName].associate(this.db);
    }
  });
  return Database.instance
}
  
static setInstance(config:any):Database{
  
  if (!Database.instance) {
    Database.instance= new Database(config)
  }
  return Database.instance
  }
getInstance(){
  return this.db
}
}


