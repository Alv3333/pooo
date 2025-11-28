const express = require('express');
const Unblocker = require('unblocker');
const auth = require('basic-auth-connect');

const app = express();

// Basic Auth (ändra 'user' och 'password' till egna)
app.use(auth('user', 'password'));

// Initiera "pooo" proxy
const pooo = new Unblocker();
app.use(pooo.middleware());

// Render använder process.env.PORT
const port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log(`Pooo proxy körs på port ${port}`);
});
