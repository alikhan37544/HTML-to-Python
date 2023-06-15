## Using flask to make our lives easier
# Flask is a web framework for python that allows web developement


# Importing modules
from flask import Flask
import sys
import collections 
if sys.version_info.major == 3 and sys.version_info.minor >= 10:

    from collections.abc import MutableMapping
else:
    from collections import MutableMapping 

# This part here creates an instance of the Flask class for variable app
app = Flask(__name__)

"""
The @app.route() is called a decorator. It's a part of Flask.


"""
@app.route("/")
@app.route("/home")

def home():
    return "Hello"

if __name__ == "__main__":
    app.run(debug=True,port=5001)