import math
from typing import List

def shortestUnSortedContinuousSubArray(list: List[int]) -> int:
    left = 0;
    right = 0;

    max = -math.inf;
    min = math.inf;

    idx = 0;

    while (idx < len(list) - 1):
        if (list[idx] > list[idx + 1]):
            idx = idx + 1;
            break;
        idx = idx + 1;

    if (idx == len(list) - 1):
        return 0;

    while (idx < len(list)):
        if (list[idx] < min):
            min = list[idx];
        idx = idx + 1;
    idx = 0;
    while (idx < len(list)):
        if (list[idx] > min):
            left = idx;
            break;
        idx = idx + 1;

    idx = len(list) - 1;
    while (idx > 0):
        if (list[idx] < list[idx - 1]):
            idx = idx - 1;
            break;
        idx = idx - 1;
    while (idx >= 0):
        if (list[idx] > max):
            max = list[idx];
        idx = idx - 1;
    idx = len(list) - 1;
    while (idx >= 0):
        if (list[idx] < max):
            right = idx;
            break;
        idx = idx - 1;

    return right - left + 1;
        


print(shortestUnSortedContinuousSubArray([2,6,4,8,10,9,15]));