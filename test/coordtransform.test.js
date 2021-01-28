require("..")

// 坐标测试
var lon = 114.363089,
	lat = 30.517411;

// BD09toGCJ02: 百度坐标系->火星坐标系 
console.log("BD09toGCJ02:", BD09toGCJ02(new Point(lon, lat)));
// GCJ02toBD09: 火星坐标系->百度坐标系  
console.log("GCJ02toBD09:", GCJ02toBD09(new Point(lon, lat)));
// WGS84toGCJ02: 火星坐标系->WGS84坐标系
console.log("WGS84toGCJ02:", WGS84toGCJ02(new Point(lon, lat)));
// GCJ02toWGS84 火星坐标系->WGS84坐标系
console.log("GCJ02toWGS84:", GCJ02toWGS84(new Point(lon, lat)));
// BD09toWGS84 百度坐标系->WGS84坐标系
console.log("BD09toWGS84:", BD09toWGS84(new Point(lon, lat)));
// WGS84toBD09 WGS84坐标系->百度坐标系
console.log("WGS84toBD09:", WGS84toBD09(new Point(lon, lat)));
// BD09toBD09MC 百度坐标系-> 百度墨卡托坐标系
console.log("BD09toBD09MC:", BD09toBD09MC(new Point(lon, lat)));
// DB09MctoBD09 百度墨卡托坐标系 - > 百度坐标系
console.log("DB09MctoBD09:", DB09MctoBD09(new Point(12730979.361410993, 3548336.555792139)));
// ToMercator 任意坐标系-> 墨卡托坐标系
console.log("ToMercator:", ToMercator(new Point(lon, lat)));
// FromMercator 墨卡托坐标系-> 任意坐标系
console.log("FromMercator:", FromMercator(new Point(12730840.83125368, 3569413.5156310988)));

return