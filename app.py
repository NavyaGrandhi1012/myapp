from flask import Flask
app = Flask(__name__)

@app.route('/')
def home():
    return """
    <html>
    <body style="text-align:center; 
    font-family:Arial; margin-top:100px;">
    <h1>🚀 App Successfully Deployed!</h1>
    <h2>Using Jenkins + Docker Pipeline</h2>
    <p style="color:green;">
    ✅ Automated Deployment Working!</p>
    </body>
    </html>
    """

if __name__ == '__main__':
    app.run(host='0.0.0.0', port=5000)


