/* 
    1. Instead of using switch statements to list out blockchain priorities, 
    it might be more efficient to list them out in an object:
*/
const priorityVals = {
    Osmosis: 100,
    Ethereum: 50, 
    ...
}
function getPriority(blockchain){
    return priorityVals[blockchain] ||-99;
}
/*
    I think this is more efficient if there are a large number of values the dictionary.
    Also, it looks more readable.

    2. 'lhsPriority' in sortedBalances' filter should be 'balancePriority',
    as 'lhsPriority' wasn't declared prior.

    3. the if loops can be combined: if (balancePriority > -99 && balance.amount <= 0)

    4. at the sort function, it would be beneficial to add an option for
    leftPriority == rightPriority to return 0;. 

    5. formattedBalance can be merged with sortedBalances instead of mapping
    sortedBalances again.

*/
