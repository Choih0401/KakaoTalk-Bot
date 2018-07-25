import os
from flask import Flask, request, jsonify
from random import random, randint
app = Flask(__name__)

def setSeat():
	num = [i+1 for i in range(26)]
	idx = 26
	s = ""
	for i in range(5):
		for j in range(6):
			s += str(num.pop(random.randrange(idx)))+' '
			idx -= 1
			print(idx)
			if not idx:
				break
		s += '\n'
	return s

@app.route('/keyboard')
def Keyboard():
   reqdata = {
      "type" : "buttons",
      "buttons" : ["랜덤", "자리 배치"]
   }
   return jsonify(reqdata)

@app.route('/message', methods=['POST'])
def Message():
   dataReceive = request.get_json()
   content = dataReceive['content']
   a = randint(1,26)

   if (content == '랜덤'):
        reqdata = {
            "message" : {
                "text" : str(a)
            },
            "keyboard": {
                "type" : "buttons",
                "buttons" : ["랜덤", "자리 배치"]
            }
        }
   elif (content == '자리 배치'):
        reqdata = {
            "message" : {
                "text" : setSeat()
            },
            "keyboard": {
                "type" : "buttons",
                "buttons" : ["랜덤", "자리 배치"]
            }
        }

   return jsonify(reqdata)

if __name__ == '__main__':
   app.run(host="0.0.0.0", port=3389)