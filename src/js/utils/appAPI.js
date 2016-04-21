// Flux elements
var AppActions = require('../actions/AppActions');

// Third party modules
var Firebase = require('firebase');

// API constants
base_firebase_url = "https://youtube-gallery-dev0.firebaseIO.com";
collections_urls = {
    videos: base_firebase_url + "/" + "videos"
}

module.exports = {

    saveVideo: function(video) {
        this.firebaseRef = new Firebase(collections_urls.videos);
        this.firebaseRef.push(video);
    },

    getVideos: function() {
        this.firebaseRef = new Firebase(collections_urls.videos);
        this.firebaseRef.once("value", function(snapshot) {
            var videos = [];
            snapshot.forEach(function(childSnapshot) {
                var video = {
                    id: childSnapshot.key(),
                    title: childSnapshot.val().title,
                    video_id: childSnapshot.val().video_id,
                    description: childSnapshot.val().description
                };
                videos.push(video);
            });
            AppActions.receiveVideos(videos);
        });

    }

}
