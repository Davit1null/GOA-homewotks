def greet_him():
    print("hi")

def greet(func):
    print("hi there how are you")
    func()
greet(greet_him)