const url = require("http");

const server = url.createServer((req, res) => {
  console.log(req.url);
  if (req.url == "/home") {
    res.end(`<!DOCTYPE html>
    <html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>Document</title>
    </head>
    <body>
        <div style="text-align: center;">
            <img src="https://img.freepik.com/premium-vector/education-website-landing-page-ui-template-design_585784-5.jpg?w=2000" alt="" style="width: 76%;">
        </div>
    </body>
    </html>`);
  } else if (req.url == "/login") {
    res.end(`<!DOCTYPE html>
    <html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>Document</title>
    </head>
    <body>
        <div style="text-align: center; margin-top: 80px;">
            <img src="https://assets.materialup.com/uploads/ef2d2a99-0734-47a6-a761-8197487668f8/preview.png" alt="" style="width: 50%;">
        </div>
    </body>
    </html>`);
  } else if (req.url == "/signin") {
    res.end(`<!DOCTYPE html>
    <html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>Document</title>
    </head>
    <body>
        <div style="text-align: center; margin-top: 80px;">
            <img src="https://i.pinimg.com/736x/e7/a8/73/e7a87347a050a40954f1ef26d1da3ec0.jpg" alt="" style="width: 50%;">
        </div>
    </body>
    </html>`);
  } else if (req.url == "/product") {
    res.end(`<!DOCTYPE html>
    <html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>Document</title>
    </head>
    <body>
        <div style="text-align: center; margin-top: 80px;">
            <img src="https://i.pinimg.com/originals/e1/6a/96/e16a96f1c70c6e3990ff8b51c644ee37.jpg" alt="" style="width: 50%;">
        </div>
    </body>
    </html>`);
  } else {
    res.end(`<!DOCTYPE html>
    <html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>Document</title>
    </head>
    <body>
        <div style="text-align: center; margin-top: 80px;">
            <img src="https://support.start.me/hc/article_attachments/360001139105/404_page_not_found.jpeg" alt="" style="width: 50%;">
        </div>
    </body>
    </html>`);
  }
});

server.listen(5050, () => {
  console.log("server is sucsessuly created ! ");
});
