from flask import Flask, render_template, request
import joblib
import numpy as np

app = Flask(__name__)

pipeline = joblib.load("emotion_pipeline.pkl")

model = pipeline["model"]
vectorizer = pipeline["vectorizer"]


emotion_info = {
    "joy": {
        "emoji": "😊",
        "color": "#FFD93D",
        "message": "You sound cheerful, optimistic and full of positive energy."
    },
    "sadness": {
        "emoji": "😢",
        "color": "#3B82F6",
        "message": "Your text reflects sadness or disappointment. Better days are ahead."
    },
    "anger": {
        "emoji": "😡",
        "color": "#EF4444",
        "message": "Your words suggest frustration or anger. Take a moment to cool down."
    },
    "fear": {
        "emoji": "😨",
        "color": "#8B5CF6",
        "message": "Your message expresses fear or anxiety. Stay calm and take things one step at a time."
    },
    "love": {
        "emoji": "❤️",
        "color": "#EC4899",
        "message": "Your words express affection, care and warmth."
    },
    "surprise": {
        "emoji": "😲",
        "color": "#06B6D4",
        "message": "Your message reflects surprise or amazement."
    }
}


@app.route("/")
def home():
    return render_template(
        "index.html",
        page_title="EmotionAI - AI Emotion Detection"
    )

@app.route("/predict", methods=["POST"])
def predict():
     text = request.form["text"]
     vector = vectorizer.transform([text])
     prediction = model.predict(vector)[0]
     probability = np.max(model.predict_proba(vector)) * 100 
     info = emotion_info.get(prediction, 
                             { "emoji": "🤖",
                               "color": "#ffffff",
                                 "message": "Emotion detected successfully."
                                   })
     
     return render_template(
    "index.html",
    page_title="EmotionAI - Prediction",
    prediction=prediction,
    confidence=round(probability, 2),
    emoji=info["emoji"],
    color=info["color"],
    message=info["message"],
    text=text
)


if __name__ == "__main__":
    app.run(debug=True)