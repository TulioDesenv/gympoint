import * as Yup from 'yup';
import Student from '../models/Student';

class StudentController {
  async store(req, res) {
    const schema = Yup.object().shape({
      nome: Yup.string().required(),
      email: Yup.string()
        .email()
        .required(),
      idade: Yup.number().integer(),
      peso: Yup.number(),
      altura: Yup.number(),
    });

    if (!(await schema.isValid(req.body))) {
      return res.status(400).json({ error: 'Validation fails' });
    }

    const { email } = req.body;
    const user = await Student.findOne({ where: { email } });

    if (user) {
      return res.status(401).json({ error: 'Email`s student alredy exists' });
    }

    const student = await Student.create(req.body);

    return res.json(student);
  }

  async update(req, res) {
    const schema = Yup.object().shape({
      nome: Yup.string(),
      email: Yup.string().email(),
      idade: Yup.number().integer(),
      peso: Yup.number(),
      altura: Yup.number(),
    });

    if (!(await schema.isValid(req.body))) {
      return res.status(400).json({ error: 'Validation fails' });
    }

    const { email, id } = req.body;
    const student = await Student.findByPk(id);

    if (email !== student.email) {
      const studentExist = await Student.findOne({ where: { email } });

      if (studentExist) {
        return res
          .status(400)
          .json({ error: 'Email`s student already exists.' });
      }
    }

    const { nome, idade, peso, altura } = await student.update(req.body);

    return res.json({ id, nome, email, idade, peso, altura });
  }
}

export default new StudentController();
