/**
 * Displays the list of videos.
 */


var React = require('react');

// Flux elements
var AppActions = require('../actions/AppActions');
var AppStore = require('../stores/AppStore');

// Subcomponents
var Video = require('./Video.jsx');


var VideoList = React.createClass({

    render: function() {
        return (
            <div className="row">
                {
                    this.props.videos.map(function(video, index) {
                        return (
                            <Video video={video} key={index} />
                        )
                    })
                }
            </div>
        );
    }

});

module.exports = VideoList;
