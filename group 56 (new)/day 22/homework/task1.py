my_list = [1,2,3,4,5,6,7,8,9,10]
num1 = int(input("enter your first number:"))
num2 = int(input("enter your second number:"))
if num1 > num2 :
    new_list = my_list[num2:num1]
elif num2 > num1 :
    new_list = my_list[num1:num2]
else :
    new_list = 1
    
print(new_list)