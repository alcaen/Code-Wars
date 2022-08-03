import string

def is_pangram(s):
    s=s.lower()
    x=[]
    y=[]
    for letter in string.ascii_lowercase:
        x.append(letter)
    for word in s:
        for letter in word:
            if ((letter in x)==True) and letter not in y:
                y.append(letter)
    if len(x)==len(y):
        return True
    else:
        return False