try:
    input_one = input("write number:")
    number = int(input_one)
    print("value",number)
except ValueError:
    print("wrong it has to be an integer")