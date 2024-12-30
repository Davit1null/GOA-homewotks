num1 = float(input("Enter number: "))
num2 = float(input("Enter number: "))
num3 = float(input("Enter number: "))

if num1 > num2 and num1 > num3:
    print("Biggest number is", num1)
elif num2 > num1 and num2 > num3:
    print("Biggest number is", num2)
elif num3 > num1 and num3 > num2:
    print("Biggest number is", num3)
else:
    print("Two or three numbers are equal")


score = int(input("Enter number: "))
if score >= 90: print("A")
elif score >= 80: print("B")
elif score >= 70: print("C")
elif score >= 60: print("D")
else: print("F")


num1 = float(input("Enter number: "))
if num1 > 0: print("Positive")
elif num1 < 0: print("Negative")
else: print("Zero")


num1 = int(input("Enter your number: "))
is_valid = True

if num1 < 0:
    is_valid = False

for i in range(2, num1):
    if num1 % i == 0:
        is_valid = False

if is_valid == True: print("Your number is prime")
else: print("Your number is not prime")