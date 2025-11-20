from cloud import upload_video
from create import create_video


# upload video 1
VIDEO_FILE_PATH = "serious-girl.1920x1080.mp4"  # Replace with your actual video file path
upload_video(VIDEO_FILE_PATH)

# create record in db 2
create_video(
        title="How to Learn Python",
        description="https://example.com/python_img.jpg",
        thumbnail="https://example.com/python_video.mp4",
        download="Python, Programming, Tutorial",
        quality="Tbeginners.")


