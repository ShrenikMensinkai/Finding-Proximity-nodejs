# Finding-Proximity-nodejs

Problem Statement :
Write a program to find the N closest strings (not numbers) for each string in an array. 
Strictly consider the time and memory complexity while coding.

Command format:
program <InputArrayFile>  <N>

Example Command:
program input_array_file.txt 38

Example:
For an input array as [ “1”, “2”, “3”, “4”, “5”, “6” ] and N = 3

Output:
The closest 3 items for 1 is  2,3,4
The closest 3 items for 2 is  1,3,4
The closest 3 items for 3 is  2,4,5
The closest 3 items for 4 is  3,5,6
The closest 3 items for 5 is  3,4,6
The closest 3 items for 6 is  3,4,5

Testing Method:
Start testing your code on smaller arrays but consider that user can give input in the range of 50,000 items
in an array and N being 1000 . 


Important Notes:  
Use can use basic data structure libraries like maps, lists but not algorithms like Top N. It's not index based Top N
