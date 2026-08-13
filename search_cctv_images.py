import os

src_dir = r"C:\Users\91984\.gemini\antigravity\scratch\hitec-innovations\src"

print("Searching files for CCTV images...")
for root, dirs, files in os.walk(src_dir):
    for file in files:
        if file.endswith(('.js', '.jsx')):
            path = os.path.join(root, file)
            with open(path, 'r', encoding='utf-8', errors='ignore') as f:
                for line_idx, line in enumerate(f, 1):
                    if 'cctv' in line.lower() or 'service-cctv' in line.lower() or 'image' in line.lower():
                        if any(x in line for x in ['.jpg', '.png', 'http', 'image']):
                            print(f"{file}:{line_idx}: {line.strip()}")
