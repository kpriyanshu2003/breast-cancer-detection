import os
import uuid
from flask import Blueprint, request
from werkzeug.utils import secure_filename
from model import analyze

upload = Blueprint("upload", __name__)

UPLOAD_FOLDER = "uploads"
ALLOWED_EXTENSIONS = {"png", "jpg", "jpeg", "gif"}
os.makedirs(UPLOAD_FOLDER, exist_ok=True)


def allowed_file(filename):
    return "." in filename and filename.rsplit(".", 1)[1].lower() in ALLOWED_EXTENSIONS


@upload.route("/upload", methods=["POST"])
def upload_file():
    if "file" not in request.files:
        return "No file part"
    file = request.files["file"]
    if file.filename == "":
        return "No selected file"
    if file and allowed_file(file.filename):
        filename = str(uuid.uuid4()) + "." + file.filename.rsplit(".", 1)[1].lower()
        file.save(os.path.join(UPLOAD_FOLDER, secure_filename(filename)))
        res = analyze()
        return {
            "filename": filename,
            "url": request.url_root + UPLOAD_FOLDER + "/" + filename,
            "app": res,
        }
    else:
        return {"error": "File type not allowed"}
