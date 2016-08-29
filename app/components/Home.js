var React = require('react');
var PropTypes = React.PropTypes;
var ReactRouter = require('react-router');
var Link = ReactRouter.Link;
var MainContainer = require('../components/MainContainer');

var Home = React.createClass({

  render: function() {
    return (
      <MainContainer>
        <div>hello world</div>
        <button type='button' className='btn btn-lg btn-success'>Get started!</button>
      </MainContainer>
    );
  }

});

module.exports = Home;
