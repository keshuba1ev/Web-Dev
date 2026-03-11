# Warmup-1
def sleep_in(weekday, vacation):
  return not weekday or vacation

# Warmup-2
def string_times(str, n):
  return str * n

# String-1
def hello_name(name):
  return "Hello " + name + "!"

# String-2
def double_char(str):
  return "".join([c*2 for c in str])

# List-1
def first_last6(nums):
  return nums[0] == 6 or nums[-1] == 6

# List-2
def count_evens(nums):
  return len([n for n in nums if n % 2 == 0])
