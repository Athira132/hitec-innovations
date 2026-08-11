import sqlite3
import re
import sys

sys.stdout.reconfigure(encoding='utf-8')

db_path = r"C:\Users\91984\.gemini\antigravity\conversations\2053484b-ee2a-4d23-8710-64d4f67bc7e7.db"

conn = sqlite3.connect(db_path)
cursor = conn.cursor()

cursor.execute("SELECT idx, step_payload FROM steps WHERE idx >= 880")
rows = cursor.fetchall()

print("Scanning steps 880+ for raw ASCII string tokens...")
for idx, payload in rows:
    if not payload:
        continue
    strings = re.findall(b'[\x20-\x7E]{4,}', payload)
    print(f"--- Step {idx} has {len(strings)} tokens ---")
    for s in strings:
        try:
            text = s.decode('ascii')
            # Look for any interesting string, especially containing dots, slashes, or Hitec/map/facebook/youtube/vkard
            if any(x in text.lower() for x in ['.com', '.org', '.net', '.pro', 'http', 'maps', 'facebook', 'youtube', 'hitec', 'visiting', 'card', 'google']):
                print(f"  Token: {text}")
        except Exception:
            pass

conn.close()
