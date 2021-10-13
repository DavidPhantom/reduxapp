var PhoneItem = require("./PhoneItem.js");
var React = require("react");

class PhonesList extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return <div>
      {this.props.phones.map(item =>
        <PhoneItem
          item={item}
          updatePhone={this.props.updatePhone}
          deletePhone={this.props.deletePhone}/>
      )}
    </div>
  }
};

module.exports = PhonesList;
