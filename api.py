import random
import string
from flask import Flask,jsonify

app = Flask(__name__, subdomain_matching=True)

# If running on localhost configure your hosts file to support subdomains...since subdomains dont exist locally.
# 127.0.0.1 localhost exfusiondom.com api.exfusiondom.com

app.config['SERVER_NAME']= "exfusiondom.com:5000"
@app.route('/<int:parameter>', subdomain='api', methods=['GET'])


def gen_rand_string(parameter):
    if parameter < 0 or parameter > 9:
        resp=jsonify([{"success":False, "payload":"Invalid parameter. Parameter must be between 0 and 9."}])
        resp.headers.add('Access-Control-Allow-Origin', '*')
        resp.headers.add('Access-Control-Allow-Methods', 'GET')
        return jsonify(resp)
    
    res=''.join(random.choices(string.ascii_letters + string.digits, k=parameter))
    resp=jsonify([{"success":True, "payload":res}])
    resp.headers.add('Access-Control-Allow-Origin', '*')
    resp.headers.add('Access-Control-Allow-Methods', 'GET')
    return resp

if __name__ == '__main__':
    app.run()