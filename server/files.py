from flask import send_from_directory, Blueprint


files = Blueprint("files", __name__)


@files.route("/files/<path:path>")
def send_report(path):
    return send_from_directory("uploads", path)
