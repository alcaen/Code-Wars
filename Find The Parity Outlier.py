def find_outlier(integers):
    par=0
    inp=0
    for element in integers:
        if element%2==0:
            par+=1
            parr=element
        else:
            inp+=1
            inpa=element
    if inp==1:
        return inpa
    elif par==1:
        return parr