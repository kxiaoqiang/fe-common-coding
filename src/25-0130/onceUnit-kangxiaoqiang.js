

/**
 * 给定一个非空整数数组，除了某个元素只出现一次以外，其余每个元素均出现两次。找出那个只出现了一次的元素。

    in : [4,1,2,1,2]
    output: 4

    in : [1 , 1, 2]
    output: 2
 */

const onceUnit = arr => {
   let res = arr[0]
   for (let i = 1; i < arr.length; i++) {
      res = res ^ arr[i]
   }
   return res
}