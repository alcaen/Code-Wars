def spin_words(sentence):
    spin=[]
    complete=[]
    text=""
    spinword=""
    b=sentence.split()
    for element in b:
        if len(element) >=5:
            for letter in element:
                spin.append(letter)
            spin=spin[::-1]
            for let in spin:
                spinword+=let
            complete.append(spinword)
            spinword=""
            spin=[]
        elif len(element)<5:
            complete.append(element)
        text=" ".join(complete)
    return (text)