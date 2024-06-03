# Supervised and Unsupervised Classification
This repository folder contains two tasks of supervised and unsupervised land use classification in Google Earth Engine (GEE) platform along with descriptions and corresponding GEE script links.  
  
*The table above highlights the differences between unsupervised and supervised classification* (Source: [GISGeography](https://gisgeography.com/supervised-unsupervised-classification-arcgis/))

| Aspect                    | Supervised Classification                                                                                           | Unsupervised Classification                                                                                        |
|---------------------------|---------------------------------------------------------------------------------------------------------------------|--------------------------------------------------------------------------------------------------------------------|
| **Definition**            | Classification guided by known training samples.    | Classification without predefined training data.      |
| **Training Data**             | Requires labeled training data for each class.                       | No labeled training data required.                                             | 
| **Process**             | ![Supervised Example](https://gisgeography.com/image-classification-techniques-remote-sensing/)                       | ![Unsupervised Example](https://www.researchgate.net/publication/333755573_Earth_Observation_Technology_Application_for_Mapping_and_Monitoring_Mangrove_Forest_Ecosystem_in_Malaysia_A_review)                                             | 
| **Examples of Algorithms**| - Logistic Regression<br>- Decision Trees<br>- Support Vector Machines (SVM)<br>- Neural Networks                   | - K-Means Clustering<br>- Hierarchical Clustering<br>- Principal Component Analysis (PCA)<br>- Autoencoders        |
| **Applicability**                | Effective for identifying specific classes.                                                                       | Suitable for exploratory data analysis.                   |
| **Evaluation Metrics**    | Accuracy, Precision, Recall, F1 Score, ROC-AUC, etc.                                                                | Silhouette Score, Davies-Bouldin Index, Elbow Method, etc.                                                         |
| **Advantages**            | - High accuracy for labeled data<br>- Interpretability <br>- Well-understood evaluation metrics     | - Can work with data without labels<br>- Helps discover unknown patterns<br>- Useful for exploratory data analysis  |
| **Disadvantages**         | - Requires a large amount of labeled data<br>- Labeling data can be time-consuming                     | - Results can be harder to interpret<br>- Determining the number of clusters can be challenging                    |

## ***Task 1: Do a supervised classification by using Sentinel-2 for an area, export the classified image, prepare fine-tuned map.***  
  
<p align="center">
  <img src="https://github.com/Israt-Jahan-Shonom/Google_Earth_Engine/blob/main/Supervised_and_Unsupervised_Machine_Learning/LULC_CU_Watershed.jpg" alt="Supervised Classification of Chittagong University Watershed" width="70%">
</p>    
  
**GEE Script Link:** [Click here](https://code.earthengine.google.com/e9f8591c76140a47aa49b5ed323dea61)  
  
## ***Task 2: Do a unsupervised classification by using Landsat-9 for your Upazila, export the classified image, prepare fine-tuned map.***  
  
<p align="center">
  <img src="https://github.com/Israt-Jahan-Shonom/Google_Earth_Engine/blob/main/Supervised_and_Unsupervised_Machine_Learning/Unsupervised_Hathazari.jpg" alt="Unsupervised Classification of Hathazari" width="50%">
</p>   
  
**GEE Script Link:** [Click here](https://code.earthengine.google.com/d986b779d57009290ebdfae6ee9f0d06)  
