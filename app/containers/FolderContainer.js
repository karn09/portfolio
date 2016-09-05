var React = require('react');
var PropTypes = React.PropTypes;
var FolderList = require('../components/FolderList');

var styles = {
  folder: {
    textIndent: '5%',
    color: 'grey',
    listStyleImage: "url('https://drive.google.com/open?id=0Bw8l1kIRzPMNNDBORGlhWExnNlE')",
    listStylePosition: 'inside'
  }
};


var FolderContainer = React.createClass({

  getInitialState: function () {
      return {
        folders: [
          {name: 'About', contents: ['Me', 'Contact']},
          {name: 'Projects', contents: ['News', 'Map']},
        ]
      }
  },
  componentWillMount: function(){
    this.setState({folders: this.state.folders})
  },
  render: function() {
    return (
      <FolderList folders={this.state.folders}/>
    );
  }

});

module.exports = FolderContainer;
