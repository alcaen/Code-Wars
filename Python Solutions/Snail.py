def snail(snail_map):
    array=snail_map.copy()
    init=True
    def up(arreglo):
        y=[x for x in arreglo[0]]
        arreglo.pop(0)
        for i in range(len(arreglo)):
            y.append(arreglo[i][-1])
            arreglo[i].pop(-1)
        return(arreglo,y,False)
    def down(arreglo):
        y=[x for x in arreglo[-1]][::-1]
        arreglo.pop(-1)
        arreglo=arreglo[::-1]
        for i in range(len(arreglo)):
            y.append(arreglo[i][0])
            arreglo[i].pop(0)
        arreglo=arreglo[::-1]
        return(arreglo,y,True)
    condition=init
    lista=array
    solution=[]
    final=[]
    for i in range(len(array)):
        if condition==True:
            res,sol,pos=up(lista)
        elif condition==False:
            res,sol,pos=down(lista)
        condition=pos
        solution.append(sol)
        lista=res
    for x in solution:
        for y in x:
            final.append(y)
    return final