# -*- coding: utf-8 -*-
import os

# Read the files
with open("c:\\Users\\Jingy\\Documents\\trae_projects\\breille\\index.html", "r", encoding="utf-8") as f:
    html_content = f.read()

with open("c:\\Users\\Jingy\\Documents\\trae_projects\\breille\\style.css", "r", encoding="utf-8") as f:
    css_content = f.read()

with open("c:\\Users\\Jingy\\Documents\\trae_projects\\breille\\script.js", "r", encoding="utf-8") as f:
    js_content = f.read()

# Find the place to insert CSS (after the existing style tag or in head)
# First, remove any existing script tags that reference external files
# Then, insert the full CSS and JS

# Create new HTML
new_html = html_content

# Find the </style> tag and insert CSS after it if needed
# But actually, we'll replace the style section with full CSS
# First, let's find where the style tag is
style_start = new_html.find("<style>")
style_end = new_html.find("</style>")

if style_start != -1 and style_end != -1:
    # Replace existing style with full CSS
    new_html = new_html[:style_start] + "<style>\n" + css_content + "\n</style>" + new_html[style_end + 8:]

# Now find </body> tag and add script before it
body_end = new_html.rfind("</body>")
if body_end != -1:
    new_html = new_html[:body_end] + "<script>\n" + js_content + "\n</script>\n" + new_html[body_end:]

# Write the merged file
with open("c:\\Users\\Jingy\\Documents\\trae_projects\\breille\\index.html", "w", encoding="utf-8") as f:
    f.write(new_html)

print("Files merged successfully!")
print(f"Total lines: {len(new_html.splitlines())}")
