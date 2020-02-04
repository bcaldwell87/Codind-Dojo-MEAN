function bracesValid(str){
    var map = {
        "}": "{",
        "]": "[",
        ")": "("
    }
    var stack = [];
    for (var i = 0; i < str.length; i++){
        if (str[i] == "(" || str[i] == "[" || str[i] == "{"){
            stack.push(str[i]);
        }else if (str[i] == ")" || str[i] == "]" || str[i] == "}"){
            var last_in = stack.pop(); // "{"
            if (map[str[i]] != last_in){
                return false;
            }
        }
    }
    return !stack.length;
}

console.log(bracesValid("W(a{t}s[o(n{ c}o)m]e )h[e{r}e]!"))
console.log(bracesValid("D(i{a}l[ t]o)n{e"))
console.log(bracesValid("A(1)s[O (n]0{t) 0}k"))