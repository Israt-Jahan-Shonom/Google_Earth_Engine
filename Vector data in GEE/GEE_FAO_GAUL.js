var dataset = ee.FeatureCollection("FAO/GAUL/2015/level2")

var bgd = dataset.filter(ee.Filter.eq("ADM0_NAME", "Bangladesh"))

print(bgd)
Map.centerObject(bgd)

var styleParams = {
  fillColor: 'red',
  color: '00909F',
  width: 1.0
};
function fill(col){
    styleParams.fillColor = col
  }

Map.addLayer(bgd.style(styleParams), {}, "Bangladesh")

var ctg_div = bgd.filter(ee.Filter.eq("ADM1_NAME", "Chittagong"))

fill('yellow')

Map.addLayer(ctg_div.style(styleParams), {}, "Chittagong division")

var ctg = ctg_div.filter(ee.Filter.eq("ADM2_NAME", "Chittagong"))

fill('green')

Map.addLayer(ctg.style(styleParams), {}, "Chittagong district")

