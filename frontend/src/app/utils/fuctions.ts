export function proxyToArr(proxy: any) {
  const tmp = proxy.map((x: any) => {
    return { addrs: x[0], type: parseInt(x[1]) };
  });

  return tmp;
  // console.log(tmp);
}

export function proxyToArrVo(proxy: any) {
  const pergunta = proxy[0];
  const opcoes = proxy[1].map((x: any) => x);
  const votaram = proxy[8].map((x: any) => x);

  return { pergunta, opcoes, votaram };
  // return tmp;
  // console.log(tmp);
}
