nums = (1, 2, 3, 4, 5, 2, 5, 1, 6)
same = list(set(nums))
same = list(dict.fromkeys(nums))
print(same)
