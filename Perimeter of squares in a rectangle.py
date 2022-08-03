def perimeter(n):
    a=[]
    x=1
    for i in range(1,n+2):
        if i<=2:
            a.append(x)
        else:
            a.append(sum(a[i-3:i-1]))
    return((sum(a))*4)