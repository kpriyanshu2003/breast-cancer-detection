from flask import Blueprint

model = Blueprint("model", __name__)


@model.route("/analyze")
def analyze():
    return "Cancer Detection App"
