student_info = {
    "name": "davit",
    "surname": "choxeli",
    "academy": "GOA",
    "fav-color": "green",
    "city": "tbilisi",
    "goa-student": True,
    "age": 13,
    "fav-programming-lang": "Python"
}
print(student_info.get("age", "key"))
print(student_info.get("height", "key not found"))