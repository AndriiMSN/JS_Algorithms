function solve(num: number): number {
    let a:number = 0; 
    while(num > 9){
        a = a + num % 10;
        num = Math.floor(num / 10);
    }
   return a = a + num;
}