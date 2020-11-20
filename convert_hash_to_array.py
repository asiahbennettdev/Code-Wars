# Convert a hash into an array. Nothing more, Nothing less.
#
# {name: 'Jeremy', age: 24, role: 'Software Engineer'}
# should be converted into
#
# [["name", "Jeremy"], ["age", 24], ["role", "Software Engineer"]]
# Note: The output array should be sorted alphabetically.


def convert_hash_to_array(hash):
    keys = list(hash.keys())
    values = list(hash.values())
    output = []
    for i in range(0,len(keys)):
        output.append([keys[i],values[i]])
    return sorted(output)
