def maskify(cc):
    x=[]
    y=[]
    if len(cc)>4:
        for letter in cc:
            x.append(letter)
        for i in range(len(x)-4):
            y.append("#")
        for i in range((len(x)-4),len(x)):
            y.append(x[i])
        return("".join(y))
    else:
        return(cc)