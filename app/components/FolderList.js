var React = require('react');
var PropTypes = React.PropTypes;

var FolderList = React.createClass({

  render: function() {
    console.log(this.props)
    return (
      <ul>
      {  
        this.props.folders.map(function(folder) {
          return <li key={folder}>{folder}</li>
        })
      }
      </ul>
    );
  }

});

module.exports = FolderList;
