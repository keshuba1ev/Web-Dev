records = [[input(), float(input())] for _ in range(int(input()))]
second_lowest = sorted(set([score for name, score in records]))[1]
print('\n'.join(sorted([name for name, score in records if score == second_lowest])))
