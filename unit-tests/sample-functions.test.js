const myFunctions = require('./sample-functions.js');

test('Testing sum -- success', () => {
  const target = 30;
  const result = myFunctions.sum(12, 18);
  expect(target).toBe(result);
});

test('Testing sum -- failure', () => {
    const target = 30;
    const result = myFunctions.sum(10, 10);
    expect(target).not.toBe(result);
});
  
test('Testing div -- success', () => {
    const target = 2;
    const result = myFunctions.div(10, 5);
    expect(target).toBe(result);
});
  
test('Testing div -- division by zero', () => {
    const target = Infinity;
    const result = myFunctions.div(10, 0);
    expect(target).toBe(result);
});

test('Testing div -- negative numbers', () => {
    const target = -2;
    const result = myFunctions.div(8, -4);
    expect(target).toBe(result);
});

test('Testing div -- decimals', () => {
    const target = 3.3333333333333335;
    const result = myFunctions.div(10, 3);
    expect(target).toBe(result);
});
  
test('Testing containsNumbers -- success', () => {
    const target = true;
    const result = myFunctions.containsNumbers('abc123def');
    expect(target).toBe(result);
});
    
test('Testing containsNumbers -- failure', () => {
    const target = true;
    const result = myFunctions.containsNumbers('abcdef');
    expect(target).not.toBe(result);
});

test('Testing containsNumbers -- numbers at the beginning', () => {
    const target = true;
    const result = myFunctions.containsNumbers('1abcdef');
    expect(target).toBe(result);
  });
  
  test('Testing containsNumbers -- numbers at the end', () => {
    const target = true;
    const result = myFunctions.containsNumbers('abcdef1');
    expect(target).toBe(result);
  });

  test('Testing containsNumbers -- special characters', () => {
    const target = false;
    const result = myFunctions.containsNumbers('a!b@c#d$e%f^g&h*i(j)k_l-m+n=o[p]q{r}st,u.v/w:x;y?z');
    expect(target).toBe(result);
  });
  
  test('Testing containsNumbers -- empty string', () => {
    const target = false;
    const result = myFunctions.containsNumbers('');
    expect(target).toBe(result);
  });

  test('Testing containsNumbers -- space', () => {
    const target = false;
    const result = myFunctions.containsNumbers(' ');
    expect(target).toBe(result);
  });
  