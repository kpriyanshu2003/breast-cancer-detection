import json
from flask import Flask, jsonify
from flask_cors import CORS, cross_origin
from upload import *
from dotenv import load_dotenv

load_dotenv()
app = Flask(__name__)
CORS(app, support_credentials=True)
app.register_blueprint(upload)


@app.route("/")
@cross_origin(supports_credentials=True)
def index():
    return jsonify({"status": "success", "message": "API Working Fine"})


if __name__ == "__main__":
    app.run(debug=True)
