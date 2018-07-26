import os
from flask import Flask, request, jsonify
import random
from pytz import timezone
import datetime, json, sys
from parser import *
app = Flask(__name__)

def get_meal(dt):
    local_date = dt.strftime("Y.%m.%d")
    local_weekday = dt.weekday()

    l_l = get_diet(2, local_date, local_weekday)

    if len(l_l) == 1:
        lunch = "급식이 없습니다"
        return lunch

    else:
        d_d = get_diet(3, local_date, local_weekday)
        if len(d_d) == 1:
            lunch = local_date + " 중식\n" + l_l
            dinner = ""
        else:
            lunch = local_date + " 중식\n" + l_l + "\n"
            dinner = local_date + " 석식\n" + d_d

    return lunch + dinner

def setSeat():
   num = [i+1 for i in range(26)]
   idx = 26
   s = ""
   for i in range(5):
      for j in range(6):
         tmp = str(num.pop(random.randrange(idx)))
         if (len(tmp) == 1):tmp = '0'+tmp
         s+=tmp
         if (j < 5):s += '  '
         if (j % 2 != 0 and j < 5):s += '  '
         idx -= 1
         if not idx:
            break
      if(i < 4):s += '\n'
   return s

@app.route('/keyboard')
def Keyboard():
   reqdata = {
      "type" : "buttons",
      "buttons" : ["랜덤", "자리 배치", "개학식", "오늘 급식", "내일 급식"]
   }
   return jsonify(reqdata)

@app.route('/message', methods=['POST'])
def Message():
   dataReceive = request.get_json()
   content = dataReceive['content']

   if (content == '랜덤'):
        reqdata = {
            "message" : {
                "text" : str(random.randrange(1,26))
            },
            "keyboard": {
                "type" : "buttons",
                "buttons" : ["랜덤", "자리 배치", "개학식", "오늘 급식", "내일 급식"]
            }
        }
   elif (content == '자리 배치'):
        reqdata = {
            "message" : {
                "text" : setSeat()
            },
            "keyboard": {
                "type" : "buttons",
                "buttons" : ["랜덤", "자리 배치", "개학식", "오늘 급식", "내일 급식"]
            }
        }
   elif (content == '오늘 급식'):
        dt = datetime.datetime.today()
        diet = get_meal(dt)
        reqdata = {
            "message" : {
                "text" : str(diet)
            },
            "keyboard": {
                "type" : "buttons",
                "buttons" : ["랜덤", "자리 배치", "개학식", "오늘 급식", "내일 급식"]
            }
        }
   elif (content == '내일 급식'):
       dt = datetime.datetime.today() + datetime.timedelta(days=1)
       diet = get_meal(dt)
       reqdata = {
           "message" : {
               "text" : str(diet)
           },
           "keyboard": {
               "type" : "buttons",
               "buttons" : ["랜덤", "자리 배치", "개학식", "오늘 급식", "내일 급식"]
           }
       }
   elif (content == '개학식'):
       td = datetime.date.today()
       sd = datetime.date(2018, 8, 16)

       delta = sd - td
       int(delta.days)
       dday = "방학식까지 %d일 남았습니다." % (delta.days)
       reqdata = {
           "message" : {
               "text" : str(dday)
           },
           "keyboard": {
               "type" : "buttons",
               "buttons" : ["랜덤", "자리 배치", "개학식", "오늘 급식", "내일 급식"]
           }
       }

   return jsonify(reqdata)

if __name__ == '__main__':
   app.run(host="0.0.0.0", port=3389)