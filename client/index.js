async function foo () {
    console.log('hello')
    await new Promise((res) => {setTimeout(res, 1000)})
    console.log('goodbye')
}

foo()
