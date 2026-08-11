import os
import datetime

folder = r"C:\Users\91984\.gemini\antigravity\brain\2053484b-ee2a-4d23-8710-64d4f67bc7e7"

print("File modification times:")
for file in os.listdir(folder):
    path = os.path.join(folder, file)
    if os.path.isfile(path):
        mtime = os.path.getmtime(path)
        dt = datetime.datetime.fromtimestamp(mtime)
        print(f"{file}: size={os.path.getsize(path)} bytes, mtime={dt}")
