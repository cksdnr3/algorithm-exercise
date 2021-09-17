def sortColor(nums):
    idx = 0;
    pivot = 1;
    lowerPointer = 0;
    higherPointer = len(nums) - 1;

    while idx < len(nums):
        if nums[idx] < pivot:
            swap(idx, lowerPointer, nums)
            lowerPointer = lowerPointer + 1
        elif nums[idx] > pivot:
            swap(idx, higherPointer, nums)
            higherPointer = higherPointer - 1
            if (nums[idx] < pivot):
                swap(idx, lowerPointer, nums)
                lowerPointer = lowerPointer + 1

        if (idx >= higherPointer): return nums

        idx = idx + 1
    
    return nums

def swap(idx1, idx2, arr):
    print('swap')
    print(arr)
    backup = arr[idx1]
    arr[idx1] = arr[idx2]
    arr[idx2] = backup



print(sortColor([1,0,2,2,0,1,2,1,0]));