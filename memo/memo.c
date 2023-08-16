#include <stdio.h>

int* twoSum(int* nums, int numsSize, int target, int* returnSize){
    // int leng = sizeof(nums) / sizeof(int);
    
    // 동적 배열 할당
    int *a = (int*)malloc(2 * sizeof(int));

    for(int i=0; i<numsSize-1; i++){
        for(int j=i+1; j<numsSize; j++){
            if(nums[i] + nums[j] == target){
                a[0] = i;
                a[1] = j;
                return a;
            }
        }
    }
    return NULL;
}

int main(){
    int nums[] = {2,7,11,15};
    int target = 9, numsSize = 4, returnSize = 4;

    int *result = twoSum(nums, numsSize, target, &returnSize);
    printf("%s", result);
}