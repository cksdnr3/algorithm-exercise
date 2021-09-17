def mergeIntervals(intervals):
    result = [];
    START = 0;
    END = 1;
    index = 1;
    interval = [intervals[0][START], intervals[0][END]];

    intervals.sort(key = lambda p: p[START])

    print(intervals)

    while (index < len(intervals)):
        
        if (interval[END] >= intervals[index][START]):
            interval[END] = intervals[index][END];
            index = index + 1;
        else:
            result.append(interval);
            interval = [intervals[index][START], intervals[index][END]];
            index = index + 1;
        
    result.append(interval);
    return result;

print(mergeIntervals([[1,5], [3,7], [10,15], [8,16]]))

