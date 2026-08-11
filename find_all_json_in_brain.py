import os
import re

brain_dir = r"C:\Users\91984\.gemini\antigravity\brain"

print("Scanning all text files in brain directory recursively for links...")
count = 0
for root, dirs, files in os.walk(brain_dir):
    for file in files:
        if file.endswith(('.json', '.txt', '.md', '.jsonl')):
            path = os.path.join(root, file)
            # Skip logs we already scanned
            if 'transcript_full.jsonl' in path and '2053484b' in path:
                continue
            try:
                with open(path, 'r', encoding='utf-8', errors='ignore') as f:
                    content = f.read()
                    if any(term in content.lower() for term in ['facebook', 'youtube', 'maps', 'visiting']):
                        urls = re.findall(r'https?://[a-zA-Z0-9./\-_%?&=#+]+', content)
                        if urls:
                            filtered = [u for u in urls if 'localhost' not in u and 'vercel.com' not in u and 'github.com' not in u and 'unpkg' not in u]
                            if filtered:
                                print(f"File: {path} | URLs={filtered[:5]}")
                                count += 1
            except Exception:
                pass

print(f"Scan complete. Found {count} matching files.")
