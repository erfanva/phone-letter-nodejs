import app from "./app.js";

const port = 3000; // Get it from .env

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
