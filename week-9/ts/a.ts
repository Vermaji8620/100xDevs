// cCreate a function that takes another function as input, and runs it after 1 second.

const torun = () => {
    console.log("running")
    return 3;
}

const func = (tunrun: () => number) => {
    setTimeout(() => {
        const fdfd = tunrun();
        console.log(fdfd)
    }, 3000);
}

func(torun)