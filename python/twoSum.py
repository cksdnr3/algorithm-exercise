def twoSum(list, target):
    list.sort();
    print(list);
    left = 0;
    right = len(list) - 1;

    while (True):
        if (list[left] + list[right] == target):
            return [left, right];
        elif (list[left] + list[right] > target):
            right = right - 1;
        elif (list[left] + list[right] < target):
            left = left + 1;
        elif (left >= right):
            return -1;

print(twoSum([2,7,11,15], 9));
