# Convert string to array


# Version one
data = "Given this basic string convert it to an  array"

def convert_to_array_one(data):
    return data.split(" ")


# Version two 
# Reassigning 

def convert_to_array_two(data):
    array = data.split(" ")
    return array 

# Version three 
# Conditionals 

def convert_to_array_three(data):
    sentence = []
    if data == "":
        sentence.append(data)
    else: 
        sentence = data.split()
    return sentence 


