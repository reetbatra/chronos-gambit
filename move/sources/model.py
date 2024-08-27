import math

def pricing_function(q1, q2, b):
  return b * math.log(math.e**(q1/b)+math.e**(q2/b))

def convert_to_2d(x):
    scaling_factor = 10000000000000000000000000000000000000000000000000000000000000
    scaled_value = (x + scaling_factor / 2) / scaling_factor
    scaled_value * 100
}



print(pricing_function(10000, 10000, 250))
# print(fixed_function(100, 121, 100))
# print(pricing_function(0, 0, 100))
# print(fixed_function(0, 0, 100))
# print(pricing_function(5, 5, 100))
# print(fixed_function(5, 5, 100))
