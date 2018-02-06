/**
 * Created by oza on 12/7/2559.
 */
var path = require('path');
var config = require('./../config');
module.exports = {
    Page : function getPage(req, res) {
        var filename = req.params["0"];
        res.sendFile(path.join(config.path + '/file/'+filename));
    }
}