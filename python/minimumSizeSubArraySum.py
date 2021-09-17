def minimumSizeSubArraySum(s, nums):
    sum = 0;
    wIndex = 0;
    index = 0;
    subArrLen = len(nums) + 1;

    while index < len(nums):
        if sum > s:
            sum = sum - nums[wIndex]
            wIndex = wIndex + 1
        else:
            if (sum == s):
                current = index - wIndex
                if (subArrLen > current):
                    subArrLen = current
                
            sum = sum + nums[index]
            index = index + 1
    
    if (subArrLen > len(nums)): return 0
    else: return subArrLen


print(minimumSizeSubArraySum(7, [3,4,2,1,3,2]))
