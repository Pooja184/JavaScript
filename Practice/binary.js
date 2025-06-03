console.log("find number in array");
let nums = [1, 2, 3, 4, 5, 6];
let targetN = 2;

const target = (nums,targetN) => {
  let left = 0;
  let right = nums.length - 1;
  while (left <=right) { 
      //ex. left= 0idx, right=5, then the condition will be 0<5
      let midElementIdx = Math.floor((left+right) / 2);
      // console.log(midElementIdx);
      let midElementEl=nums[midElementIdx]
      if(targetN==midElementEl){
        // console.log("num found");
        return "number found"
      }else if(targetN<midElementEl){//ex. 6<3
          right=midElementIdx-1
      }else{
        left=midElementIdx+1
      }
  }
  return "not found"
};
// target(nums)
console.log(target(nums,targetN));
