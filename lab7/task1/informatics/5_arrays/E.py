arr = list(map(int, input().split()))
found = any(arr[i] * arr[i-1] > 0 for i in range(1, len(arr)))
print('YES' if found else 'NO')
