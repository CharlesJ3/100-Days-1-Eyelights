const str = "aest beapot cemper dap";
function toJadenCase (str) {
  let x = str.split(' ');

  let y = x.forEach(ele => {
    ele.charAt(0).toUpperCase();
  });

  console.log(x);
};

toJadenCase(str);