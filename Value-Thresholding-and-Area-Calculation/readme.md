# Value Thresholding and Area Calculation
This repository folder contains some tasks of index masking and area calculation from Satellite Imagery in Google Earth Engine (GEE) platform along with descriptions and corresponding GEE script links.

## 1. NDVI masking and Area Calculation
*<b>Task:<b/> Make a NDVI map of your upazila by using Landsat 9 imagery for 2022. Generate 4 different classes and calculate area for each class by thresholding.*  
  
![Model](https://github.com/Israt-Jahan-Shonom/Google_Earth_Engine/blob/main/Value-Thresholding-and-Area-Calculation/NDVI_masking.JPG)  
  
Thresholding is the most widely used change detection technique for identifying the changes in remote sensing images by classifying different land covers.<br>
The value range of the NDVI is -1 to 1. Negative values of NDVI (values approaching -1) correspond to water. Values close to zero (-0.1 to 0.1) generally correspond to barren areas of rock, sand, or snow. Low, positive values represent shrub and grassland (approximately 0.2 to 0.4), while high values indicate temperate and tropical rainforests (values approaching 1).<br>  
Thresholding of NDVI for Teknaf Upazila was done in four classes and area for those classes was calculated using 'reduceRegion'.
  
<b>GEE Script Link:</b> [Click here](https://code.earthengine.google.com/0d2122e3f708e3618051f584e0acc92a)  
  
## 2. NDMI (Normalized Difference Moisture Index)
*<b>Task:<b/> Make a Normalized Difference Moisture Index (NDMI) map of your upazila by using Landsat 9 imagery for 2023.*  
  
![Model](https://github.com/Israt-Jahan-Shonom/Google_Earth_Engine/blob/main/Value-Thresholding-and-Area-Calculation/NDMI.JPG)  
  
NDMI is used to determine vegetation water content. NDMI is computed using the near infrared (NIR) and the short wave infrared (SWIR) reflectances.<br>
The interpretation of the absolute value of the NDMI makes possible to immediately recognize the areas of the field with water stress problems. NDMI is easy to interpret: its values vary between -1 and 1, and each value corresponds to a different agronomic situation, independently of the crop (Source: [AGRICOLUS](https://www.agricolus.com/en/vegetation-indices-ndvi-ndmi/)).<br>
The normalized difference moisture index, abbreviated NDMI, is defined as<br>
<b>NDMI = (NIR - SWIR) / (NIR + SWIR)<b/><br>  
  
<b>GEE Script Link:</b> [Click here](https://code.earthengine.google.com/54911c4f8be6cb9143501e514ced2366)  
  
## 3. getThumbURL
*<b>Task:<b/> Generate two PNG image of your NDVI, and NDMI map by using getThumbURL() function.*  

Generated NDVI image from the 1st task is shown below:
  
![Model](https://github.com/Israt-Jahan-Shonom/Google_Earth_Engine/blob/main/Value-Thresholding-and-Area-Calculation/NDVI.png)    
  
Generated NDMI png image from the 2nd task is shown below:  
  
![Model](https://github.com/Israt-Jahan-Shonom/Google_Earth_Engine/blob/main/Value-Thresholding-and-Area-Calculation/NDMI.png)    
  
N.B. Codes for generating URL of these images are added in the GEE Scripts of the previous two tasks. 

