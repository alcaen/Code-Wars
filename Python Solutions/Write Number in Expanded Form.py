def expanded_form(num):
    a=[x for x in str(num)][::-1]
    b=[]
    for i in range(len(a)):
        b.append(int(a[i])*(10**i))
    c=[str(z) for z in b[::-1] if z!=0]
    return ' + '.join(c)