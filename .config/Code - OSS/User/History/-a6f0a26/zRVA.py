from flask import Flask
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

    if not data:
        return jsonify({"error": "No JSON data received"}), 400

    # Access fields
    title = data.get("title")
    description = data.get("description")

    # Do something with the data...
    print(f"Received: {title} - {description}")

    return jsonify({"message": "Data received successfully", "title": title}), 200



    


if __name__ == "__main__":
    app.run(debug=True)
