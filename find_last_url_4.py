import json
import re

transcript_path = r"C:\Users\91984\.gemini\antigravity\brain\2053484b-ee2a-4d23-8710-64d4f67bc7e7\.system_generated\logs\transcript_full.jsonl"

print("Searching transcript for 'Hitec Innovations YouTube'...")
with open(transcript_path, "r", encoding="utf-8") as f:
    for line in f:
        line = line.strip()
        if not line:
            continue
        try:
            step = json.loads(line)
        except Exception:
            continue
            
        if step.get("type") == "USER_INPUT":
            content = step.get("content", "")
            if "Correct the YouTube link throughout" in content:
                print(f"--- Match in Step {step.get('step_index')} ---")
                print(repr(content))
                # Search for any links (http/https/file)
                urls = re.findall(r'https?://[^\s)"]+', content)
                file_urls = re.findall(r'file://[^\s)"]+', content)
                all_links = re.findall(r'\[([^\]]+)\]\(([^)]+)\)', content)
                print("HTTP URLs:", urls)
                print("file:// URLs:", file_urls)
                print("Markdown links:", all_links)
