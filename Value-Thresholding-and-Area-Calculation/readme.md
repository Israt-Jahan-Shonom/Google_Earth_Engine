# Value Thresholding and Area Calculation
This repository folder contains some simple tasks related to Indices calculation from Satellite Imagery in Google Earth Engine (GEE) platform along with descriptions and corresponding GEE script links.
## 1. NDVI masking and Area Calculation
*<b>Task:<b/> Make a NDVI map of your upazila by using Landsat 9 imagery for 2022. Generate 4 different classes and calculate area for each class by thresholding.*  
  
![Model](https://github.com/Israt-Jahan-Shonom/Google_Earth_Engine/blob/main/Value-Thresholding-and-Area-Calculation/NDVI_masking.JPG)  
  
The well known and widely used NDVI is a simple, but effective index for quantifying green vegetation. It normalizes green leaf scattering in Near Infra-red wavelengths with chlorophyll absorption in red wavelengths.<br>
The value range of the NDVI is -1 to 1. Negative values of NDVI (values approaching -1) correspond to water. Values close to zero (-0.1 to 0.1) generally correspond to barren areas of rock, sand, or snow. Low, positive values represent shrub and grassland (approximately 0.2 to 0.4), while high values indicate temperate and tropical rainforests (values approaching 1). It is a good proxy for live green vegetation (Source: [Sentinelhub](https://custom-scripts.sentinel-hub.com/custom-scripts/sentinel-2/ndvi/)).<br>
The normalized difference vegetation index, abbreviated NDVI, is defined as<br>
<b>NDVI = (NIR - RED) / (NIR + RED)<b/><br>  
  
<b>GEE Script Link:</b> [Click here](https://code.earthengine.google.com/0d2122e3f708e3618051f584e0acc92a)  
  
## 2. NDMI (Normalized Difference Moisture Index)
*<b>Task:<b/> Make a Normalized Difference Moisture Index (NDMI) map of your upazila by using Landsat 9 imagery for 2023.*  
  
![Model](https://github.com/Israt-Jahan-Shonom/Google_Earth_Engine/blob/main/Value-Thresholding-and-Area-Calculation/NDMI.JPG)  
  
The NDWI is used to monitor changes related to water content in water bodies. As water bodies strongly absorb light in visible to infrared electromagnetic spectrum, NDWI uses green and near infrared bands to highlight water bodies.<br>
The value of NDWI ranges between −1 and +1. Generally, the negative value of NDWI indicates the built-up area and bare land those have no water surfaces, whereas the positive NDWI value shows water and vegetation surface (Source: [Sentinelhub](https://custom-scripts.sentinel-hub.com/custom-scripts/hls/ndwi/)).<br>
The normalized difference water index, abbreviated NDWI, is defined as<br>
<b>NDWI = (GREEN - NIR) / (GREEN + NIR)<b/><br>  
  
<b>GEE Script Link:</b> [Click here](https://code.earthengine.google.com/54911c4f8be6cb9143501e514ced2366)  
  
## 3. getThumbURL
*<b>Task:<b/> Generate two PNG image of your NDVI, and NDMI map by using getThumbURL() function.*  
  
![Model](https://github.com/Israt-Jahan-Shonom/Google_Earth_Engine/blob/main/Value-Thresholding-and-Area-Calculation/NDVI.png)  
![Model](https://github.com/Israt-Jahan-Shonom/Google_Earth_Engine/blob/main/Value-Thresholding-and-Area-Calculation/NDMI.png)  
  
Bare Soil Index (BSI) is a numerical indicator that combines blue, red, near infrared and short wave infrared spectral bands to capture soil variations. These spectral bands are used in a normalized manner. The short wave infrared and the red spectral bands are used to quantify the soil mineral composition, while the blue and the near infrared spectral bands are used to enhance the presence of vegetation.<br>
BSI can be used in numerous remote sensing applications, like soil mapping, crop identification (in combination with NDVI) etc (Source: [GEO University](https://www.geo.university/pages/blog?p=spectral-indices-with-multispectral-satellite-data#:~:text=Bare%20Soil%20Index%20(BSI)%20is,bands%20to%20capture%20soil%20variations.)).<br>
The bare soil index, abbreviated BSI, is defined as<br>
<b>BSI = ((SWIR + RED)−(NIR + BLUE)) / ((SWIR + RED)+(NIR + BLUE))<b/><br>  
  
<b>GEE Script Links:</b> [NDVI](https://code.earthengine.google.com/0d2122e3f708e3618051f584e0acc92a) [NDMI](https://code.earthengine.google.com/54911c4f8be6cb9143501e514ced2366)

