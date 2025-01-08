def find_maximum(numbers):
    if not numbers:
        return None
    return max(numbers)

numbers = [3, 4, 7, 2, 8, 5]
print(find_maximum(numbers))