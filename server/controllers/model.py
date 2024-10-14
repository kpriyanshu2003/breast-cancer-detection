import tensorflow as tf
from PIL import Image
import numpy as np
import cv2
from dotenv import load_dotenv
import os

load_dotenv()


def preprocess_and_predict(file_path, model_path):
    model = tf.keras.models.load_model(model_path)  # load the model
    img = Image.open(file_path)  # load the model into model
    img = img.resize((128, 128))
    img_array = np.array(img)[
        np.newaxis, :, :, :
    ]  # convert shape from (128, 128, 3) -> (1, 128, 128, 3)
    # predict the output and return the prediction
    predictions, _ = model.predict(
        img_array
    )  # model predictions are stored in predictions
    # plt.imshow(predictions[0], cmap="Greys")
    img = np.squeeze(img_array)
    mask = np.squeeze(predictions)
    return mask, img


def postprocess(mask, img):
    img = np.squeeze(img)
    img = img.mean(axis=2)
    img = np.round(img).astype(np.uint8)
    img = img.astype(np.uint8)
    mask = mask.astype(np.uint8)
    mask = cv2.normalize(mask, None, 0, 255, cv2.NORM_MINMAX)
    new_mask = cv2.bitwise_not(mask, mask)
    result = cv2.addWeighted(img, 0.8, new_mask, 0.2, 0)
    return result


def genregen(src, filename):
    model_path = f"{os.getenv('MODEL_PATH')}/proposed_model_v1.h5"
    mask, img = preprocess_and_predict(src, model_path)
    final_image = postprocess(mask, img)
    cv2.imwrite(f"{os.getenv('OUTPUT_PATH')}/{filename}", final_image)
    return f"{os.getenv('OUTPUT_PATH')}/{filename}"

