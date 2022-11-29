const express = require('express');
const app = express();
const fs = require('fs');
const path = require('path');

// for any other request, serve HTML in DIT environment (cloud env)
exports.build = function(NODE_ENV, directoryName, filePath){
  if (NODE_ENV === 'DIT') {
    const indexHTMLContent = fs.readFileSync(
      path.join(directoryName + filePath),
      'utf8'
    );
    app.all('*', (req, res) => {
      res.send(indexHTMLContent);
    });
  }
}

// for serving built static js/css files
exports.builtStaticFiles = function(folderName, directoryName, filePath){
  app.use(
    folderName,
    express.static(path.join(directoryName, filePath))
  );
}
