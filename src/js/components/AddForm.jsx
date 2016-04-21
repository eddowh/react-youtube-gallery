/**
 * Add form.
 */


var React = require('react');

// Flux elements
var AppActions = require('../actions/AppActions');
var AppStore = require('../stores/AppStore');


var AddForm = React.createClass({

    onSubmit: function(e) {
        e.preventDefault();

        var video = {
            title: this.refs.title.value.trim(),
            video_id: this.refs.video_id.value.trim(),
            description: this.refs.description.value.trim()
        }

        // TODO
        AppActions.saveVideo(video);
    },

    render: function() {
        return (
            <div className="add-form">
                <panel className="c12">
                    <h3>
                        Add Video
                    </h3>
                    <form onSubmit={this.onSubmit}>
                        <div className="form-group">
                            <label>
                                Video Title
                            </label>
                            <br />
                            <input className="form-control" type="text" ref="title" />
                        </div>
                        <div className="form-group">
                            <label>
                                Video ID
                            </label>
                            <br />
                            <input className="form-control" type="text" ref="video_id" />
                        </div>
                        <div className="form-group">
                            <label>
                                Video Description
                            </label>
                            <br />
                            <textarea className="form-control" type="text" ref="description"></textarea>
                        </div>
                        <button className="button" type="submit">
                            Add
                        </button>
                    </form>
                </panel>
            </div>
        );
    }

});

module.exports = AddForm;
