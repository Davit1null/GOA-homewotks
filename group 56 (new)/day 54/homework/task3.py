my_dict = {1 : "c", 7 : "l", 9 : "o"}
key = input("enter key")
try:
    print("value", my_dict[key])
except KeyError:
    print("wrong key")
