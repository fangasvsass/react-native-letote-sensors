using ReactNative.Bridge;
using System;
using System.Collections.Generic;
using Windows.ApplicationModel.Core;
using Windows.UI.Core;

namespace Sensors.RNSensors
{
    /// <summary>
    /// A module that allows JS to share data.
    /// </summary>
    class RNSensorsModule : NativeModuleBase
    {
        /// <summary>
        /// Instantiates the <see cref="RNSensorsModule"/>.
        /// </summary>
        internal RNSensorsModule()
        {

        }

        /// <summary>
        /// The name of the native module.
        /// </summary>
        public override string Name
        {
            get
            {
                return "RNSensors";
            }
        }
    }
}
