def minimumSwaps(arr):
	counter = 0

    length = len(arr)

    arr_dict = {}

    for i, item in enumerate(arr):
        arr_dict[item - 1] = i

    checked = [False] * length

    for key, value in sorted(arr_dict.items(), key=lambda x: x[1]):

        if checked[key] or key == value:
            continue

        c_count = 0
        value = key

        while not checked[value]:

            checked[value] = True
            value = arr_dict[value]
            c_count += 1

        counter += c_count - 1

    return counter
