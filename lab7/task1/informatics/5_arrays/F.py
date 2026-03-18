arr = list(map(int, input().split()))
count = sum(1 for i in range(1, len(arr) - 1) if arr[i] > arr[i-1] and arr[i] > arr[i+1])
print(count)
