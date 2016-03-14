define(function(require) {

  const module = require('ui/modules').get('kibana/kibana-iframe-vis', ['kibana']);

  module.controller('EcIframeVisController', function($scope, $element, $timeout, $sce) {

    $scope.currentIframeUrl = "";
    $scope.refreshInterval = 0;

    var refreshIframe = function() {
      $timeout.cancel($scope.refreshIframeTimeout);
      refreshIframeSrc();
      execRefreshIframeTimeout();
    }

    var refreshIframeSrc = function() {
      var $iframe = $element.find("iframe");
      $iframe.prop('scr', $iframe.prop('src'));
    }
    var execRefreshIframeTimeout = function() {
      if ($scope.refreshInterval == 0) {
        $timeout.cancel($scope.refreshIframeTimeout)
      } else {
        $scope.refreshIframeTimeout = $timeout(refreshIframe, $scope.refreshInterval);
      }
    }

    $scope.trustSrc = function(src) {
      return $sce.trustAsResourceUrl(src);
    }

    $scope.$watch('vis.params.iframeUrl', function(data) {
      $scope.currentIframeUrl = data;
    });

    $scope.$watch('vis.params.refreshInterval', function(interval) {
      $scope.refreshInterval = parseInt(interval);
      execRefreshIframeTimeout();
    });

  });
});
