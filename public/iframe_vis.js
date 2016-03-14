define(function(require) {
  // we need to load the css ourselves
  require('plugins/kibana-iframe-vis/iframe_vis.less');

  // we also need to load the controller and used by the template
  require('plugins/kibana-iframe-vis/iframe_vis_controller');

  // register the provider with the visTypes registry so that other know it exists
  require('ui/registry/vis_types').register(IframeVisProvider);

  function IframeVisProvider(Private) {
    const TemplateVisType = Private(require('ui/template_vis_type/TemplateVisType'));

    // return the visType object, which kibana will use to display and configure new
    // Vis object of this type.
    return new TemplateVisType({
      name: 'iframe',
      title: 'Iframe widget',
      icon: 'fa-code',
      description: 'Useful for displaying aweb page into an iframe.',
      template: require('plugins/kibana-iframe-vis/iframe_vis.html'),
      params: {
        editor: require('plugins/kibana-iframe-vis/iframe_vis_params.html')
      },
      requiresSearch: false
    });
  }

  // export the provider so that the visType can be required with Private()
  return IframeVisProvider;
});
