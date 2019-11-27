import { NativeModules } from "react-native";

const { RNSensors } = NativeModules;

const reservedKeys = {
  id: true,
  time: true,
  device_id: true,
  os_version: true,
  os: true,
  screen_height: true,
  is_first_day: true,
  lib: true,
  model: true,
  wifi: true,
  screen_width: true,
  network_type: true,
  manufacturer: true,
  app_version: true,
  lib_version: true,
  ip: true,
  city: true,
  province: true,
  country: true,
  is_login_id: true
};
const formatData = data => {
  const obj = { ...data };
  for (var key in obj) {
    if (reservedKeys[key]) {
      obj[`_${key}`] = obj[key];
      delete obj[key];
    }
  }
  return obj;
};
const formatEventString = event => {
  if (reservedKeys[event]) {
    return "_" + event;
  } else {
    return event;
  }
};
export default class Sensors {
  static trackWithProperties(event, data) {
    RNSensors.trackWithProperties(formatEventString(event), formatData(data));
  }

  static enableReactNativeAutoTrack() {
    RNSensors.enableReactNativeAutoTrack();
  }
  static trackViewScreen(data) {
    RNSensors.trackViewScreen(formatData(data));
  }
  static track(event) {
    RNSensors.track(formatEventString(event));
  }

  static trackTimerStart(event) {
    RNSensors.trackTimerStart(formatEventString(event));
  }
  static trackTimerEnd(event, data) {
    RNSensors.trackTimerEnd(formatEventString(event), formatData(data));
  }
  static setPublicEvent(event, data) {
    RNSensors.setPublicEvent(formatEventString(event), formatData(data));
  }
  static login(id) {
    RNSensors.login(id);
  }
  static logout() {
    RNSensors.logout();
  }
  static profileSet(data) {
    RNSensors.profileSet(formatData(data));
  }
  static profileSetOnce(data) {
    RNSensors.profileSetOnce(formatData(data));
  }
  static profileIncrement(data) {
    RNSensors.profileIncrement(formatData(data));
  }
  static profileAppend(event, data) {
    RNSensors.profileAppend(formatEventString(event), formatData(data));
  }
  static identify(identify) {
    RNSensors.identify(identify);
  }
  static enableAutoTrack() {
    RNSensors.enableAutoTrack();
  }
  static trackInstallation(event) {
    RNSensors.trackInstallation(formatEventString(event));
  }
  static trackInstallationWithProperties(event, data) {
    RNSensors.enableAutoTrack(formatEventString(event), formatData(data));
  }

  static registerDynamicSuperProperties(data) {
    RNSensors.registerDynamicSuperProperties(formatData(data));
  }

  static getDistinctId(callback) {
    callback && RNSensors.getDistinctId(callback);
  }
  static getAnonymousId(callback) {
    callback && RNSensors.getAnonymousId(callback);
  }
}
