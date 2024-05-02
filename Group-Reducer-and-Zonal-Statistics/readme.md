# Group Reducer and Zonal Statistics
This repository folder contains two tasks related to Group Reducer and Zonal Statistics in Google Earth Engine (GEE) platform along with descriptions and corresponding GEE script links.
## 1. Group Reducer
*<b>Task:<b/> [Download](https://data.humdata.org/dataset/cod-ps-bgd/resource/f23d4da2-e473-4960-9d94-37df92c8d044) a dummy data set of Population Census of Bangladesh 2022. Reduce any three columns and group division.*  
  
![Model](https://github.com/Israt-Jahan-Shonom/Google_Earth_Engine/blob/main/Group-Reducer-and-Zonal-Statistics/Column_reducer.JPG)  
  
The well known and widely used NDVI is a simple, but effective index for quantifying green vegetation. It normalizes green leaf scattering in Near Infra-red wavelengths with chlorophyll absorption in red wavelengths.<br>
The value range of the NDVI is -1 to 1. Negative values of NDVI (values approaching -1) correspond to water. Values close to zero (-0.1 to 0.1) generally correspond to barren areas of rock, sand, or snow. Low, positive values represent shrub and grassland (approximately 0.2 to 0.4), while high values indicate temperate and tropical rainforests (values approaching 1). It is a good proxy for live green vegetation (Source: [Sentinelhub](https://custom-scripts.sentinel-hub.com/custom-scripts/sentinel-2/ndvi/)).<br>
The normalized difference vegetation index, abbreviated NDVI, is defined as<br>
<b>NDVI = (NIR - RED) / (NIR + RED)<b/><br>  
  
<b>GEE Script Link:</b> [Click here](https://code.earthengine.google.com/a23f963e0f4ac87faacf46994969f78b)  
  
## 2. Zonal Statistics
*<b>Task:<b/> Use [MODIS Land Cover Type data set](https://developers.google.com/earth-engine/datasets/catalog/MODIS_061_MCD12Q1#bands) and calculate the sum of each class of the band LC_Type1 for your upazila for the year 2021.*  
  
![Model](https://github.com/Israt-Jahan-Shonom/Google_Earth_Engine/blob/main/Group-Reducer-and-Zonal-Statistics/Class_Area.JPG)  
  
The NDWI is used to monitor changes related to water content in water bodies. As water bodies strongly absorb light in visible to infrared electromagnetic spectrum, NDWI uses green and near infrared bands to highlight water bodies.<br>
The value of NDWI ranges between −1 and +1. Generally, the negative value of NDWI indicates the built-up area and bare land those have no water surfaces, whereas the positive NDWI value shows water and vegetation surface (Source: [Sentinelhub](https://custom-scripts.sentinel-hub.com/custom-scripts/hls/ndwi/)).<br>
The normalized difference water index, abbreviated NDWI, is defined as<br>
<b>NDWI = (GREEN - NIR) / (GREEN + NIR)<b/><br>  
  
<b>GEE Script Link:</b> [Click here](https://code.earthengine.google.com/8b6e707262289fd03a8f7407608efe75)  
