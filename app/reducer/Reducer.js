var Map = require("immutable").Map;

var reducer = function(state = Map(), action) {
  switch (action.type) {
    case "SET_STATE":
      return state.merge(action.state);
    case "ADD_PHONE":
      return state.update("phones",
        (phones) => phones.push(action.phone)
      );
    case "UPDATE_PHONE":
      return state.update("phones",
        (phones) => phones.map(
          function(item) {
            if (item === action.oldPhone)
              item = action.newPhone
            return item
          })
      );
    case "DELETE_PHONE":
      return state.update("phones",
        (phones) => phones.filterNot(
          (item) => item === action.phone
        )
      );
  }
  return state;
}
module.exports = reducer;
