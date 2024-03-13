var roi = /* color: #d63000 */ee.Geometry.Point([91.79648636051375, 22.630407242153385]),
    Hathazari = 
    /* color: #02ff04 */
    /* displayProperties: [
      {
        "type": "rectangle"
      }
    ] */
    ee.Geometry.Polygon(
        [[[91.79394400043853, 22.515266824179278],
          [91.79394400043853, 22.494333085735715],
          [91.82690298481353, 22.494333085735715],
          [91.82690298481353, 22.515266824179278]]], null, false),
    Zobra = /* color: #1173d8 */ee.Geometry.Polygon(
        [[[91.80759820370413, 22.48285066366777],
          [91.79094705013968, 22.480312814999444],
          [91.78339394955374, 22.470478212072205],
          [91.79506692318655, 22.46445020706789],
          [91.81515130429007, 22.46889192039421]]]);

//To transfer them to another script, paste this code up to this line into the GEE code editor and click "convert" in the suggestion tooltip.

Map.centerObject(roi, 10)