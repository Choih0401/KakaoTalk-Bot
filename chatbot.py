from flask import Flask, request, jsonify
from random import random
app = Flask(__name__)

@app.route('/keyboard')
def keyboard():
	return jsonify({"type" : "buttons","buttons" : ["시작하기", "도움말"]})

@app.route('/message', methods=['POST'])
def message():
	dataReceive = request.get_json()
	content = dataReceive['content']

	if (content == '랜덤'):
		reqdata = {
			"message" : {
			"text" : str(random.randrange(1,27))
			}
		}
	elif (content == '자리 배치'):
		reqdata = {
			"message" : {
			"text" : "개발중인 기능이거나 잘못된 입력입니다TnT"
			}
		}

	return jsonify(reqdata)

if __name__ == '__main__':
	app.run(host="0.0.0.0", port=5000)