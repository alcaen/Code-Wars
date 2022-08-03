def get_drink_by_profession(param):
    word=param.lower()
    Lst={"jabroni":"Patron Tequila",
            "school counselor": "Anything with Alcohol",
            "programmer":"Hipster Craft Beer",
            "bike gang member":"Moonshine", 
            "politician":"Your tax dollars",
            "rapper":"Cristal"}
    if word in Lst:return(Lst[word])
    else:return("Beer")