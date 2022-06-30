const fs = require("fs");

fs.readFile("./blog1.txt", "utf-8", (err, data) => {
  //   console.log(data);
  fs.writeFile("./blog1.txt", "changed Text", (err, data2) => {
    if (err) {
      throw err;
    }
    fs.readFile("./blog2.txt", "utf-8", (err, data2) => {
      console.log(data2);
      fs.writeFile("./blog2.txt", "I'm text 2", (err) => {
        if (err) {
          throw err;
        }
        // // const newFolder = "newFolder";
        // // fs.mkdir(newFolder, (err) => {
        // //   if (err) {
        // //     throw err;
        // //   }
        // //   fs.rmdir(newFolder, (err) => {
        // //     if (err) {
        // //       throw err;
        // //     }
        //   });
        // });
        fs.writeFile("./delete.txt", "utf8", (err) => {
          if (err) {
            throw err;
          }
          fs.writeFile("./Hello.txt", "added text", (err) => {
            if (err) {
              throw err;
            }
            fs.rename("./Hello.txt", "./HelloWorld.txt", (err) => {
              if (err) {
                throw err;
              }
            });
          });
        });
      });
    });
  });
});
