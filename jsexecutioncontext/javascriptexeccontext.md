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
the methods which goes last in the Globsl Execution will be goes out first (LIFFO ----> Last In first out)



Sure! Let's simplify the concept of the call stack with an easy-to-understand example.

What is the Call Stack?
Think of the call stack like a stack of plates in your kitchen. When you put a plate on the stack, you always put it on top. When you take a plate off, you always take the top one first. This is how the call stack works with functions in JavaScript.

How the Call Stack Works:
Calling a Function: When you call a function in your code, it's like putting a plate on the stack.
Top Plate: The function on top of the stack is the one currently being executed.
Removing a Plate: When a function finishes its job, you take that "plate" off the stack.
Empty Stack: When there are no plates left, it means all functions are done.

Example with Simple Code:

function greet() {
  console.log("Hello");
  askName();
  console.log("How are you?");
}

function askName() {
  console.log("What's your name?");
}

greet();

Step-by-Step Explanation:
Start: The stack is empty. We call the greet function, so we put greet on the stack.


[greet]

Inside greet: The first thing greet does is print "Hello". Then it calls askName, so we put askName on the stack.


[greet]
[askName]

Inside askName: The askName function prints "What's your name?". After that, it finishes, so we take askName off the stack.


[greet] 

Back to greet: After askName is done, we go back to greet. It prints "How are you?", then it finishes, so we take greet off the stack.


What's Happening?
When we call greet(), it goes on the stack.
Inside greet, we call askName(), so it goes on top of the stack.
After askName finishes, it is removed from the stack.
Finally, after greet finishes, it is removed too.
Now the stack is empty, and all our functions have done their jobs!

Summary:
The call stack is like a stack of plates where you put function calls.

The function on top is the one that is currently running.

When a function finishes, you take it off the stack.
This helps keep track of which function is running and ensures everything runs in the right order.
