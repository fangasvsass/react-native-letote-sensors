

# react-native-letote-sensors

## Getting started

`$ npm install react-native-letote-sensors --save`

### Mostly automatic installation

`$ react-native link react-native-letote-sensors`

### Manual installation


#### iOS

1. In XCode, in the project navigator, right click `Libraries` ➜ `Add Files to [your project's name]`
2. Go to `node_modules` ➜ `react-native-letote-sensors` and add `RNSensors.xcodeproj`
3. In XCode, in the project navigator, select your project. Add `libRNSensors.a` to your project's `Build Phases` ➜ `Link Binary With Libraries`
4. Run your project (`Cmd+R`)<

#### Android

1. Open up `android/app/src/main/java/[...]/MainActivity.java`
  - Add `import com.rnsensors.RNSensorsPackage;` to the imports at the top of the file
  - Add `new RNSensorsPackage()` to the list returned by the `getPackages()` method
2. Append the following lines to `android/settings.gradle`:
  	```
  	include ':react-native-letote-sensors'
  	project(':react-native-letote-sensors').projectDir = new File(rootProject.projectDir, 	'../node_modules/react-native-letote-sensors/android')
  	```
3. Insert the following lines inside the dependencies block in `android/app/build.gradle`:
  	```
      compile project(':react-native-letote-sensors')
  	```

#### Windows
[Read it! :D](https://github.com/ReactWindows/react-native)

1. In Visual Studio add the `RNSensors.sln` in `node_modules/react-native-letote-sensors/windows/RNSensors.sln` folder to their solution, reference from their app.
2. Open up your `MainPage.cs` app
  - Add `using Sensors.RNSensors;` to the usings at the top of the file
  - Add `new RNSensorsPackage()` to the `List<IReactPackage>` returned by the `Packages` method


## Usage
```javascript
import RNSensors from 'react-native-letote-sensors';

// TODO: What to do with the module?
RNSensors;
```
