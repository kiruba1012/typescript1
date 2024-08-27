
const generateError =(message: string,code: number): never =>{
throw{
    message:message,
    code: code,
};
};
const result =generateError('kiruba',23);
console.log(result);