const User = require("../models/User");
const Message = require("../models/Message");
const Room = require("../models/Room");

module.exports = {
  async store(req, res) {
    try {
      const { room_id, user_id, text } = req.body;

      const user = await User.findOne({ _id: user_id });

      if (!user) {
        res.status(400).send({ error: "Esse usuário não existe" });
      }

      const room = await Room.findOne({ _id: room_id });

      if (!room) {
        res.status(400).send({ error: "Essa sala não existe" });
      }

      const data = await Message.create(req.body);

      const msg = {
        ...data._doc,
        user_id: user
      };

      req.io.emit(room._id, msg);
      res.send(msg);
    } catch (error) {
      res.status(400).send({ error: String(error) });
    }
  }
};
