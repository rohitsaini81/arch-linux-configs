from flask import Flask, request, jsonify
from cloud import upload_video
from create import create_video


app = Flask(__name__)

@app.route("/")
def hello_world():
    return "<p>Hello, World!</p>"



@app.route("/set/video")
def youtube_upload(VIDEO_FILE_PATH):
    response = upload_video(VIDEO_FILE_PATH)



@app.route('/upload', methods=['POST'])
def upload():
    # Get JSON data from the request

    data = request.get_json()
    # python_object = json.loads(raw_json_string) another way to convert into json

    if not data:
        return jsonify({"error": "No JSON data received"}), 400

    # Access fields
    title = data.get("title")
    description = data.get("description")
    thumbnail = data.get("thumbnail")
    VIDEO_FILE_PATH= data.get("file_path")
    upload_to_cloud = upload_video(VIDEO_FILE_PATH)

    response = create_video(
        title=title,
        description=description,
        thumbnail=thumbnail,
        download=upload_to_cloud["url"],
        quality="780p hd quallity.")



    return jsonify(response), 200






if __name__ == "__main__":
    app.run(debug=True)
