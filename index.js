import express from 'express';
import axios from 'axios';

const app = express();
const port = 3000;
const API_URL = "https://restcountries.com/v3.1";

app.use(express.static("public"));
app.set("view engine", "ejs");

// Route to get all countries for the homepage
app.get("/", async (req, res) => {
  try {
    const result = await axios.get(`${API_URL}/all?fields=name,capital,region,population,flags`);
    res.render("index", { countries: result.data });
  } catch (error) {
    console.error("Failed to make request:", error.message);
    res.render("index", { error: "Failed to retrieve countries. Please try again later." });
  }
});

// Route to handle search functionality
app.get("/search", async (req, res) => {
  const query = req.query.name;
  if (!query) {
    return res.redirect("/");
  }

  try {
    const result = await axios.get(`${API_URL}/name/${query}?fullText=true`);
    res.render("country-details", { country: result.data[0] });
  } catch (error) {
    console.error("Failed to make request:", error.message);
    res.render("index", { error: "Country not found. Please try again." });
  }
});

// Route to get details for a specific country
app.get("/country/:name", async (req, res) => {
  try {
    const result = await axios.get(`${API_URL}/name/${req.params.name}`);
    res.render("country-details", { country: result.data[0] });
  } catch (error) {
    console.error("Failed to make request:", error.message);
    res.render("index", { error: "Failed to retrieve country details. Please try again later." });
  }
});

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});