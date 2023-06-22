const userData = require("./UserModol")


const Controler = {

  getAllUser: async (req, res) => {
    const allUsers = await userData.getallusers();
    res.status(200).json(allUsers);
  },


  createUser: async (req, res) => {
    const { name, email, poneNumber, Date_of_birth } = req.body;
    try {
      const newUser = await userData.createUser(name, email, poneNumber, Date_of_birth)
      res.status(200).json(newUser);
    } catch (error) {
      if (error.message == "All fields are mandatory!") {
        res.status(400).json({ error: "All fields are mandatory!" });
      } else if (error.message == "Invalid email!")
        res.status(400).json({ error: "Invalid email!" });
      else if (error.message == "Invalid phone!")
        res.status(400).json({ error: "Invalid phone!" });
      else {
        res.status(500).json({ error: "server error" })
      }
    }

  },


  updateUser: async (req, res) => {
    const id = req.params.userId;
    const { name, email, poneNumber, Date_of_birth } = req.body;
    try {
      const user = await userData.updateUser(id, name, email, poneNumber, Date_of_birth);
      if (!user) {
        res.status(404).json({ error: "user not found" })
      }
      res.status(200).json(userData.updateUser(id, name, email, poneNumber, Date_of_birth));

    } catch (error) {
      res.status(500).json({ error: "server error" })
    }

  },


  deleteUser: async (req, res) => {
    const id = req.params.userId;
    try {
      const indexDelete =  await userData.deleteUser(id)
      if (!indexDelete) {
        res.status(404).json({ error: "user not found" })
      }
      res.status(200).json({ message: 'deleted' });

    } catch (error) {
     res.status(500).json({ error: "server error" })
    }

  },
  getUserbyId: async (req, res) => {
    const id = req.params.userId;
    try {
      const user = await userData.getUserbyId(id);
      if (!user) {
        console.log("user not found")
       return res.status(404).json({ error: "user not found" })
      }
    return  res.status(200).json(user);
    } catch (error) {
     return res.status(500).json({ error: "server error" })
    }

  },
};

module.exports = Controler;