def high(x):
    from string import ascii_letters
    dic=dict(zip(ascii_letters,list(range(1,len(ascii_letters)))))
    x=x.split()
    copyx=x.copy()
    dich=dict(zip(x,list(range(0,len(x)))))
    value=[]
    print(dich)
    suma=0
    for word in dich:
        for letter in word:
            if letter in dic:
                suma+=dic.get(letter)
        value.append(suma)
        suma=0
    return(copyx[value.index(max(value))])