var React = require("react");

class PhoneItem extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      phoneInputUpdate: this.props.item,
      displayInputUpdate: 'none',
      displayUpdateDeleteBtns: 'inline-block'};

    this.clickUpdate = this.clickUpdate.bind(this);
    this.onUpdatePhone = this.onUpdatePhone.bind(this);
    this.cancelUpdate = this.cancelUpdate.bind(this);
    this.onPhoneInputUpdate = this.onPhoneInputUpdate.bind(this);
  }
  cancelUpdate() {
    this.setState({
      displayInputUpdate: 'none',
      displayUpdateDeleteBtns: 'inline-block'
    });
  }
  onUpdatePhone() {
    if (this.state.phoneInputUpdate !== "") {

      var itemText = this.state.phoneInputUpdate;
      this.setState({
        displayInputUpdate: 'none',
        displayUpdateDeleteBtns: 'inline-block'
      });
      return this.props.updatePhone(this.props.item, itemText);
    }
    this.setState({
      displayInputUpdate: 'none',
      displayUpdateDeleteBtns: 'inline-block'
    });
  }
  clickUpdate() {
    this.setState({
      displayInputUpdate: 'inline-block',
      displayUpdateDeleteBtns: 'none'
    });
  }
  onPhoneInputUpdate(e) {
    var val = e.target.value;
    this.setState({phoneInputUpdate: val});
  }
  render() {

    return <div>
      <p>
        <b
          style={{
            fontSize: 16,
          }}>{this.props.item}</b><br />
        <input
          value={this.state.phoneInputUpdate}
          onChange={this.onPhoneInputUpdate}
          style={{
            display: this.state.displayInputUpdate,
            padding: (20, 10),
            boxSizing: 'border-box',
            fontSize: 16,
          }}/>
        <button
          onClick={this.onUpdatePhone}
          style={{
            padding: 15,
            textAlign: 'center',
            textDecoration: 'none',
            display: this.state.displayInputUpdate,
            margin: (10, 10),
            fontSize: 16
          }}
        >Обновить
        </button>
        <button
          onClick={this.cancelUpdate}
          style={{
            padding: 15,
            textAlign: 'center',
            textDecoration: 'none',
            display: this.state.displayInputUpdate,
            margin: (10, 10),
            fontSize: 16
          }}
        >Отмена</button>
        <button
          onClick={this.clickUpdate}
          style={{
            padding: 15,
            textAlign: 'center',
            textDecoration: 'none',
            display: this.state.displayUpdateDeleteBtns,
            margin: (10, 10),
            fontSize: 16
          }}
        >Редактировать
        </button>
        <button
          onClick={() => this.props.deletePhone(this.props.item)}
          style={{
            padding: 15,
            textAlign: 'center',
            textDecoration: 'none',
            display: this.state.displayUpdateDeleteBtns,
            margin: (10, 10),
            fontSize: 16
          }}
        >Удалить
        </button>
      </p>
    </div>
  }
};

module.exports = PhoneItem;
