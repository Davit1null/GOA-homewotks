list[2, 4, 6]
try:
    print(list[7])
except IndexError:
    print("wrong")