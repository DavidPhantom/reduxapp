var React = require("react");

class PhoneForm extends React.Component {
  constructor(props) {
    super(props);
    this.phoneInput = React.createRef();

    this.onClick = this.onClick.bind(this);
  }
  onClick() {
    if (this.phoneInput.current.value !== "") {
      var itemText = this.phoneInput.current.value;
      this.phoneInput.current.value = "";
      return this.props.addPhone(itemText);
    }
  }
  render() {
    return <div>
      <input ref={this.phoneInput} />
      <button onClick = {this.onClick}>Добавить</button>
    </div>
  }
};

module.exports = PhoneForm;
