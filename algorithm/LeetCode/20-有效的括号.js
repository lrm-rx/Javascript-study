/**
 * 1. 新建一个栈
 * 2. 扫描字符串,遇左括号入栈,遇到和栈顶括号类型匹配的右括号就出栈,类型不匹配直接判定为不合法
 * 3. 最后栈空了就合法,否则不合法
 * 后面会使用字典
 */

let isValid = function(s) {
    if(s.length % 2 === 1) {
        return false;
    }
    const stack = [];
    for(let i = 0; i < s.length; i += 1) {
        const c = s[i];
        if(c === '(' || c === '{' || c === '[') {
            stack.push(c);
        }else{
            const t = stack[stack.length - 1];
            if(
                (t === '(' && c === ')') ||
                (t === '{' && c === '}') ||
                (t === '[' && c === ']')
            ){
                stack.pop();
            }else{
                return false;
            }
        }
    }
    return stack.length === 0;
}

isValid('{{{')

console.log(isValid('{{{'))



