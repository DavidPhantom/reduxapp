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
        <b>{this.props.item}</b><br />
        <input
          value={this.state.phoneInputUpdate}
          onChange={this.onPhoneInputUpdate}
          style={{display: this.state.displayInputUpdate}} />
        <button
          style={{display: this.state.displayInputUpdate}}
          onClick={this.onUpdatePhone}
        >Обновить
        </button>
        <button
          style={{display: this.state.displayInputUpdate}}
          onClick={this.cancelUpdate}
        >Отмена</button>
        <button
          style={{display: this.state.displayUpdateDeleteBtns}}
          onClick={this.clickUpdate}
        >Редактировать
        </button>
        <button
          style={{display: this.state.displayUpdateDeleteBtns}}
          onClick={() => this.props.deletePhone(this.props.item)}
        >Удалить
        </button>
      </p>
    </div>
  }
};

module.exports = PhoneItem;
