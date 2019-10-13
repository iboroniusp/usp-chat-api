const User = require("../models/User");

module.exports = {
  // show(id) - mostrar um registro unico - GET
  // index() - mostra todos os registos - GET
  // store() - cria um registro - POST
  // destroy() - destroi um registro - DELETE
  // update() - atualiza um registo - PUT
  async index(req, res) {
    try {
      const result = await User.find({});
      res.send(result);
    } catch (error) {
      res.status(400).send({
        error: String(error)
      });
    }
  },

  async store(req, res) {
    //  req.body - Post
    //  req.params - Get
    //  req.query - Busca
    // const usp_number = req.body.usp_number;
    // const password = req.body.password;
    try {
      // Busca os parametros do corpo
      const {
        usp_number,
        password
      } = req.body;
      const user = await User.findOne({
        usp_number
      });

      if (user) {
        if (user.password === password) {
          return res.send(user);
        } else {
          return res.status(401).send({
            error: "Senha incorreta"
          });
        }
      } // Cria um novo registro da entidade User no banco


      const result = await User.create(req.body); // Envia a resposta com o codigo 200

      res.send(result);
    } catch (error) {
      res.status(400).send({
        error: String(error)
      });
    }
  }

};