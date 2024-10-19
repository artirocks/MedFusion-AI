# MedFusion AI - Transform the Medical Landscape with Generative AI
Advancing Healthcare with Multimodal Generative AI.

### Overview:
This project aims to revolutionize healthcare by developing a multimodal AI-powered solution that enhances diagnostic processes, personalizes treatment plans, and accelerates drug discovery. By leveraging large language models and image generation technologies, the solution seeks to improve patient outcomes, reduce healthcare costs, and drive innovation across the healthcare ecosystem.

## Features:
1. **Multimodal AI for Diagnosis**:
   - Integrates both textual data (e.g., Electronic Health Records) and medical imaging (e.g., MRI, CT scans) to assist healthcare professionals in diagnosing complex medical conditions.
  
2. **Synthetic Medical Data Generation**:
   - Generates synthetic and anonymized medical data for research, training, and model development, helping overcome data scarcity and maintain patient privacy.

3. **Personalized Treatment Plans**:
   - Utilizes patient data and medical literature to create AI-powered, personalized treatment plans that adapt in real-time to the patient's progress, ensuring tailored and dynamic healthcare.

4. **Federated Learning for Data Privacy**:
   - Integrates federated learning techniques to train AI models while ensuring patient data privacy. This enables local training on healthcare data without the need for centralized data storage.

5. **Gen AI-Powered Drug Discovery**:
   - Uses generative AI to generate and evaluate potential molecular structures, speeding up the process of discovering new drugs and assessing their efficacy.

6. **Patient Engagement Chatbot**:
   - Implements a generative AI-based chatbot to engage with patients for symptom assessments and initial diagnostic guidance.

## Tech Stack:
### Frontend:
- **ReactJS** with **TypeScript** for a responsive and interactive user interface.
- **Chakra UI** for customizable and accessible healthcare dashboards.

### Backend:
- **Python (FastAPI)** for API development and data processing pipelines.
- Federated Learning with **MedPalm** enables distributed AI training across healthcare institutions while keeping patient data secure and private.
  - **Homomorphic encryption** and **differential privacy** ensure that data remains secure during federated learning.
  - Local data remains with healthcare providers, and only aggregated model updates are shared to improve the model.

### Security and Privacy:
- **Federated Learning** with **homomorphic encryption** and **differential privacy** to ensure patient data privacy while training AI models.
- **OAuth 2.0** for secure user authentication and **RBAC (Role-Based Access Control)** for managing different user roles securely.

## Key Features in Detail:

### 1. Multimodal Data Integration:
- Integrates data from Electronic Health Records (EHR), medical imaging, and real-time patient monitoring devices (e.g., wearables).
- Provides a comprehensive view of the patient’s health profile for enhanced diagnostic accuracy.

### 2. AI-Driven Personalization:
- Leverages patient-specific data to create personalized, evolving treatment plans.
- Continuously adapts based on patient outcomes and progress, ensuring dynamic care.

### 3. Synthetic Data Generation:
- Generates synthetic medical data to support research and training without compromising patient privacy.
- Overcomes data scarcity for AI model development and medical research.

### 4. Accelerated Drug Discovery:
- Utilizes generative AI to discover new drugs by generating novel molecular structures and simulating their effectiveness.
- Reduces time-to-market for new treatments and personalized therapies.

### 5. Federated Learning for Privacy:
- Trains AI models locally on patient data, ensuring privacy by keeping the data decentralized.
- Uses only aggregated model updates to improve AI performance while maintaining data security.

### 6. Patient Chatbot:
- Offers an AI-powered chatbot for preliminary symptom assessments and patient engagement, enhancing telehealth capabilities.

# Project Structure
```
ARTISAN-CHATBOT/
│
├── backend/
│   ├── app/
│   │   ├── __init__.py
│   │   ├── main.py
│   │   ├── apis
│   │   │   ├── __init__.py
|   |   |   ├── authentication.py
│   │   │   └── chatbotserver.py
│   │   ├── gen_ai_models
|   |   |   |── gemeiniai.py
|   |   |   └── docs
|   |   |       └──artisan_background.txt
│   │   └── models
|   |       └──models.py
|   |── db
│   │   ├── message_store.json
│   │   └── users_db.json
│   ├── requirements.txt
|   |── .gitignore
│   └── README.md   
│
├── ui/artisan
│   ├── public/
│   │   ├── index.html
│   │   └── favicon.ico
│   ├── src/
│   │   ├── components/
│   │   │   ├── AvaChatbot.tsx
│   │   │   ├── Dashboard.tsx
│   │   │   ├── Header.tsx
│   │   │   ├── HomePage.js
│   │   │   ├── Signin.js
│   │   │   └── Signup.js
│   │   ├── pages/
│   │   │   └── HomePage.js
│   │   ├── themes
│   │   │   └── App.css
│   │   |── assests
│   │   |   └── img
│   │   ├── App.tsx
│   │   ├── App.css
│   │   └── index.tsx
│   ├── package.json
│   └── README.md
│
├── .gitignore
|── README.md
│
|── snaps 
    └── Product Images
```

# Project Setup

## Backend

### Create Virtual env
`python -m venv venv`

### Activate venv

Mac-OS
`source venv/bin/activate`

Windows
`.\venv\Scripts\activate.bat`

### Install Dependencies

`pip install -r requirements.txt`

### Run APIs
`python -m uvicorn main:app`

NOTE: Gemini API_KEY is shared via mail.

## UI

### Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

#### Available Scripts

In the project directory, you can run:

##### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

##### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

##### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.
