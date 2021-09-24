
# def findDuplicates(list):
#     sortedList = sorted(list);
#     i = 1;
#     while (i < len(list)):
#         if (sortedList[i - 1] == sortedList[i]):
#             return sortedList[i];
#         i = i + 1;

def findDuplicates(list):
    length = len(list) + 1;
    arr = [0] * length;

    idx = 0;
    while (idx < len(list)):
        if (arr[list[idx]] == 0):
            arr[list[idx]] = arr[list[idx]] + 1;
        else: 
            return list[idx];
        idx = idx + 1;
    


print(findDuplicates([5,4,3,4,1,2]))

