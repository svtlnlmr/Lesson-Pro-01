function task1() {
    const num = 123456;
    const str = "IT School 'Hillel'";
    const bool = false;
    const numType = typeof num;
    const strType = typeof str;
    const boolType = typeof bool;
    console.log(`value: ${num}; type: ${numType}`);
    console.log(`value: ${str}; type: ${strType}`);
    console.log(`value: ${bool}; type: ${boolType}`);
    alert(`value: ${num}; type: ${numType}; value: ${str}; type: ${strType}; value: ${bool}; type: ${boolType}`);
}