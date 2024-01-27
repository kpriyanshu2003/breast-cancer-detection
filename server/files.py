from flask import send_from_directory, Blueprint
from dotenv import load_dotenv
import os

load_dotenv()

files = Blueprint("files", __name__)


@files.route("/files/<path:path>")
def send_report(path):
    return send_from_directory(f'{os.getenv("OUTPUT_PATH")}', path)
