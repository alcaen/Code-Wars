def digital_root(n):
    accum=0
    for digit in str(n):
        accum+=int(digit)
    if accum>9:
        return(digital_root(accum))
    else:
        return(accum)