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
student_info.pop("fav-programming-lang", "Python")
print(student_info)