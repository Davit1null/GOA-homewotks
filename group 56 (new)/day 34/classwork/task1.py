def remove_elements_by_indexes(main_list, indexes_list):
    for index in indexes_list:
        if 0 <= index < len(main_list):
            main_list.pop(index)

    return main_list

main_list = [10, 20, 30, 40, 50]
indexes_list = [1, 3]

print(remove_elements_by_indexes(main_list, indexes_list))