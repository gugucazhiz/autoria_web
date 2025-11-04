function repd2<T>(...arrayqualquer: T[]) : T{
    console.log(arrayqualquer)
    return arrayqualquer[0];
}

repd2<String>("1","2","3","4");