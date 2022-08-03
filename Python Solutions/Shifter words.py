def shifter(st): 
    import re
    if st!="":
        s=st.split(' ')
        x=[re.findall('[HINOSXZMW]*',word) for word in s]
        try:
            x2=[w[0] for w in x]
            x3=list(dict.fromkeys([x2[i] for i in range(len(x2)) if x2[i]==s[i]]))
            res=len(x3)
        except:
            res=0
        return(res)
    else:
        return(0)