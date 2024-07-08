# Business Contract Validation Tool

This project is a Streamlit application for highlighting contracts and performing Named Entity Recognition (NER). The application classifies content within contract clauses, determines deviations from a template, and highlights them.

## Features
- Automated extraction and classification of contract clauses.
- Highlighting key entities such as dates, parties, and legal terms.
- Identifying deviations from standard contract templates.
- Providing a summarized view of the contract content.
- Download options for highlighted contracts as PDF or DOCX.

## Technologies Used
- **Flask:** For backend API services.
- **PyMuPDF:** For PDF text extraction.
- **python-docx:** For Word document text extraction and generation.
- **Transformers (Huggingface):** For Named Entity Recognition (NER).
- **xhtml2pdf:** For generating highlighted PDF documents.

## Installation

### Prerequisites
- Python 3.7 or higher
- Git

### Steps
1. **Clone the repository:**
   ```sh
   git clone https://github.com/harsh-mit/Business-Contract-Validation.git
   cd Business-Contract-Validation
   ```

2. **Create a virtual environment and activate it:**
   - **Windows:**
     ```sh
     python -m venv venv
     .\venv\Scripts\activate
     ```

   - **macOS/Linux:**
     ```sh
     python3 -m venv venv
     source venv/bin/activate
     ```

3. **Install the required dependencies:**
   ```sh
   pip install -r requirements.txt
   ```

## Usage

1. **Run the Flask app:**
   ```sh
   set FLASK_APP=backend/app.py  # On Windows
   export FLASK_APP=backend/app.py  # On macOS/Linux
   flask run
   ```

2. **Open your web browser and go to `http://localhost:5000` to access the application.**

## Project Structure

```
Business-Contract-Validation/
├── backend/
│   ├── app.py
│   ├── requirements.txt
│   ├── templates/
│   │   └── index.html
│   ├── static/
│   │   ├── css/
│   │   │   └── styles.css
│   │   ├── js/
│   │   │   └── script.js
│   └── model/
│       └── generate.py
├── .gitignore
└── README.md
```

