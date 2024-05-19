Java script Execution context [ js works on single thread  everything is proccessed]

It means how the js will run the code which you have write 
{} ----------> js runs on these context
1> Global Execution Context  ----> this ke andar
2> Function execution Context
3> Eval Ecxecution Context(property of Global E C)

It runs on two phase-------->

1> Global Execution Phase
It runs on this operator

2> Memory Creation Phase / Creation Phase           //

Example Code :-
________________________________________________
let val1 = 10
let val2 = 5
function addNum(num1, num2){
    let total = num1 + num2
    return total
}
let result1 = addNum(val1, val2)
let result2 = addNum(10, 2)

------------------------------------------------
val1 -> undefined
val2 -> undefined
addNum -> defination(function me jitna chig wo execute hoga)
result1 = undefined
result2 = undefined

________________________________________________

2> Execution Phase
val1 -> 10
val2 -> 5
addNum ->   It will Form a box(new executional contxt) every time when a function is called which will form  new variable enviroment and Ececution thread
 Memory Phase------->  
              val1 ----> undefined       
              val2 ----> undefined
              total----> undefined    

 Execution Context------->
              num1 -> 10
              num2 ->  5
              total -> 15 ---> It will go to Global Execution phase   

Global Phase Execution got deleted after all of their work      

Then their will be formation of New Variable Environment 
Then same thing will be repeat


************CALL STACK******************

The main concept in it is the when any method goes in the Global Execution After Execution it goes out


The complexity comes when There are many methods then 
the methods which goes last in the Globsl Execution will be goes out first (LIFFO ----> Last In firest out