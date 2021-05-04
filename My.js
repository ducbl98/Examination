//Xây dựng lớp Circle
class Circle {
    constructor(x,y,radius,color) {
        this.x=x
        this.y=y
        this.radius=radius
        this.color=color
        this.canvas =document.getElementById('circle')
        this.ctx=this.canvas.getContext('2d')
    }
    render(){
        this.ctx.beginPath()
        this.ctx.fillStyle=this.color
        this.ctx.arc(this.x,this.y,this.radius,0,Math.PI*2,false)
        this.ctx.closePath()
        this.ctx.fill()
    }
}
//Xóa các phần tử giống x
function removeAllElements(arr, x) {
    let index = arr.indexOf(x);
    while (index > -1) {
        arr.splice(index, 1);
        index = arr.indexOf(x);
    }
    return arr
}
//Kiểm tra 1 số có phải là số Fibonacci không
function isFibonacci(x) {
    //1 số x là số Fibonacci khi và chỉ khi 5*n*n+4 hoặc 5*n*n-4 là số chính phương
    let a = 5*x*x+4
    let b = 5*x*x-4
    let sqr1=parseInt(Math.sqrt(a))
    let sqr2=parseInt(Math.sqrt(b))
    let c1= sqr1*sqr1===a
    let c2= sqr2*sqr2===b
    return c1||c2
}
//Tìm phần từ lớn nhất của mảng
function findMax(arr){
    let arr1=arr.sort(function (a,b) {
        return a-b
    })
    return arr1[arr1.length-1]
}