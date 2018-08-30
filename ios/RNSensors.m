
#import "RNSensors.h"
#import "SensorsAnalyticsSDK.h"
@implementation RNSensors

- (dispatch_queue_t)methodQueue
{
    return dispatch_get_main_queue();
}
RCT_EXPORT_MODULE()

RCT_EXPORT_METHOD(track:(NSString *)eventId) {
    [[SensorsAnalyticsSDK sharedInstance] track:eventId];
}

RCT_EXPORT_METHOD(trackWithProperties:(NSString *)eventId properties:(NSDictionary *)properties) {
    [[SensorsAnalyticsSDK sharedInstance] track:eventId withProperties:properties];
}

RCT_EXPORT_METHOD(enableAutoTrack) {
    // 打开自动采集, 并指定追踪哪些 AutoTrack 事件
    [[SensorsAnalyticsSDK sharedInstance] enableAutoTrack:SensorsAnalyticsEventTypeAppStart |
     SensorsAnalyticsEventTypeAppEnd |
     SensorsAnalyticsEventTypeAppViewScreen |
     SensorsAnalyticsEventTypeAppClick];
}
//将该属性设置为事件公共属性。例如将平台类型设置为事件的公共属性 所有的事件都包含该事件
RCT_EXPORT_METHOD(setPublicEvent:(NSString *)eventId value:(NSString *)value) {
    [[SensorsAnalyticsSDK sharedInstance] registerSuperProperties:@{eventId:value}];
}
//将神策平台分配的id与userId进行关联
RCT_EXPORT_METHOD(login:(NSString *)userId) {
    [[SensorsAnalyticsSDK sharedInstance] login:userId];
}

RCT_EXPORT_METHOD(trackTimerStart:(NSString *)eventId) {
    [[SensorsAnalyticsSDK sharedInstance] trackTimerStart:eventId];
}
RCT_EXPORT_METHOD(trackTimerEnd:(NSString *)eventId properties:(NSDictionary *)properties) {
    [[SensorsAnalyticsSDK sharedInstance] trackTimerEnd:eventId withProperties:properties];
}
//记录用户设定的属性
RCT_EXPORT_METHOD(profileSet:(NSString *)eventId value:(NSString *)value) {
    [[[SensorsAnalyticsSDK sharedInstance] people] set:eventId to:value];
}
//记录初次设定的属性
RCT_EXPORT_METHOD(profileSetOnce:(NSString *)eventId value:(NSString *)value) {
    [[[SensorsAnalyticsSDK sharedInstance] people] setOnce:eventId to:value];
}
//对属性值进行累加。常用于记录用户付费次数、付费额度、积分等属性。例如：
RCT_EXPORT_METHOD(profileIncrement:(NSDictionary *)properties) {
    [[[SensorsAnalyticsSDK sharedInstance] people] increment:properties];
}
//记录列表型属性
RCT_EXPORT_METHOD(profileAppend:(NSString *)eventId array:(NSArray *)array) {
    [[[SensorsAnalyticsSDK sharedInstance] people] append:eventId by:[NSSet setWithArray:array]];
}
// 替换默认匿名id
RCT_EXPORT_METHOD(identify:(NSString *)identifyId) {
    [[SensorsAnalyticsSDK sharedInstance] identify:identifyId];
}

@end
  
