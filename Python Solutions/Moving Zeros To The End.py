def move_zeros(array):
    copy=[]
    prov=[]
    for element in range(len(array)):
        if array[element]==0 or array[element]==0.0:
            if type(array[element])==int or type(array[element])==float:
                prov.append(array[element])
            else: 
                copy.append(array[element])
        else:
            copy.append(array[element])
    return (copy + prov)