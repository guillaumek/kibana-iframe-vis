module.exports = function(kibana) {

  return new kibana.Plugin({

    uiExports: {
      visTypes: [
        'plugins/kibana-iframe-vis/iframe_vis'
      ]
    }

  });

};
