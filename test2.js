const fs = require('fs');
var information= fs.readFileSync('rand.json');
var newlineBr = require('newline-br'); 
var randomization = require('shuffle-array');
var math=require('math');
var wri= fs.createWriteStream("out.txt");
var parsed = JSON.parse(information);
var teamdata=[];
for(var x in parsed.students){
teamdata.push(parsed.students[x]);//passing values into the array teamdata

}


randomization(teamdata);//randomizing the values of array


console.log(teamdata);
const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,                      //for taking input value
  output: process.stdout
});
console.log('enter the team size and it should be less than ');
console.log(teamdata.length);

rl.question('enter size of team ', (n) => {
  console.log(`the size  of each team: ${n}`);

  rl.close();
  
 
  if(n>teamdata.length)
  {
    console.log('team size exceeded');
  }

  else
  {
    if(teamdata.length%n==0)
    {
        console.log("teams can be divided into equal parts");
    }
    else{
        console.log("teams cant be divided into equal parts but we can divide into un equal parts");
    }
    var noteams=math.floor(teamdata.length/n);
    var lsize=math.floor(n/1);//for operations on variable n storing into other variable
    console.log(lsize);
    console.log(noteams);
    var teamnumber=1;
    for(var i=0;i<noteams;i++)
    {
        wri.write("\n\n");
        console.log('team');//this line is for terminal display
        console.log(`${teamnumber}`);//this line is for terminal display
        wri.write("team"+teamnumber+":"+"\n\n");//this line  is for writing to the file
        teamnumber++;
        console.log('                           ');//this line is for terminal display
        var k=math.floor(i*lsize);
        var m=math.floor(lsize+i*lsize);//for reducing time for program calculating outside of loop
        for(var j=k; j< m; j++)
        {
            wri.write(JSON.stringify(teamdata[j])+"\n");//this line  is for writing to the file
            console.log(teamdata[j]);//this line is for terminal display
        }
        console.log('                              ');//this line is for terminal display
        
    }
    if ( teamdata.length%lsize!=0)
    {
    wri.write("\n\n");//this line  is for writing to the file
    console.log('                           ');//this line is for terminal display
    console.log('team');//this line is for terminal display
    console.log(`${teamnumber}`);//this line is for terminal display
    wri.write("team"+teamnumber+":"+"\n\n");
    }
    
    for(;j<teamdata.length;j++)
    {
        wri.write(JSON.stringify(teamdata[j])+"\n");//this line  is for writing to the file
        console.log(teamdata[j]);//this line is for terminal display
    }
   
}

});
