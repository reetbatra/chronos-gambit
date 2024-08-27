import math

def pricing_function(q1, q2, b):
  return b * math.log(math.e**(q1/b)+math.e**(q2/b))

print(pricing_function(10000, 10, 100))
# print(fixed_function(100, 121, 100))
# print(pricing_function(0, 0, 100))
# print(fixed_function(0, 0, 100))
# print(pricing_function(5, 5, 100))
# print(fixed_function(5, 5, 100))
