const app = require("./app");
require("dotenv").config();
const port = process.env.PORT || 3000; //enviroment de PORT (si hay un puerto definido en .env leventa en ese, si no lo levanta el en 3000

app.listen(port, () => {
  console.log(`Server running on port: ${port}`);
});
