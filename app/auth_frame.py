#!/usr/bin/env python
# coding: utf-8

# In[5]:


#loading libraries
import numpy as np

#getting preprocessed data
CSI = np.ndarray(10, dtype=np.complex128) 
amp = np.real(CSI)
ph = np.imag(CSI)

#presence detection
presence = getSVM(CSI)

#authentication
if presence == 1:
    user = authNetwork(CSI)
    #send user to front end










# In[ ]:


def getSVM(arr):
    #using CSI values get features
    #using the features send into SVM
    #SVM predicts 1/0 for presence detection
    prediction = 1
    return prediction


# In[ ]:


def authNetwork(arr):
    #using CSI values get features
    #using features send into trained network
    #checking distance make prediction
    #output user name or 'unknown'
    prediction = 'Rozan'
    return prediction

