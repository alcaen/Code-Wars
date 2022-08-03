def create_phone_number(n):
    number=[]
    for i in range(len(n)):
        if i<=2:
            if i==0:
                number.append("(")
                number.append(str(n[i]))
            elif i==2:
                number.append(str(n[i]))
                number.append(")")
                number.append(" ")
            else:
                number.append(str(n[i]))
        elif i>=3 and i<=5:
            if i==5:
                number.append(str(n[i]))
                number.append("-")
            else:
                number.append(str(n[i]))
        else:
            number.append(str(n[i]))
    final="".join(number)
    return(final)