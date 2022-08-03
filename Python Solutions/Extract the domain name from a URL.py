def domain_name(url):
    ext=["com","org","info","net","it","pro","php","us","html","fr","name","edu","biz","de","co","br","za","p","tv","uk","jp"]
    if "/" in url:
        try:
            if "." in (url.split("/")[2]):      
                if((url.split("/")[2].split(".")[-1])in ext):
                    if((url.split("/")[2].split(".")[-2]))in ext:
                        word=((url.split("/")[2].split(".")[-3]))
                    else:
                        word=(url.split("/")[2].split(".")[-2])
                elif ((url.split("/")[2].split(".")[-1])not in ext):
                    word=(url.split("/")[2].split(".")[-3])
            else:
                word=(url.split("/")[2])
        except:
            if "." in (url.split("/")[0]):      
                if((url.split("/")[0].split(".")[-1])in ext):
                    word=(url.split("/")[0].split(".")[-2])
                elif ((url.split("/")[0].split(".")[-1])not in ext):
                    word=(url.split("/")[0].split(".")[-3])
            else:
                word=(url.split("/")[0])
    elif "/" not in url:
        if "." in url:
            if(url.split(".")[0])=="www":
                word=(url.split(".")[1])
            elif (url.split(".")[0])!="www":
                word=(url.split(".")[0])
    return(word)