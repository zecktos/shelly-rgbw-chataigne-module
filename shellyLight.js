
var defaultEndpoint = "light/0?";

function init() {
  script.log("Shelly module init");
}


function moduleParameterChanged(param) {
  script.log(param.name + " parameter changed, new value: " + param.get());
}

function moduleValueChanged(value) {
  script.log(value.name + " value changed, new value: " + value.get());
}

function dataEvent(data, requestURL) {
  if (local.parameters.autoAdd.get() == false) {
    local.parameters.autoAdd.set(true);
    local.values.mode.set(data.mode);
  }
}

function remapColor(col) {
  var colMapped = [];
  for (var i = 0; i < col.length; i++) {
    colMapped[i] = Math.round(col[i] * 255);
  }
  return colMapped
}

function sendCmd(cmd) {
  script.log(" : send command");
  script.log(" : " + local.parameters.baseAddress.get() + cmd);
  local.sendGET(cmd);
}

function setWhite(state, bright, temp) {
  var cmd = state + "&brightness=" + bright + "&temp=" + temp;
  sendCmd(defaultEndpoint + cmd);
}

function setColor(state, col, gain) {
  var reCol = remapColor(col);
  var colorString = "red=" + reCol[0] + "&green=" + reCol[1] + "&blue=" + reCol[2];
  var cmd = state + colorString + "&gain=" + gain;
  sendCmd(defaultEndpoint + cmd);
}


function setMode(mode) {
  local.parameters.autoAdd.set(false);
  var cmd = "settings?mode=" + mode;
  sendCmd(cmd);
}

function setBlink(mode) {
  var cmd = "effect=" + mode;
  sendCmd(defaultEndpoint + cmd);
}

function turnOn() {
  sendCmd(defaultEndpoint + "turn=on");
}

function turnOff() {
  sendCmd(defaultEndpoint + "turn=off");
}

function toggle() {
  sendCmd(defaultEndpoint + "turn=toggle");
}

function getStatus() {
  sendCmd(defaultEndpoint);;
}

function reboot() {
  sendCmd("reboot");
}

function customCmd(cmd) {
  sendCmd(cmd);
}
