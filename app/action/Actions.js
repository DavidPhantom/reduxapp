var addPhone = function (phone) {
  return {
    type: "ADD_PHONE",
    phone
  }
};
var deletePhone = function (phone) {
  return {
    type: "DELETE_PHONE",
    phone
  }
};
var updatePhone = function (oldPhone, newPhone) {
  return {
    type: "UPDATE_PHONE",
    oldPhone, newPhone
  }
};

module.exports = {addPhone, updatePhone, deletePhone};
