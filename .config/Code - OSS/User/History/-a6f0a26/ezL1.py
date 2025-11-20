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

    if not isinstance(data, list) or len(data) < 3:
        print("error")
        return jsonify({"error": "Invalid data format"}), 400

    # Unpack array
    title, description, thumbnail, download, quality = data
    print(title)
    # Access fields
    title1 = data.get("title")
    description1 = data.get("description")
    thumbnail1 = data.get("thumbnail")

    response = create_video(
        title=title1,
        description=description1,
        thumbnail=thumbnail1,
        download="",
        quality="780p hd quallity.")

    # print(title)


    return jsonify(response), 200






if __name__ == "__main__":
    app.run(debug=True)
