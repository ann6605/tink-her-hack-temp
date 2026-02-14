from flask import Flask, render_template, request, jsonify
import os
app = Flask(__name__)

# Dummy route feedback storage (in-memory for demo)
feedback_list = []

@app.route('/')
def home():
    return render_template('index.html')

@app.route('/submit_feedback', methods=['POST'])
def submit_feedback():
    data = request.get_json()
    feedback_list.append(data)  # In real app, save in DB
    print("Feedback received:", data)
    return jsonify({"status":"success", "message":"Feedback saved!"})

if __name__ == "__main__":
    port = int(os.environ.get("PORT", 5000))  # Read the port from Render
    app.run(host="0.0.0.0", port=port, debug=True)


