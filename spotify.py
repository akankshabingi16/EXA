import requests
import base64
CLIENT_ID = 'cce55dff7ad44c26b84ef764d1ec74e9'
CLIENT_SECRET = '8963e6e93f1e4e32a33e0476da524043'
client_credentials = f"{CLIENT_ID}:{CLIENT_SECRET}"
client_credentials_base64 = base64.b64encode(client_credentials.encode())
token_url = 'https://accounts.spotify.com/api/token'
headers = {
    'Authorization': f'Basic{client_credentials_base64.decode()}'
}
data = {
    'grant_type': 'client_credentials'
}
response = requests.post(token_url,data=data,headers=headers)
if response.status_code == 200: 
    access_token = response.json()['access_token']
    print("Access token obtained successfully.")
else:
    print("Error obtaining access token.")
    exit()