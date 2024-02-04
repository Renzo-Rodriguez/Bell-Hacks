import numpy as np 
import matplotlib as plt
import random as rand
from predata import *


class model:
    def __init__(self,num_hidden:int,size_hidden:tuple,input_size:int,output_size:int,learningrate) -> None:
        self.brian = None:
        self.num_hidden = num_hidden
        self.size_hidden = size_hidden
        self.input_size = input_size
        self.output_size = output_size
        self.lrate = learningrate
    def generate_brain(self)-> np.array :
        #defining input layer

        input_layer_weights = np.array([rand.random() for _ in range(self.input_size)])
        input_layer_biases = np.array([rand.random() for _ in range(self.input_size)])
        input_layer = (input_layer_weights,input_layer_biases)

        #defining hiden layer(s):

        hidden_layers = []
        for i in range(self.num_hidden):
            layer_weights = np.array([rand.random() for _ in range(self.size_hidden[i])])
            layer_biases =np.array([rand.random() for _ in range(self.size_hidden[i])])
            hidden_layers.append(tuple(layer_weights,layer_biases))

        output_layer_weights = np.array([rand.random() for _ in range(self.output_size_size)])
        output_layer_biases = np.array([rand.random() for _ in range(self.input_size)])
        output_layer = tuple(output_layer_weights,output_layer_biases)
        return np.array(input_layer,hidden_layers,output_layer)
    #sigmoid  activation function
    def sigmoid(self,val):
        return 1/(1+np.exp(-val))
    def sigmoint_derivative(self,val):
        return val*(1-val)

    #propagation throuh model
    def propagate(self,input_data,brain) -> tuple:
        layer_output = input_data
        for layer_weights,layer_biases in brain:
            weighted_sum = np.dot(layeroutput,layer_weights)+layer_biases
            layer_output = layer_biases
        return layer_output
    #backpropagate through nerual net using 
    #output and  ideal from cost function
    def backpropagate(self,brain,output,ideal):
        #use root mean square error
        outputs = map(lambda val: self.sigmoid(val),output)
        error = ideal-output
        error = error ** 2
        error = error/self.output_size
        error = np.sqrt(error)



    







        

    

