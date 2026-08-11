from PIL import Image
import sys

img = Image.open("logo-raw.png")
width, height = img.size

# Convert to binary map: 1 for non-white/non-light-background pixels, 0 for background
# We also exclude the bottom area (y >= 450) where the red bar and contact text reside
binary = []
for y in range(height):
    row = []
    for x in range(width):
        if y >= 450:
            row.append(0)
            continue
        r, g, b = img.getpixel((x, y))[:3]
        # Background is white/very light grey/pink (R > 215, G > 215, B > 215)
        if r > 215 and g > 215 and b > 215:
            row.append(0)
        else:
            row.append(1)
    binary.append(row)

# Flood fill to find connected components
visited = [[False for _ in range(width)] for _ in range(height)]
components = []

for y in range(height):
    for x in range(width):
        if binary[y][x] == 1 and not visited[y][x]:
            # Start a new component
            comp = []
            queue = [(x, y)]
            visited[y][x] = True
            
            while queue:
                cx, cy = queue.pop(0)
                comp.append((cx, cy))
                
                # Check 8-connected neighbors
                for dx, dy in [(-1,0),(1,0),(0,-1),(0,1),(-1,-1),(-1,1),(1,-1),(1,1)]:
                    nx, ny = cx + dx, cy + dy
                    if 0 <= nx < width and 0 <= ny < height:
                        if binary[ny][nx] == 1 and not visited[ny][nx]:
                            visited[ny][nx] = True
                            queue.append((nx, ny))
            
            components.append(comp)

print(f"Found {len(components)} connected components.")

# Sort components by pixel count
components.sort(key=len, reverse=True)

for idx, comp in enumerate(components[:15]):
    min_x = min(p[0] for p in comp)
    max_x = max(p[0] for p in comp)
    min_y = min(p[1] for p in comp)
    max_y = max(p[1] for p in comp)
    print(f"Component {idx}: pixels={len(comp)}, bbox=[x1={min_x}, y1={min_y}, x2={max_x}, y2={max_y}]")
