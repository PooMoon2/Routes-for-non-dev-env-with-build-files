const express = require('express');
const app = express();

// for any other request, serve HTML in DIT environment (cloud env)
exports.build = function(NODE_ENV, fileLocation){
  if (NODE_ENV === 'DIT') {
    const indexHTMLContent = fs.readFileSync(
      path.join(fileLocation),
      'utf8'
    );
    app.all('*', (req, res) => {
      res.send(indexHTMLContent);
    });
  }
}