
package com.rnsensors;

import com.facebook.react.bridge.ReactApplicationContext;
import com.facebook.react.bridge.ReactContextBaseJavaModule;
import com.facebook.react.bridge.ReactMethod;
import com.facebook.react.bridge.Callback;
import com.facebook.react.bridge.ReadableArray;
import com.facebook.react.bridge.ReadableMap;
import com.sensorsdata.analytics.android.sdk.SensorsDataAPI;

import org.json.JSONException;
import org.json.JSONObject;

import java.util.ArrayList;
import java.util.HashMap;
import java.util.HashSet;
import java.util.List;
import java.util.Map;
import java.util.Set;

public class RNSensorsModule extends ReactContextBaseJavaModule {

    private final ReactApplicationContext reactContext;

    public RNSensorsModule(ReactApplicationContext reactContext) {
        super(reactContext);
        this.reactContext = reactContext;
    }

    @ReactMethod
    public void trackWithProperties(String event, ReadableMap map) {
        try {
            JSONObject properties = toJsonObject(map);
            SensorsDataAPI.sharedInstance().track(event, properties);
        } catch (JSONException e) {
            e.printStackTrace();
        }

    }

    @ReactMethod
    public void enableReactNativeAutoTrack() {
        SensorsDataAPI.sharedInstance().enableReactNativeAutoTrack();
    }
    @ReactMethod
    public void trackViewScreen( ReadableMap map){
        try {
            JSONObject properties = toJsonObject(map);
            SensorsDataAPI.sharedInstance().trackViewScreen(null, properties);
        } catch (Exception e) {
            e.printStackTrace();
        }
    }
    @ReactMethod
    public void trackInstallation(String eventId){
        SensorsDataAPI.sharedInstance().trackInstallation(eventId);
    }

    @ReactMethod
    public void trackInstallationWithProperties(String eventId,ReadableMap map){
        JSONObject properties ;
        try {
            properties = toJsonObject(map);
            SensorsDataAPI.sharedInstance().trackInstallation(eventId,properties);
        } catch (JSONException e) {
            e.printStackTrace();
        }

    }

    @ReactMethod
    public void track(String event) {
        SensorsDataAPI.sharedInstance().track(event);
    }


    @ReactMethod
    public void trackTimerStart(String event) {
        SensorsDataAPI.sharedInstance().trackTimerStart(event);
    }


    @ReactMethod
    public void trackTimerEnd(String event, ReadableMap map) {
        // 离开商品页
        try {
            // 在属性中记录商品 ID
            JSONObject properties = toJsonObject(map);
            // 调用 track，记录 ViewProduct 事件，并在属性 event_duration 中记录用户浏览商品的时间
            SensorsDataAPI.sharedInstance().trackTimerEnd(event, properties);
        } catch (JSONException e) {
            e.printStackTrace();
        }
    }

    @ReactMethod
    public void setPublicEvent(String event, String value) {
        try {
            JSONObject properties = new JSONObject();
            properties.put(event, value);
            SensorsDataAPI.sharedInstance().registerSuperProperties(properties);
        } catch (JSONException e) {
            e.printStackTrace();
        }
    }
    @ReactMethod
    public void unsetPublicEvent(String event) {
        SensorsDataAPI.sharedInstance().unregisterSuperProperty(event);

    }

    @ReactMethod
    public void login(String userId) {
        SensorsDataAPI.sharedInstance().login(userId);
    }
    @ReactMethod
    public void logout() {
        SensorsDataAPI.sharedInstance().logout();
    }
    @ReactMethod
    public void profileSet(ReadableMap map) {
        try {
            JSONObject properties = toJsonObject(map);
            SensorsDataAPI.sharedInstance().profileSet(properties);
        } catch (JSONException e) {
            e.printStackTrace();
        }
    }

    @ReactMethod
    public void profileSetOnce(ReadableMap map) {
        try {
            JSONObject properties = toJsonObject(map);
            SensorsDataAPI.sharedInstance().profileSetOnce(properties);
        } catch (JSONException e) {
            e.printStackTrace();
        }
    }

    @ReactMethod
    public void profileIncrement(ReadableMap map) {
        Map<String, Number> properties = toNumberHashMap(map);
        SensorsDataAPI.sharedInstance().profileIncrement(properties);
    }

    //数组
    @ReactMethod
    public void profileAppend(String event, ReadableArray array) {
        Set<String> sets = new HashSet<String>();
        for (Object value : array.toArrayList()) {
            sets.add((String) value);
        }

        SensorsDataAPI.sharedInstance().profileAppend(event, sets);
    }

    @ReactMethod
    public void identify(String identify) {
        SensorsDataAPI.sharedInstance().identify(identify);
    }

    @ReactMethod
    public void enableAutoTrack() {
        try {
            // 打开自动采集, 并指定追踪哪些 AutoTrack 事件
            List<SensorsDataAPI.AutoTrackEventType> eventTypeList = new ArrayList<>();
            // $AppStart
            eventTypeList.add(SensorsDataAPI.AutoTrackEventType.APP_START);
            // $AppEnd
            eventTypeList.add(SensorsDataAPI.AutoTrackEventType.APP_END);
            // $AppClick
            eventTypeList.add(SensorsDataAPI.AutoTrackEventType.APP_CLICK);
            SensorsDataAPI.sharedInstance().enableAutoTrack(eventTypeList);
        } catch (Exception e) {
            e.printStackTrace();
        }

    }

    private JSONObject toJsonObject(ReadableMap source) throws JSONException {
        if (source == null) {
            return null;
        }
        JSONObject result = new JSONObject();
        for (Map.Entry entry : source.toHashMap().entrySet()) {
            result.put((String) entry.getKey(), entry.getValue());
        }
        return result;
    }

    private HashMap<String, Number> toNumberHashMap(ReadableMap source) {
        if (source == null) {
            return null;
        }
        HashMap<String, Number> result = new HashMap<>();
        for (Map.Entry<String, Object> entry : source.toHashMap().entrySet()) {
            if (entry.getValue() instanceof Number) {
                result.put(entry.getKey(), (Number) entry.getValue());
            }
        }
        return result;
    }

    @Override
    public String getName() {
        return "RNSensors";
    }
}