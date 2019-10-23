import Sequelize, { Model } from 'sequelize';

class Student extends Model {
  static init(sequelize) {
    super.init(
      {
        // id: {
        //  type: Sequelize.INTEGER,
        //  primaryKey: true,
        //  autoIncrement: true,
        // },
        nome: Sequelize.STRING,
        email: Sequelize.STRING,
        idade: Sequelize.INTEGER,
        peso: Sequelize.FLOAT,
        altura: Sequelize.FLOAT,
      },
      {
        sequelize,
      }
    );
  }
}

export default Student;
