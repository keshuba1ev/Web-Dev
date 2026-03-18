n = int(input())
zeros = sum(1 for _ in range(n) if int(input()) == 0)
print(zeros)
