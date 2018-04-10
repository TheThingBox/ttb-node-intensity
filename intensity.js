module.exports = function(RED) {
  "use strict";

  function main(config) {
    RED.nodes.createNode(this, config);
    this.config = config;
    var node = this;

    this.on("input", function(msg) {
      var property = node.config.property;
      if(typeof property != "undefined" && property != "") {
        msg[property] = node.config.val;
      } else {
        msg.intensity = node.config.val;
      }
      node.send(msg);
    });
  }
  RED.nodes.registerType("intensity", main);
}
