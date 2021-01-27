require("..");

var tip = `坐标转换
node ./bin/coordtransform.js -t [type] [coords split by semicolon]

支持坐标类型:
	WGS84		WGS84坐标系[大地坐标系]
	GCJ02		火星坐标系
	BD09		百度坐标系
	BD09MC		百度墨卡托坐标系
	Mercator 	普通墨卡托坐标系坐标系

Args:
	-h 			help
	-t 			transform type:
		D09toGCJ02	百度坐标系 -> 火星坐标系
		GCJ02toBD09 	火星坐标系 -> 百度坐标系 	(默认)
		WGS84toGCJ02 	WGS84坐标系 -> 火星坐标系
		GCJ02toWGS84 	火星坐标系 -> WGS84坐标系
		BD09toWGS84 	百度坐标系 -> WGS84坐标系
		WGS84toBD09 	WGS84坐标系 -> 百度坐标系
		BD09toBD09MC 	百度坐标系 -> 百度墨卡托坐标系
		DB09MctoBD09 	百度墨卡托坐标系 -> 百度坐标系
		ToMercator	任意坐标系 -> 墨卡托坐标系
		FromMercator 	墨卡托坐标系 -> 任意坐标系

examples:
	node bin/coordtransform.js  -t "DB09MctoBD09"  "12732754.092201,3549486.938401;12732775.608553,3549592.609005;"
`;

var argv = require("minimist")(process.argv.slice(2));
if (argv.h) {
  console.log(tip);
  return;
}

var func = null;
switch (argv.t) {
  case "D09toGCJ02":
    func = D09toGCJ02;
    break;
  case "GCJ02toBD09":
    func = GCJ02toBD09;
    break;
  case "WGS84toGCJ02":
    func = WGS84toGCJ02;
    break;
  case "GCJ02toWGS84":
    func = GCJ02toWGS84;
    break;
  case "BD09toWGS84":
    func = BD09toWGS84;
    break;
  case "WGS84toBD09":
    func = WGS84toBD09;
    break;
  case "BD09toBD09MC":
    func = BD09toBD09MC;
    break;
  case "DB09MctoBD09":
    func = DB09MctoBD09;
    break;
  case "ToMercator":
    func = ToMercator;
    break;
  case "FromMercator":
    func = FromMercator;
    break;
  default:
    func = GCJ02toBD09;
}

function searchByPoint(c) {
  var d = c.split(",");
  if (
    d[0] &&
    d[0].split(".")[0].length > 5 &&
    d[1] &&
    d[1].split(".")[0].length > 5
  ) {
    var f = func(new Point(d[0], d[1]));
    d = [f.lng, f.lat];
  } else {
    d = [];
  }
  return d;
}

function searchByPoints(ss) {
  d = [];
  for (var l = ss.length, i = 0; i < l; i++) {
    d.push(searchByPoint(ss[i]).join(","));
  }
  return d;
}

var arguments = argv._;
if (arguments.length == 0) {
  // Std in
  process.stdin.resume();
  process.stdin.setEncoding("utf-8");
  arr = [];
  process.stdin.on("data", function (data) {
    var ss = data.slice(0, -1);
    if (ss == "end") {
      process.stdin.emit("end");
    } else {
      t = searchByPoints(ss.split(";")).join(";");
	  arr.push(t);
    }
  });

  process.stdin.on("end", function () {
    console.log(arr.join(";"));
  });
  return;
} else {
  ss = arguments[0].split(";");
  console.log(searchByPoints(ss).join(";"));
}
