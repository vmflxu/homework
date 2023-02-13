function solution(sizes) {
    var maxW = 0;
    var maxH = 0;

    sizes.forEach((element,index) => {
        element.sort((a,b) => a-b);
        maxW = Math.max(maxW,element[0])
        maxH = Math.max(maxH,element[1])
    });
    
    var answer = maxW*maxH;
    return answer;
}