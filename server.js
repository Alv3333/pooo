const express = require('express');
const Unblocker = require('unblocker');
const auth = require('basic-auth-connect');

const app = express();

// Valfri Basic Auth (användarnamn/lösenord)
app.use(auth('user', 'password'));  // ändra 'user' och 'password'

// Initiera Node-Unblocker
const unblocker = new Unblocker();
app.use(unblocker.middleware());

// Render använder process.env.PORT
const port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log(`Node-Unblocker körs på port ${port}`);
});
