import { NativeModules } from 'react-native'

const { RNSensors } = NativeModules

const reservedKeys = {
  time: true,
  _track_id: true,
  event: true,
  _flush_time: true,
  distinct_id: true,
  properties: true,
  type: true,
  lib: true,
  project: true,
  extractor: true,
  recv_time: true,
  ngx_ip: true,
  process_time: true,
  map_id: true,
  user_id: true,
  project_id: true,
  ver: true
}
const formatData = data => {
  const obj = { ...data }
  for (var key in obj) {
    if (reservedKeys[key]) {
      obj[`_${key}`] = obj[key]
      delete obj[key]
    }
  }
  return obj
}
const formatEventString = event => {
  if (reservedKeys[event]) {
    return '_' + event
  } else {
    return event
  }
}
export default class Sensors {
  static trackWithProperties(event, data) {
    RNSensors.trackWithProperties(formatEventString(event), formatData(data))
  }

  static enableReactNativeAutoTrack() {
    RNSensors.enableReactNativeAutoTrack()
  }
  static trackViewScreen(data) {
    RNSensors.trackViewScreen(formatData(data))
  }
  static track(event) {
    RNSensors.track(formatEventString(event))
  }

  static trackTimerStart(event) {
    RNSensors.trackTimerStart(formatEventString(event))
  }
  static trackTimerEnd(event, data) {
    RNSensors.trackTimerEnd(formatEventString(event), formatData(data))
  }
  static setPublicEvent(event, data) {
    RNSensors.setPublicEvent(formatEventString(event), formatData(data))
  }
  static login(id) {
    RNSensors.login(id)
  }
  static profileSet(data) {
    RNSensors.profileSet(formatData(data))
  }
  static profileSetOnce(data) {
    RNSensors.profileSetOnce(formatData(data))
  }
  static profileIncrement(data) {
    RNSensors.profileIncrement(formatData(data))
  }
  static profileAppend(event, data) {
    RNSensors.profileAppend(formatEventString(event), formatData(data))
  }
  static identify(identify) {
    RNSensors.identify(identify)
  }
  static enableAutoTrack() {
    RNSensors.enableAutoTrack()
  }
}
