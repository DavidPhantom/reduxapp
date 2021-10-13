var PhoneForm = require( "../components/PhoneForm.js");
var PhonesList = require("../components/PhonesList.js");
var React = require("react");
var connect = require("react-redux").connect;
var actions = require("../action/Actions.js");

class AppView extends React.Component {

  render() {
    return <div>
      <PhoneForm addPhone={this.props.addPhone}/>
      <PhonesList {...this.props} />
    </div>
  }
};

function mapStateToProps(state) {
  return {
    phones: state.get("phones")
  };
}

module.exports = connect(mapStateToProps, actions)(AppView);
