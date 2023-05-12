import random
from flask import Flask, abort

app = Flask(__name__)

@app.route('/<int:parameter>', subdomain='api', methods=['GET'])
def gen_rand_string(parameter):
    if parameter < 0 or parameter > 9:
        abort(400, "Invalid parameter. Parameter must be between 0 and 9.")

    return str(random.randint(10**(parameter-1),(10**parameter)-1))


if __name__ == '__main__':
    app.run()