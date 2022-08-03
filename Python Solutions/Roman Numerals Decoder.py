def solution(roman):
    dic={'I':1,'V':5,'X':10,'L':50,'C':100,'D':500,'M':1000}
    a=[x for x in roman]
    b=[dic[z] for z in a]
    c=b[::-1]
    d=b[-1]
    for i in range(len(c)):
        try:
            if c[i]>c[i+1]:
                d-=c[i+1]
            else:
                d+=c[i+1]
        except:   
            pass
    return(d)