const fs = require("fs");
const { path, dirname } = require("../utils");

const filename = path.join(dirname, "data", "user_detail.json")
exports.setUserDetails = (body, cb) => {
    const { username, password, mobilenumber, email } = body;
    let userDetails = [];
    fs.readFile(filename, (err, fileContent) => {
        if(!err){
            userDetails = JSON.parse(fileContent);
            userDetails.push({username, password, mobilenumber, email, isLoggedIn: false});
        } else {
            userDetails = [];
        }

        fs.writeFile(filename, JSON.stringify(userDetails), (err) => {
            if(!err){
                console.log("User details are uploaded successfully")
                cb();
            } else {
                console.log("Some thing went wrong while uploading the user details")
            }
        })
    })
}


exports.validateUserDetail = (body, cb) => {
    const { username, password } = body;
    fs.readFile(filename, (err, fileContent) => {
        if(!err){
            userDetails = JSON.parse(fileContent);
            const loggedInUser = userDetails.find( userDetail => userDetail.username === username && userDetail.password === password);
            if(userDetails.some( userDetail => userDetail.username === username && userDetail.password === password)){
                loggedInUser["isLoggedIn"] = true;
                cb(loggedInUser);
            } else {
                cb();
            }
           
        } else {
            userDetails = [];

        }
    })
}