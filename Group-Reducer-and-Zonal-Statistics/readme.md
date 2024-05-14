# Group Reducer and Zonal Statistics
This repository folder contains two tasks related to Group Reducer and Zonal Statistics in Google Earth Engine (GEE) platform along with descriptions and corresponding GEE script links.  
  
***Task 1: Download a dummy data set of [Population Census of Bangladesh 2022](https://data.humdata.org/dataset/cod-ps-bgd/resource/f23d4da2-e473-4960-9d94-37df92c8d044). Reduce any three columns and group division.***  
  
![Model](https://github.com/Israt-Jahan-Shonom/Google_Earth_Engine/blob/main/Group-Reducer-and-Zonal-Statistics/Column_reducer.JPG)  
  
The Group Reducer in Google Earth Engine aggregates data based on specified grouping criteria, such as properties of features. It computes statistics or other aggregate values for each group independently, enabling efficient analysis and summarization of geospatial data.<br>
This tool is valuable for tasks like regional analysis, providing insights into spatial patterns and trends.<br>  
  
<b>GEE Script Link:</b> [Click here](https://code.earthengine.google.com/a23f963e0f4ac87faacf46994969f78b)  
  
***Task 2: Use [MODIS Land Cover Type data set](https://developers.google.com/earth-engine/datasets/catalog/MODIS_061_MCD12Q1#bands) and calculate the sum of each class of the band LC_Type1 for your upazila for the year 2021.***  
  
<p align="center">
  <img src="https://github.com/Israt-Jahan-Shonom/Google_Earth_Engine/blob/main/Group-Reducer-and-Zonal-Statistics/Class_Area.JPG" alt="LULC Map" width="50%">
</p>
To group output of **image.reduceRegions()** you can specify a grouping band that defines groups by integer pixel values. This type of computation is sometimes called "zonal statistics" where the zones are specified as the grouping band and the statistic is determined by the reducer.<br>  
  
<b>GEE Script Link:</b> [Click here](https://code.earthengine.google.com/8b6e707262289fd03a8f7407608efe75)  

***Task 3: [Watch this tutorial](https://www.youtube.com/watch?v=mrGqVM7Ww44), and make a map of by using QGIS.***  
  
<p align="center">
  <img src="https://github.com/Israt-Jahan-Shonom/Google_Earth_Engine/blob/main/Group-Reducer-and-Zonal-Statistics/LULC_Sitakunda_QGIS.png" alt="LULC Map" width="50%">
</p>

A LULC (Land Use/Land Cover) map was produced for Sitakunda Upazila and [Sentinel-2 10m land use/land cover time series of the world](https://www.arcgis.com/home/item.html?id=cfcb7609de5f478eb7666240902d4d3d) dataset for 2022 was used for this purpose.<br>  
  
