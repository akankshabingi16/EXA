 
from exa_py import Exa

exa = Exa('f1594a69-82df-4086-b382-31463e4dac23')

query = input('Search here: ')

response = exa.search(
  query,
  num_results=5,
  type='keyword',
  include_domains=['https://www.tiktok.com'],
)

for result in response.results:
  print(f'Title: {result.title}')
  print(f'URL: {result.url}')
  print()
