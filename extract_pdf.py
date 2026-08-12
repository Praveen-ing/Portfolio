import pypdf
reader = pypdf.PdfReader(r"c:\Users\HP\OneDrive - Students.iiit.ac.in - IIIT Hyderabad\Projects\Portfolio\Nethavath Praveen IIITH   Resume.pdf")
text = ""
for page in reader.pages:
    text += page.extract_text() + "\n"
with open("resume_text.txt", "w", encoding="utf-8") as f:
    f.write(text)
