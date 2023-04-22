const express = require('express');
const app = express();
const port = process.env.PORT || 5000;

app.get('/', (req: any, res: any) => {
  let Helloorld = 'jnjbhjvhvhbh!';
  res.send(Helloorld);
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
