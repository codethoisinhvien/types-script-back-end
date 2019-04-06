import Sequelize from 'sequelize/index';
import { UserFactory } from '../models/user';
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
   User:UserFactory(this.sequelize,Sequelize)
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

