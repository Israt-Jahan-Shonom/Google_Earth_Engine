# Supervised and Unsupervised Classification
This repository folder contains two tasks of supervised and unsupervised land use classification in Google Earth Engine (GEE) platform along with descriptions and corresponding GEE script links.  
  
## Table of Differences

| Aspect                    | Supervised Classification                                                                                           | Unsupervised Classification                                                                                        |
|---------------------------|---------------------------------------------------------------------------------------------------------------------|--------------------------------------------------------------------------------------------------------------------|
| **Definition**            | The model is trained on a labeled dataset, which means that each training sample is paired with an output label.    | The model is trained on an unlabeled dataset and attempts to find inherent patterns or groupings in the data.      |
| **Objective**             | To predict the output for new data based on the learned relationships from the training data.                       | To identify hidden patterns or intrinsic structures in the input data.                                             |
| **Data Requirements**     | Requires a labeled dataset (input-output pairs).                                                                   | Requires only an unlabeled dataset (input data only).                                                              |
| **Examples of Algorithms**| - Logistic Regression<br>- Decision Trees<br>- Support Vector Machines (SVM)<br>- Neural Networks                   | - K-Means Clustering<br>- Hierarchical Clustering<br>- Principal Component Analysis (PCA)<br>- Autoencoders        |
| **Output**                | Predicts discrete labels for new data points.                                                                       | Groups data into clusters or identifies structure without explicitly predicting discrete labels.                   |
| **Evaluation Metrics**    | Accuracy, Precision, Recall, F1 Score, ROC-AUC, etc.                                                                | Silhouette Score, Davies-Bouldin Index, Elbow Method, etc.                                                         |
| **Applications**          | - Spam detection<br>- Sentiment analysis<br>- Image recognition<br>- Disease diagnosis                               | - Customer segmentation<br>- Market basket analysis<br>- Anomaly detection<br>- Gene sequence analysis              |
| **Advantages**            | - High accuracy for labeled data<br>- Interpretability (for some models)<br>- Well-understood evaluation metrics     | - Can work with data without labels<br>- Helps discover unknown patterns<br>- Useful for exploratory data analysis  |
| **Disadvantages**         | - Requires a large amount of labeled data<br>- Labeling data can be expensive and time-consuming                     | - Results can be harder to interpret<br>- Determining the number of clusters can be challenging                    |

***Task 1: Do a supervised classification by using Sentinel-2 for an area, export the classified image, prepare fine-tuned map.***  
  
![Model](https://github.com/Israt-Jahan-Shonom/Google_Earth_Engine/blob/main/Group-Reducer-and-Zonal-Statistics/Column_reducer.JPG)  
  
The Group Reducer in Google Earth Engine aggregates data based on specified grouping criteria, such as properties of features. It computes statistics or other aggregate values for each group independently, enabling efficient analysis and summarization of geospatial data.<br>
This tool is valuable for tasks like regional analysis, providing insights into spatial patterns and trends.<br>  
  
<b>GEE Script Link:</b> [Click here](https://code.earthengine.google.com/a23f963e0f4ac87faacf46994969f78b)  
  
***Task 2: Use [MODIS Land Cover Type data set](https://developers.google.com/earth-engine/datasets/catalog/MODIS_061_MCD12Q1#bands) and calculate the sum of each class of the band LC_Type1 for your upazila for the year 2021.***  
  
![Model](https://github.com/Israt-Jahan-Shonom/Google_Earth_Engine/blob/main/Group-Reducer-and-Zonal-Statistics/Class_Area.JPG)   
  
To group output of **image.reduceRegions()** you can specify a grouping band that defines groups by integer pixel values. This type of computation is sometimes called "zonal statistics" where the zones are specified as the grouping band and the statistic is determined by the reducer.<br>  
  
<b>GEE Script Link:</b> [Click here](https://code.earthengine.google.com/8b6e707262289fd03a8f7407608efe75)  

***Task 3: [Watch this tutorial](https://www.youtube.com/watch?v=mrGqVM7Ww44), and make a map of by using QGIS.***  
  
<p align="center">
  <img src="https://github.com/Israt-Jahan-Shonom/Google_Earth_Engine/blob/main/Group-Reducer-and-Zonal-Statistics/LULC_Sitakunda_QGIS.png" alt="LULC Map" width="50%">
</p>

A LULC (Land Use/Land Cover) map was produced for Sitakunda Upazila and [Sentinel-2 10m land use/land cover time series of the world](https://www.arcgis.com/home/item.html?id=cfcb7609de5f478eb7666240902d4d3d) dataset for 2022 was used in this purpose.<br> 
