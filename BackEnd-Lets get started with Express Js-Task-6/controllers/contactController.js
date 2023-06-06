const path=require('path');
const rootDir=require('../util/path');

module.exports.contactControllerHandler=(req, res) => {
    res.sendFile(path.join(rootDir,'views','contact.html'))
}