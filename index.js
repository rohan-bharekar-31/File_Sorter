const fs = require("fs");
const path = require("path");

const sort = (mainFolder, targetFolder) => {
    files = fs.readdirSync(mainFolder);
    console.log(files);
    files.forEach(file => {
        let ext = file.split('.',)[file.split('.').length - 1];
        console.log(path.join(targetFolder, ext))

        console.log(fs.existsSync(path.join(targetFolder, ext)))


        if (fs.existsSync(path.join(targetFolder, ext))) {
            fs.rename(path.join(mainFolder, file), path.join(targetFolder, ext, file), (err) => {
                if (err) {
                    console.log(err);
                }
                else {
                    console.log("File Moved SuccesFully")
                }
            })
        }
        else {
            fs.mkdirSync(path.join(targetFolder, ext))
            fs.rename(path.join(mainFolder, file), path.join(targetFolder, ext, file), (err) => {
                if (err) {
                    console.log(err);
                }
                else {
                    console.log("File Moved SuccesFully")
                }
            })
        }
    });
}
mainFolder = `C:\\Users\\rohan\\OneDrive\\Desktop\\Random_Documents`
targetFolder = `C:\\Users\\rohan\\OneDrive\\Desktop\\targetFolder`
sort(mainFolder, targetFolder)