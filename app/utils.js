/**
 *
 * Created by mjames on 8/11/2015.
 */

export class MyMath {
  static sum(...nums) {
    return nums.reduce(function(sum, num) {
      return sum + num;
    }, 0);
  }
}

MyMath.PI = 3.1415;