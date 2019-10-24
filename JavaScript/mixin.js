  const mix2 = [
    {
      override: true,
      toString() {
        return `${this.name} - ${this.city} - ${this.born}`;
      }
    },
    {
      override: false,
      age() {
        const year = new Date().getFullYear();
        const born = new Date(this.born).getFullYear();
        return year - born;
      }
    }
  ];

  const mix1 = [
      { prof: 'programmer' },
      { prof: 'teacher' },
  ];

  const obj = {
      name: 'Mary',
      agy: 'any',
      funcs: () => {}
  };


  const unpack = (data, arr = []) => {
    if(Array.isArray(data)){
        for(item of data) {
           unpack(item, arr);
        }
    } else {
      arr.push(item);
    }
    return arr;
  }

  const extend = (obj, ...mixin) => {
      const unpackedData = unpack(mixin);
        for(key in unpackedData ) {
            Object.keys(unpackedData[key]).forEach(k => obj[k] = '');
        }
        console.log(obj);
      return obj;
  };

// wrapping
  const forWrapping = (n1, n2, n3, n4) => ([n1, n2, n3, n4]);
  const forWrappingPlus = (n1, n2, n3, n4) => (n1+n2+n3+n4);

  const wrap = (obj, ...f) => {   
      if(obj.funcs) {  
               return (...args) => {
                for(let ff of f) {
                   console.log(ff(...args));
                }
              }
      }
  }

  //logable mixin
   const objLog = {
       name: 'In',
       age: 21,
       click: ()=> {
          console.log(this.name + ' ' + this.age);
       },

   } 

   const logable = (obj, mixin) => {
        for(let op in obj) {
           console.log(obj[op]);
        }
   } 

  extend(obj, mix1, mix2);
  const wrapData = wrap(obj, forWrapping, forWrappingPlus);
  wrapData(1, 2, 3, 7);

  logable(obj, mix);
