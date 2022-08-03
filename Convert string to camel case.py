def to_camel_case(text):
    x=[]
    upper=0
    for word in text:
        for letter in word:
            if letter == "_" or letter == "-":
                upper=1
            elif upper==1:
                x.append(letter.upper())
                upper=0
            else:
                x.append(letter)
    return("".join(x))