//here is a fence with n posts, each post can be painted with one of the k colors.

//You have to paint all the posts such that no more than two adjacent fence posts have the same color.

//Return the total number of ways you can paint the fence.

 


function  numOfWays(n, k){
   
    let same=k 
    let diff= k* (k-1)
    
    for(let i=3; i<=n; i++){
          let same_temp = same
          let diff_temp= diff
          same = diff 
          diff = same_temp *(k-1) +diff_temp * (k-1)
    }

    return same +diff 

}
console.log(numOfWays(3,2))