import { NativeModules } from 'react-native'

const { RNSensors } = NativeModules

const formatData = data => {
  if (data['time']) {
    data._time = data['time']
    data.time = undefined
    delete data.time
  }
  return data
}
const formatEventString = event => {
  if (event == 'time') return '_time'
  else return event
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
