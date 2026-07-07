import sys
import json
import pdfplumber
import spacy

nlp = spacy.load("en_core_web_sm")
SKILL_KEYWORDS =[
    "python",
    "javascript",
    "react",
    "node.js",
    "express",
    "sql",
    "mongodb",
    "machine learning",
    "deep learning",
    "tensorflow",
    "pytorch",
    "java",
    "c++",
    "html",
    "css",
    "git",
    "github",
    "data analysis",
    "pandas",
    "numpy",
    "scikit-learn",
    "api",
    "flask"
    
]
def extract_text(filepath):
    text =""

    with pdfplumber.open(filepath) as pdf:
        for page in pdf.pages:
            page_text = page.extract_text()

            if page_text:
                text += page_text +"\n"
    return text

def extract_skills(text):
    text =text.lower()
    found_skills = []

    for skill in SKILL_KEYWORDS:
        if skill.lower() in text:
            found_skills.append(skill)
    return found_skills


def extract_name(text):
    doc =nlp(text)

    for ent in doc.ents:
        if ent.label_ == "PERSON":
            return ent.text
        
    return "unknown"

if __name__=="__main__":

    if len(sys.argv) < 2:
        print(json.dumps({"error":"No PDF path provided"}))
        sys.exit(1)

    filepath = sys.argv[1]

    text = extract_text(filepath)
    skills = extract_skills(text)
    name = extract_name(text)

    output ={
        "name": name,
        "skills": skills,
        "text": text[:300]
     }
    print(json.dumps(output))