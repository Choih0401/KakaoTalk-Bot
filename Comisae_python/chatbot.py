import os
from flask import Flask, request, jsonify
import random
app = Flask(__name__)

def setSeat():
	num = [i+1 for i in range(26)]
	idx = 26
	s = ""
	for i in range(5):
		for j in range(6):
			tmp = str(num.pop(random.randrange(idx)))
			if (len(tmp) == 1):tmp = '  '+tmp
			s+=tmp
			if (j < 5):s += '  '
			idx -= 1
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

   if (content == '랜덤'):
        reqdata = {
            "message" : {
                "text" : str(random.randrange(26))
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

print(setSeat())

if __name__ == '__main__':
   app.run(host="0.0.0.0", port=3389)