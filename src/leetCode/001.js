// nums = [2,7,11,15], target = 9


// 题解1
function numsf(nums, target) {
  for (var index = 0; index < nums.length; index++) {
    let index2 = nums.indexOf(target - nums[index]) // 查出 插值的 位置

    // 大于 -1 代表存在  并且不相等 处理 两个数会相同
    if (index2 > -1 && index !== index2) {
      return [index, index2];
      break;
    }
  }
}


// 题解2
function numsf2(nums, target) {

  let arrs = []
  for (var index = 0; index < nums.length; index++) {

    for (let j = index + 1; j < nums.length; j++) {

      if (nums[index] + nums[j] === target) {
        arrs.push(index, j)
        return arrs

      }

    }

  }
}

function numsf3(nums, target) {
  let i = nums.length
  while (i >= 0) {
    console.log(nums[i]);
    
      i--
  }
}


let b = numsf3([2,7,11,15], 9)
console.log(b);