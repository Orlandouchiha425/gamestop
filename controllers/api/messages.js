const Messages = require("../../models/Messages");


const findAllMessages = (req, res) => {
  Messages.find({}, (err, foundMessages) => {
    if (!err) {
      res.status(200).json(foundMessages);
    } else {
      res.status(400).json(err);
    }
  });
};

const createMessages = async (req, res) => {
  try {
    const { body } = req;
    const createdMessages = await Messages.create(body);
    res.status(200).json({ message: "Message Created", createdMessages });
  } catch (error) {
    res.status(400).json({ err: error.message });
  }
};

const deleteMessages = (req, res) => {
  Messages.findByIdAndDelete(req.params.id, (err) => {
    if (!err) {
      res.status(200).json({ message: "Deleted message" });
    } else {
      res.status(400).json({ err: "Oops! Something went wrong. Code away" });
    }
  });
};

const findMessageByID = (req, res) => {
  Messages.findById(req.params.id, (err, message) => {
    if (!err) {
      res.status(200).json({ message: "Showing the Message", message });
    } else {
      res.status(400).json(err);
    }
  });
};

async function editMessages(req, res) {
  const { body } = req;
  Messages.findByIdAndUpdate(
    req.params.id,
    body,
    { new: true },
    (err, updatesMessages) => {
      if (!err) {
        res.status(200).json(updatesMessages);
      } else {
        res.status(400).json(err);
      }
    }
  );
}

module.exports = {
  findAllMessages,
  createMessages,
  deleteMessages,
  findMessageByID,
  editMessages,
};
