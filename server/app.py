from flask import Flask, jsonify
from flask_cors import CORS, cross_origin
from controllers.upload import *
from controllers.files import *
from dotenv import load_dotenv

load_dotenv()
app = Flask(__name__)
CORS(app, support_credentials=True)
app.register_blueprint(upload)
app.register_blueprint(files)


@app.route("/")
@cross_origin(supports_credentials=True)
def index():
    return jsonify({"status": "success", "message": "API Working Fine"})


if __name__ == "__main__":
    app.run(debug=True, port=os.getenv("PORT", 3300))
