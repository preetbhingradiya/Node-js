let store = process.argv[2];
let a = process.argv[3];
let b = process.argv[4];

const pro = () => {
  const fs = require("fs");

  const write = () => {
    // fs.writeFile('message.txt', data, (err) => {
    //     if (err) throw err;
    //     console.log('The file has been saved!');
    // });
    fs.writeFile(a, b,'\n', (err) => {
      if (err) throw err;
      console.log("The file has been saved!");
    });
  };

  const append = () => {
    // fs.appendFile("message.txt", "data to append", (err) => {
    //   if (err) throw err;
    //   console.log('The "data to append" was appended to file!');
    // });
    fs.appendFile(a, b, (err) => {
      if (err) throw err;
      console.log('The "data to append" was appended to file!');
    });
  };

  const read = () => {
    // fs.readFile('/etc/passwd', (err, data) => {
    //     if (err) throw err;
    //     console.log(data);
    // });
    fs.readFile(a, "utf-8", (err, data) => {
      if (err) throw err;
      console.log(data);
    });
  };

  const rename = () => {
    // fs.rename('oldFile.txt', 'newFile.txt', (err) => {
    //     if (err) throw err;
    //     console.log('Rename complete!');
    // });
    fs.rename(a, b, (err) => {
      if (err) throw err;
      console.log("Rename complete!");
    });
  };

  const unlink = () => {
    // fs.unlink("path/file.txt", (err) => {
    //   if (err) throw err;
    //   console.log("path/file.txt was deleted");
    // });
    fs.unlink(a, (err) => {
      if (err) throw err;
      console.log("file was deleted");
    });
  };

  if (store == "write") {
    write();
  } else if (store == "append") {
    append();
  } else if (store == "read") {
    read();
  } else if (store == "rename") {
    rename();
  } else {
    unlink();
  }
};
pro();
