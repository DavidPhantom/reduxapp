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
      <input
        ref={this.phoneInput}
        style={{
          padding: (20, 10),
          boxSizing: 'border-box',
          fontSize: 16,
        }}
      />
      <button
        onClick = {this.onClick}
        style={{
          padding: 15,
          textAlign: 'center',
          textDecoration: 'none',
          display: 'inline-block',
          margin: (10, 10),
          fontSize: 16
        }}
      >Добавить</button>
    </div>
  }
};

module.exports = PhoneForm;
