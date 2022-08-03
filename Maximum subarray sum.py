def max_sequence(arr):
    prov = 0  
    maxsum= 0
    for element in range(len(arr)): 
        prov = prov + arr[element] 
        if prov < 0: 
            prov = 0      
        elif (maxsum < prov): 
            maxsum = prov           
    return maxsum