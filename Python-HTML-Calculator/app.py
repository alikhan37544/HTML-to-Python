from flask import Flask, request

app = Flask(__name__)

@app.route('/')
def index():
    return app.send_static_file('index.html')

@app.route('/calculate', methods=['POST'])
def calculate():
    if request.method == 'POST':
        expression = request.form['expression']
        
        try:
            result = eval(expression)
        except (SyntaxError, NameError):
            result = "Invalid expression"
        
        return result


if __name__ == '__main__':
    app.run()
