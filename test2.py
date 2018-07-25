import os
from flask import Flask, request, jsonify
from random import random

app = Flask(__name__)

@app.route('/keyboard')
def Keyboard():
    dataSend = {
        "type" : "buttons",
        "buttons" : ["랜덤", "자리배치"]
    }
    return jsonify(dataSend)

@app.route('/message', methods=['POST'])
def Message():
	dataReceive = request.get_json()
	content = dataReceive['content']

	if (content == u'랜덤'):
		dataSend = {
			"message" : {
			    "text" : str(random.randrange(1,27))
			}
            "keyboard": {
                "type" : "buttons",
                "buttons" : ["랜덤", '자리배치']
            }
		}
	elif (content == u'자리 배치'):
		dataSend = {
			"message" : {
			    "text" : "개발중인 기능이거나 잘못된 입력입니다TnT"
			}
            "keyboard": {
                "type" : "buttons",
                "buttons" : ["랜덤", "자리배치"]
            }
		}

	return jsonify(dataSend)

if __name__ == '__main__':
	app.run(host="0.0.0.0", port=3389)