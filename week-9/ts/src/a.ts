//  type lets us define the optional data types , interface doesn't

type GreetArg = number | string

const greet = (id: GreetArg) => {
    console.log("thjhfjdhfjdsa" + id)
}

greet(5245)
greet("4545454")