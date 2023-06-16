from flask import Flask, render_template, request
from collections.abc import MutableSet
import pymysql


app = Flask(__name__)


@app.route("/")
def index():
    return render_template("index.html")

@app.route("/calculate", methods=["POST"])
def calculate():
    num1 = int(request.form["num1"])
    num2 = int(request.form["num2"])
    operation = request.form["operation"]

    if operation == "add":
        result = num1 + num2
    elif operation == "subtract":
        result = num1 - num2
    elif operation == "multiply":
        result = num1 * num2
    elif operation == "divide":
        result = num1 / num2

    connection = pymysql.connect(host='localhost',user='root',password='admin',db='calc_log')
    cursor = connection.cursor()

    sql="insert into result (outcome) values('%s');" %(result)
    print(sql)
    cursor.execute(sql)
    connection.commit()
    return str(result)

if __name__ == "__main__":
    app.run(port=5500,debug=True)
    connection = pymysql.connect(host='localhost',user='root',password='admin',db='calc_log')
    cursor = connection.cursor()

    sql="insert into result (outcome) values('%s');" %(result)
    print(sql)
    cursor.execute(sql)
    connection.commit()