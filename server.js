// Imports
const app = require("./app");

// Sets the PORT for our app to have access to it. If no env has been set, we hard code it to 3000
const PORT = process.env.PORT || 3000;

// This will start our server in the chosen port 
app.listen(PORT, () => {
  console.log(`Server listening on port http://localhost:${PORT}`);
});
