#Given a non-negative integer, return an array / a list of the individual digits in order.

#Examples:
#123 => [1,2,3]

#1 => [1]

#8675309 => [8,6,7,5,3,0,9]

def function(num):
    list = []
    if num == 0:
        return[0]
    while num: 
        num, x = divmod(num, 10)
        list.append(x)
    list.reverse()
    return list 

