// Flux elements
var AppActions = require('../actions/AppActions');

// Third party modules
var Firebase = require('firebase');

// API constants
base_firebase_url = "https://youtube-gallery-dev0.firebaseIO.com";


module.exports = {

    saveVideo: function(video) {
        this.firebaseRef = new Firebase(base_firebase_url + "/" + "videos");
        this.firebaseRef.push(video);
    }

}
