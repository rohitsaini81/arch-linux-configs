from flask import Flask
from cloud import upload_video
from create import create_video


app = Flask(__name__)

@app.route("/")
def hello_world():
    return "<p>Hello, World!</p>"



@app.route("/set/video")
def youtube_upload():



if __name__ == "__main__":
    app.run(debug=True)
