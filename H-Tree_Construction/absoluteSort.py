def absSort(arr):
    def merge(s, m, e, arr):
        L = arr[s:m+1]
        R = arr[m+1:e+1]
        l_i = 0
        r_i = 0
        i = s
        while i <= e:
            if l_i == len(L):
                arr[i] = R[r_i]
                r_i += 1
            elif r_i == len(R):
                arr[i] = L[l_i]
                l_i += 1
            else:
                r_val = R[r_i]
                l_val = L[l_i]
                if abs(r_val) < abs(l_val):
                    arr[i] = r_val
                    r_i += 1
                elif abs(r_val) > abs(l_val):
                    arr[i] = l_val
                    l_i += 1
                else:
                    if r_val < 0:
                        arr[i] = r_val
                        r_i += 1
                    else:
                        arr[i] = l_val
                        l_i += 1
            i += 1

    def merge_sort(s, e, arr):
        if e > s:
            m = (s + e) // 2
            merge_sort(s, m, arr)
            merge_sort(m + 1, e, arr)
            merge(s, m, e, arr)

    merge_sort(0, len(arr) - 1, arr)

    return arr


print(absSort([101, -100, 0, 1, 2, 3, 4, -4, 5, 6, 7]))
