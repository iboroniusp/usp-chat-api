const Room = require("../models/Room");
const Message = require("../models/Message");

module.exports = {
  async index(req, res) {
    try {
      const result = await Room.find({});

      res.send(result);
    } catch (error) {
      res.status(400).send({ error: String(error) });
    }
  },

  async store(req, res) {
    try {
      const result = await Room.create(req.body);
      res.send(result);
    } catch (error) {
      res.status(400).send({ error: String(error) });
    }
  },

  async show(req, res) {
    try {
      const { room_id } = req.params;

      const result = await Message.find({ room_id });

      res.send(result);
    } catch (error) {
      res.status(400).send({ error: String(error) });
    }
  }
};
