
const map = (array = [], cb = item => item) => {
  return (function mapInterno(arrayInterno, counter) {
    const [cabeca, ...cauda] = arrayInterno;
    return arrayInterno.length === 0 ? [] : [
        cb(cabeca, counter, array), 
        ...mapInterno(cauda, counter + 1)
    ];
  })(array, 0);
};

export default map;
