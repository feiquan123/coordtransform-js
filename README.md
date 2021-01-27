## coordtransform

coord transform

This module provides coords transform function.

```txt
支持坐标类型:
	WGS84           WGS84坐标系[大地坐标系]
	GCJ02           火星坐标系
	BD09            百度坐标系
	BD09MC          百度墨卡托坐标系
	Mercator        普通墨卡托坐标系坐标系
```

## example

### js

[coordtransform.js](./example/coordtransform.js)

### shell

```sh
# 帮助
node bin/coordtransform.js -h

# 百度墨卡托坐标系 -> 百度坐标系
node bin/coordtransform.js  -t "DB09MctoBD09"  "12732754.092201,3549486.938401;12732775.608553,3549592.609005;"

# 通过管道,百度墨卡托坐标系 -> 百度坐标系
echo "12732754.092201,3549486.938401;12732775.608553,3549592.609005;" | node bin/coordtransform.js  -t "DB09MctoBD09"
```

输出

```txt
114.37903156236513,30.526358615840344;114.3792248449407,30.527180422259296;
```

## methods

```js
D09toGCJ02      百度坐标系 -> 火星坐标系
GCJ02toBD09     火星坐标系 -> 百度坐标系        (默认)
WGS84toGCJ02    WGS84坐标系 -> 火星坐标系
GCJ02toWGS84    火星坐标系 -> WGS84坐标系
BD09toWGS84     百度坐标系 -> WGS84坐标系
WGS84toBD09     WGS84坐标系 -> 百度坐标系
BD09toBD09MC    百度坐标系 -> 百度墨卡托坐标系
DB09MctoBD09    百度墨卡托坐标系 -> 百度坐标系
ToMercator      任意坐标系 -> 墨卡托坐标系
FromMercator    墨卡托坐标系 -> 任意坐标系
```

## install

With [npm](https://npmjs.org) do:

```
npm install coordtransform
```

## license

[MIT](https://choosealicense.com/licenses/mit/#)
