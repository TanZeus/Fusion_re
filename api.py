import json
import random
import string
from flask import Flask

app = Flask(__name__, subdomain_matching=True)

# If running on localhost configure your hosts file to support subdomains...since subdomains dont exist locally.
# 127.0.0.1 localhost exfusiondom.com api.exfusiondom.com

app.config['SERVER_NAME']= "exfusiondom.com:5000"
@app.route('/<int:parameter>', subdomain='api' ,methods=['GET'])

def gen_rand_string(parameter):
    if parameter < 0 or parameter > 9:
        return json.dumps({"success":False, "payload":"Invalid parameter. Parameter must be between 0 and 9."}, indent=4)
    
    res=''.join(random.choices(string.ascii_letters + string.digits, k=parameter))
    return json.dumps({"success":True, "payload":res}, indent=4)

if __name__ == '__main__':
    app.run()