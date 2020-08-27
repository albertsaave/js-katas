export default {

  add: (string) => {
    if (string === "") return 0;
    return string
      .split(",")
      .map(s => parseInt(s))
      .reduce((a,b) => a + b)

    // return string.split(',').map(e => parseInt(e)).concat([0]).reduce((a,  b) => a + b)
    if (!string) {
      return 0
    } else {
      const numberLines = string.replace('\n',',')
      const numbers = numberLines.split(',').map(e=> {

        return parseInt(e);
      })

      if (numbers.length === 1) {
        return numbers[0]
      }
      let value = 0;
      for (let i = 0; i < numbers.length; i++) {
        value += numbers[i]
      }
      return value;
    }
    
  }

}