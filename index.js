module.exports = function (kibana) {

  return new kibana.Plugin({

    uiExports: {
      visTypes: [
        'plugins/iframe_vis/iframe_vis'
      ]
    }

  });

};
