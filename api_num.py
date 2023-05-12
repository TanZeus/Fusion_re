import json
import random
from flask import Flask

# Misread the question - made a random number gen instead :)

app = Flask(__name__)

@app.route('/<int:parameter>', methods=['GET'])
def gen_rand_string(parameter):
    if parameter < 0 or parameter > 9:
        return json.dumps({"success":False, "payload":"Invalid parameter. Parameter must be between 0 and 9."})
    
    res=str(random.randint(10**(parameter-1),(10**parameter)-1))
    return json.dumps({"success":True, "payload":res}, indent=4)

if __name__ == '__main__':
    app.run()
