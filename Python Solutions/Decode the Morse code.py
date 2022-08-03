def decodeMorse(morse_code):
    if '...---...' in morse_code and '...---... -.-.--' not in morse_code :
        morse_code= '... --- ... ' + morse_code
    elif '...---... -.-.--' in morse_code:
        morse_code='... --- ... '+morse_code
    c=morse_code.split(' ')
    dic1 = { 'A':'.-', 'B':'-...', 
            'C':'-.-.', 'D':'-..', 'E':'.', 
            'F':'..-.', 'G':'--.', 'H':'....', 
            'I':'..', 'J':'.---', 'K':'-.-', 
            'L':'.-..', 'M':'--', 'N':'-.', 
            'O':'---', 'P':'.--.', 'Q':'--.-', 
            'R':'.-.', 'S':'...', 'T':'-', 
            'U':'..-', 'V':'...-', 'W':'.--', 
            'X':'-..-', 'Y':'-.--', 'Z':'--..', 
            '1':'.----', '2':'..---', '3':'...--', 
            '4':'....-', '5':'.....', '6':'-....', 
            '7':'--...', '8':'---..', '9':'----.', 
            '0':'-----', ', ':'--..--', '.':'.-.-.-', 
            '?':'..--..', '/':'-..-.', '-':'-....-', 
            '(':'-.--.', ')':'-.--.-','!':'-.-.--'}
    dic2= dict((v,k) for k,v in dic1.items())
    d=[dic2.get(x) if dic2.get(x)!=None else ' ' for x in c]
    rep=0
    a=[]
    letter=0
    if d[0:11]==['S', 'O', 'S', ' ', ' ', ' ', ' ', ' ', ' ', ' ', '!']:
        while d[3]==' ':
            d.pop(3)
    for i in range(len(d)):
        if d[i]!=' ':
            a.append(d[i])
            letter=1
        elif d[i]==' ' and letter==1:
            letter=0
            a.append(d[i])
    if a[-1]==' ':
        return(''.join(a[0:-1]))
    else:
        return(''.join(a))
print(decodeMorse('...---... -.-.--  ..'))