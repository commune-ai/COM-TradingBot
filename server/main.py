from flask import Flask, jsonify, abort, request
from flask_cors import CORS
import requests

app = Flask(__name__)
CORS(app)

api_key = '40c37444fc521bb7229b723ecfe07bd516cfe019998f897f2c121f7ac48a2ad5'
api_secret = '57dba1a5d4d08c50ccdcfa9460a9a6dd8c6a3eae9057d4ce731a73569813824f'

@app.route('/get-trading-data')
def get_trading_data():
    try:
        headers = {
            'X-MBX-APIKEY': api_key,
        }
        response = requests.get('https://testnet.binance.vision/api/v3/ticker/24hr', headers=headers)
        
        if response.status_code == 200:
            trading_data = response.json()
            formatted_data = [{'symbol': item['symbol'], 'price': item['lastPrice'], 'quantity': item['volume'], 'icon': f"https://cryptologos.cc/logos/{item['symbol'].replace('/', '-').lower()}-{item['symbol'][-4:].lower()}-logo.svg"} for item in trading_data]
            return jsonify(formatted_data)
        else:
            abort(response.status_code, 'Failed to fetch trading data')
    except Exception as e:
        abort(500, f'An error occurred: {str(e)}')

@app.route('/get-trading-chart-data')
def get_trading_chart_data():
    pair = request.args.get('pair', default='BTCUSDT')
    try:
        headers = {
            'X-MBX-APIKEY': api_key,
        }
        response = requests.get(f'https://testnet.binance.vision/api/v3/trades?symbol={pair}', headers=headers)
        
        if response.status_code == 200:
            trading_data = response.json()
            formatted_data = [{'time': item['time'], 'price': float(item['price'])} for item in trading_data]
            return jsonify(formatted_data)
        else:
            abort(response.status_code, 'Failed to fetch trading data')
    except Exception as e:
        abort(500, f'An error occurred: {str(e)}')

        
if __name__ == '__main__':
    app.run(debug=True)
