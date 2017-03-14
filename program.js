 
        if (process.argv.length < 4) {
            console.log("Please provide input file path and N value");
            process.exit(1);
        }

        var fs = require('fs')
        var filename = process.argv[2];
        var N = process.argv[3];
        
        function search(){ 
            return fs.readFile(filename, 'utf8', function(err, data) {
                if (err) throw err;
                
                //tokenize the given string
                var param = data.split(",");
                var arrItems=[];

                //validate N value
                if(N>(param.length-1)|| N<0){
                    console.log("Value of N should be between then 0 and" + (param.length)+ " for the given Input");
                    process.exit(1);
                }

                //Trims the array element
                for(var paramIndex=0;paramIndex<param.length;paramIndex++){
                    if(paramIndex==0){
                        arrItems[paramIndex]= (param[paramIndex].substring(2,param[paramIndex].length-1));
                    }
                    else if(paramIndex==param.length-1){
                        arrItems[paramIndex]= (param[paramIndex].substring(1,param[paramIndex].length-2));
                    }
                    else{
                        arrItems[paramIndex]= (param[paramIndex].substring(1,param[paramIndex].length-1));
                    }
                }
                var arrLen = arrItems.length;
                
                //LexoGraphical Sorting 
                for(var i=0;i<arrLen;i++){
                        for(var j=0;j<arrLen;j++){
                            if(arrItems[i].localeCompare(arrItems[j])<0){
                                var temp = arrItems[j];
                                arrItems[j]=arrItems[i];
                                arrItems[i]=temp;
                            }
                        }
                    }
                    
                // Sorted Array for the reference
                console.log("Sorted Array :");
				arrItems.forEach(function(element) {
                    console.log(element);
                }, this);
            
            // Algorithm Implimentation
            for(var iIndex = 0;iIndex<arrLen;iIndex++){
                console.log();
                
                if(iIndex==0){
                    console.log("The closest "+N+" items for "+arrItems[iIndex]+" is ");
                    for(var j=iIndex+1;j<=N;j++){
                        console.log(arrItems[j]+",");
                    }
                } 

                else if(iIndex==arrLen-1){
                    console.log("The closest "+N+" items for "+arrItems[iIndex]+" is ");
                        for(var j=iIndex-1;j>=(arrLen-N)-1;j--){
                            console.log(arrItems[j]+",");
                        }
                }			
                else if(iIndex>0 && iIndex<arrLen-1){
                    var lfI =iIndex-1,rfI=iIndex+1,tempN=0,strIndex=0;
                    console.log("The closest "+N+" items for "+arrItems[iIndex]+" is ");
                    while(lfI>=0 && rfI<=arrLen-1 && tempN<N){
                        
                        //Compares every Index of the string using using charCodeAt() 
                        while(strIndex < arrItems[lfI].length || strIndex < arrItems[rfI].length){
                            if((arrItems[rfI].charCodeAt(strIndex) - arrItems[iIndex].charCodeAt(strIndex))==(arrItems[iIndex].charCodeAt(strIndex)-arrItems[lfI].charCodeAt(strIndex))){						
                                    strIndex++;
                            }
                            else if( Math.abs((arrItems[rfI].charCodeAt(strIndex)-arrItems[iIndex].charCodeAt(strIndex))) < Math.abs((arrItems[iIndex].charCodeAt(strIndex)-arrItems[lfI].charCodeAt(strIndex)))){
                                console.log(arrItems[rfI]+",");
                                rfI++;tempN++;
                                strIndex=0;
                                break;
                            }
                            else if(Math.abs((arrItems[rfI].charCodeAt(strIndex)-arrItems[iIndex].charCodeAt(strIndex))) > Math.abs(arrItems[iIndex].charCodeAt(strIndex)-arrItems[lfI].charCodeAt(strIndex))){
                                console.log(arrItems[lfI]+",");
                                lfI--;tempN++;
                                strIndex=0;
                                break;
                            }
                        }
                        if(lfI>=0 && rfI<arrLen && arrItems[lfI].length==arrItems[rfI].length && strIndex==arrItems[rfI].length){
                            console.log(arrItems[rfI]+",");
                                rfI++;tempN++;
                                strIndex=0;
                        }					
                        if(lfI==-1){
                            while(tempN<N){
                                console.log(arrItems[rfI]+",");
                                rfI++;tempN++;
                            }
                        }
                        else if(rfI==arrLen){
                            while(tempN<N){
                                console.log(arrItems[lfI]+",");
                                lfI--;tempN++;
                            }
                        }
                    }
                }
    		}
         }
    );}
 search();