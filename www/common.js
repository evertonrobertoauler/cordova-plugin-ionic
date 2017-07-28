var exec = require('cordova/exec');

var IonicDeploy = {
  init: function(app_id, server_host, success, failure) {
    exec(success, failure, 'IonicDeploy', 'initialize', [app_id, server_host]);
  },
  check: function(app_id, channel_tag, success, failure) {
    exec(success, failure, 'IonicDeploy', 'check', [app_id, channel_tag]);
  },
  download: function(app_id, success, failure) {
  	exec(success, failure, 'IonicDeploy', 'download', [app_id]);
  },
  extract: function(app_id, success,failure) {
    exec(success, failure, 'IonicDeploy', 'extract', [app_id]);
  },
  redirect: function(app_id, success, failure) {
  	exec(success, failure, 'IonicDeploy', 'redirect', [app_id]);
  },
  info: function(app_id, success, failure) {
    exec(success, failure, 'IonicDeploy', 'info', [app_id]);
  },
  getVersions: function(app_id, success, failure) {
    exec(success, failure, 'IonicDeploy', 'getVersions', [app_id]);
  },
  deleteVersion: function(app_id, version, success, failure) {
    exec(success, failure, 'IonicDeploy', 'deleteVersion', [app_id, version]);
  },
  parseUpdate: function(app_id, jsonResponse, success, failure) {
    if (typeof jsonReponse !== 'string') {
      jsonResponse = JSON.stringify(jsonResponse);
    }
    exec(success, failure, 'IonicDeploy', 'parseUpdate', [app_id, jsonResponse]);
  },
};

var IonicCordova = {
  enableCrashLogging: function(success, fail) {
    exec(success, fail, "IonicCordovaCommon", "enableCrashLogging");
  },
  checkForPendingCrash: function(success, fail) {
    exec(success, fail, "IonicCordovaCommon", "checkForPendingCrash");
  },
  loadPendingCrash: function(success, fail) {
    exec(success, fail, "IonicCordovaCommon", "loadPendingCrash");
  },
  forceCrash: function(success, fail) {
    exec(success, fail, "IonicCordovaCommon", "forceCrash");
  },
  getAppInfo: function(success, fail) {
    exec(success, fail, "IonicCordovaCommon", "getAppInfo");
  },
  deploy: IonicDeploy
};

module.exports = IonicCordova;