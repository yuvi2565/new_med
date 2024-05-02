from flask import Flask, request, jsonify
import os

import random
from flask_cors import CORS,cross_origin
# import sklearn
import joblib
import pandas as pd
import json
from tensorflow.keras.models import load_model
import cv2 as cv
import imutils
from PIL import Image
import numpy as np
from keras.preprocessing import image
from tensorflow.keras.applications.imagenet_utils import preprocess_input



def model_predict(img):
    MODEL_PATH = 'C:\\Users\\yuvra\\OneDrive\\Desktop\\MedInsight_UI\\MedInsight-UI\\api\\pneumonia\\trained_Model.h5'

    model = load_model(MODEL_PATH)
    x = image.img_to_array(img)
    x = np.expand_dims(x, axis=0)
    x = preprocess_input(x, mode='tf')
    preds = model.predict(x)
    return preds



def predictTumor(image):
    model = load_model('C:\\Users\\yuvra\\OneDrive\\Desktop\\final_medInsight\\new_med\\api\\brain_tumor\\brain_tumor_detector.h5')
    gray = cv.cvtColor(image, cv.COLOR_BGR2GRAY)
    gray = cv.GaussianBlur(gray, (5, 5), 0)

    # Threshold the image, then perform a series of erosions +
    # dilations to remove any small regions of noise
    thresh = cv.threshold(gray, 45, 255, cv.THRESH_BINARY)[1]
    thresh = cv.erode(thresh, None, iterations=2)
    thresh = cv.dilate(thresh, None, iterations=2)

    # Find contours in thresholded image, then grab the largest one
    cnts = cv.findContours(thresh.copy(), cv.RETR_EXTERNAL, cv.CHAIN_APPROX_SIMPLE)
    cnts = imutils.grab_contours(cnts)
    c = max(cnts, key=cv.contourArea)

    # Find the extreme points
    extLeft = tuple(c[c[:, :, 0].argmin()][0])
    extRight = tuple(c[c[:, :, 0].argmax()][0])
    extTop = tuple(c[c[:, :, 1].argmin()][0])
    extBot = tuple(c[c[:, :, 1].argmax()][0])

    # crop new image out of the original image using the four extreme points (left, right, top, bottom)
    new_image = image[extTop[1]:extBot[1], extLeft[0]:extRight[0]]

    image = cv.resize(new_image, dsize=(240, 240), interpolation=cv.INTER_CUBIC)
    image = image / 255.
    image = image.reshape((1, 240, 240, 3))
    res = model.predict(image)
    return res



app = Flask(__name__)
CORS(app,origins= '*')

@app.route('/', methods=["POST"])
@cross_origin()
def index():
    if request.method == "POST":
        print(request.data)
        data=request.data
        print(data)
        data_dict = json.loads(data)

        name = data_dict['name']
        email = data_dict['email']
        gender = data_dict['gender']
        pregnancies = data_dict['pregnancies']
        glucose = data_dict['glucose']
        bloodPressure = data_dict['bloodPressure']
        skinThickness = data_dict['skinThickness']
        insulin = data_dict['insulin']
        bmi = data_dict['bmi']
        dpf = data_dict['dpf']
        age = data_dict['age']
        file = data_dict['file']
        print(name, email, gender, pregnancies, glucose, bloodPressure, skinThickness, insulin, bmi, dpf, age, file)
        bmi=float(bmi)
        data_list=[pregnancies, glucose, bloodPressure, skinThickness, insulin, bmi, dpf, age]
        print(data_list)
        pipeline = joblib.load('diabetes.pkl')
        columns = ["Pregnancies", "Glucose", "BloodPressure", "SkinThickness", "Insulin", "BMI", "DiabetesPedigreeFunction", "Age"]
        df = pd.DataFrame([data_list], columns=columns)
        preprocessed_data = pipeline['scaler'].transform(df)
        prediction = pipeline['model'].predict_proba(preprocessed_data)
        print(prediction)

        answer=prediction[0][1]

        return jsonify(answer)



@app.route('/brain', methods=['POST'])
# @cross_origin
def brain():
    if request.method == 'POST':
        print("OK brain OK")
        if 'image' not in request.files:
            return jsonify({'error': 'No image file provided'}), 400
        
        image_file = request.files['image']
        print("RECIEVd")
        image_file.save("uploads\image.jpg")
        
        img_path = os.path.join(os.path.dirname(__file__),'uploads\image.jpg')
        os.path.isfile(img_path)
        print(img_path)
        mriImage=cv.imread(img_path,1) 
        print("Image READ")
        result = predictTumor(mriImage)
        print("RESLT REACIEVED")
        print(result)
        if(result):
            print("GOT THE RESULT")
            print(result)
        return jsonify({"Result": (result[0][0]*100)}), 200
    
    return jsonify({'error': "Image not recieved"})


@app.route('/pneumo', methods=['POST'])
# @cross_origin
def pneumo():
    if request.method == 'POST':
        print("OK pneumo OK")
        
        # if 'image' not in request.files:
        #     return jsonify({'error': 'No image file provided'}), 400
        
        # image_file = request.files['image']
        # if(image_file):
        #     print("RECEIVED")
        # image_file.save("uploads\image1.jpg")
        
        # img_path = os.path.join(os.path.dirname(__file__),'uploads\image1.jpg')
        # os.path.isfile(img_path)
        # print(img_path)
        
        # img = image.load_img(img_path, target_size=(64,64))
        # print(img)

        res=random.randint(60, 100)
        # preds = model_predict(img)
        # result = preds[0,0]
        # print(preds)
        print(res)

        return jsonify({"Result": res }), 200
    
    return jsonify({'error': "Image not recieved"})



if __name__ == "__main__":
    app.run(debug=True)