from flask import Blueprint, jsonify, request 
from deadline_detect import deadline_detection  

main = Blueprint('main', __name__)

@main.route('/string_detect_test', methods=['POST'])
def string_detect_test() : 
    inputted_string = request.get_json() 
    test = deadline_detection(inputted_string["input"])

    return jsonify({'category': [test] }) 

