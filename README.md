# 🤖 EmotionAI – AI-Powered Emotion Detection

![Python](https://img.shields.io/badge/Python-3.11+-blue?style=for-the-badge&logo=python)
![Flask](https://img.shields.io/badge/Flask-Web_App-black?style=for-the-badge&logo=flask)
![Scikit-Learn](https://img.shields.io/badge/Scikit--Learn-ML-orange?style=for-the-badge&logo=scikit-learn)
![License](https://img.shields.io/badge/License-MIT-green?style=for-the-badge)

EmotionAI is an AI-powered web application that detects human emotions from text using **Natural Language Processing (NLP)** and **Machine Learning**. Users can enter any sentence, and the application predicts the underlying emotion along with a confidence score, emoji, and contextual message.

---

# 🌐 Live Demo

🚀 **Live Website:** *(Add your Render URL here after deployment)*

🔗 https://your-app-name.onrender.com

---

# 📸 Preview

## Home Page

> *(Add a screenshot here)*

```
screenshots/home.png
```

## Prediction Result

> *(Add a screenshot here)*

```
screenshots/result.png
```

---

# ✨ Features

- 🧠 AI-powered emotion prediction
- 😊 Detects six different emotions
- 📊 Confidence score for each prediction
- 🎨 Modern glassmorphism UI
- 📱 Fully responsive design
- ⚡ Fast predictions
- 🎭 Emotion-specific emoji and message
- 💻 Built with Flask and Scikit-learn

---

# 🎯 Supported Emotions

| Emotion | Emoji |
|----------|-------|
| Joy | 😊 |
| Sadness | 😢 |
| Anger | 😡 |
| Fear | 😨 |
| Love | ❤️ |
| Surprise | 😲 |

---

# 🛠️ Tech Stack

### Frontend

- HTML5
- CSS3
- JavaScript

### Backend

- Flask

### Machine Learning

- Scikit-learn
- TF-IDF Vectorizer
- Joblib
- NumPy

---

# 📂 Project Structure

```text
EmotionAI/
│
├── app.py
├── emotion_pipeline.pkl
├── requirements.txt
├── README.md
│
├── templates/
│     └── index.html
│
├── static/
│     ├── style.css
│     └── script.js
│
└── screenshots/
      ├── home.png
      └── result.png
```

---

# ⚙️ Installation

### Clone Repository

```bash
git clone https://github.com/YourUsername/EmotionAI.git
```

Go to project

```bash
cd EmotionAI
```

Install dependencies

```bash
pip install -r requirements.txt
```

Run the project

```bash
python app.py
```

Open your browser

```
http://127.0.0.1:5000
```

---

# 🧠 How It Works

1. User enters text.
2. Text is converted into numerical features using a TF-IDF Vectorizer.
3. The trained machine learning model predicts the emotion.
4. The application displays:
   - Predicted emotion
   - Confidence score
   - Emoji
   - Emotion-specific message

---

# 💡 Example Inputs

| Input | Predicted Emotion |
|---------|------------------|
| I got my dream job today! | Joy 😊 |
| I feel lonely and hopeless. | Sadness 😢 |
| I am extremely angry right now. | Anger 😡 |
| I'm worried about tomorrow's interview. | Fear 😨 |
| I love spending time with my family. | Love ❤️ |
| I can't believe this happened! | Surprise 😲 |

---

# 🚀 Future Improvements

- 🌍 Multi-language emotion detection
- 🎤 Voice emotion recognition
- 🤖 LLM-powered personalized responses
- 📈 Emotion analytics dashboard
- 🌙 Dark/Light mode
- 📄 Emotion history

---

# 👨‍💻 Author

**Priyam Singh**

📧 Email: *your-email@example.com*

🔗 LinkedIn: https://www.linkedin.com/in/your-profile/

💻 GitHub: https://github.com/yourusername

---

# ⭐ Support

If you found this project useful, consider giving it a ⭐ on GitHub.

It motivates me to build more AI and Machine Learning projects.

---

## 📜 License

This project is licensed under the MIT License.