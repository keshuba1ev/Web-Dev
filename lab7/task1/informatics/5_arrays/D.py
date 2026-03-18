arr = list(map(int, input().split()))
count = sum(1 for i in range(1, len(arr)) if arr[i] > arr[i-1])
print(count)
