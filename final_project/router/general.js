const axios = require("axios");

// Get all books using async
public_users.get('/', async (req, res) => {
  try {
    const response = await axios.get("http://localhost:5000/");
    return res.status(200).json(response.data);
  } catch (err) {
    return res.status(500).json({ message: "Error fetching books" });
  }
});

// Get by ISBN
public_users.get('/isbn/:isbn', async (req, res) => {
  try {
    const response = await axios.get(`http://localhost:5000/isbn/${req.params.isbn}`);
    return res.status(200).json(response.data);
  } catch (err) {
    return res.status(500).json({ message: "Error fetching ISBN" });
  }
});

// Get by author
public_users.get('/author/:author', async (req, res) => {
  try {
    const response = await axios.get(`http://localhost:5000/author/${req.params.author}`);
    return res.status(200).json(response.data);
  } catch (err) {
    return res.status(500).json({ message: "Error fetching author" });
  }
});

// Get by title
public_users.get('/title/:title', async (req, res) => {
  try {
    const response = await axios.get(`http://localhost:5000/title/${req.params.title}`);
    return res.status(200).json(response.data);
  } catch (err) {
    return res.status(500).json({ message: "Error fetching title" });
  }
});