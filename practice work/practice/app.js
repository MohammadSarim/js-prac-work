//  src="https://code.jquery.com/jquery-3.3.1.slim.min.js" integrity="sha384-q8i/X+965DzO0rT7abK41JStQIAqVgRVzpbzo5smXKp4YfRvH+8abtTE1Pi6jizo" crossorigin="anonymous">
//  src="https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.14.3/umd/popper.min.js" integrity="sha384-ZMP7rVo3mIykV+2+9J3UJ46jBk0WLaUAdn689aCwoqbBJiSnjAK/l8WvCWPIPm49" crossorigin="anonymous">
//  src="https://stackpath.bootstrapcdn.com/bootstrap/4.1.1/js/bootstrap.min.js" integrity="sha384-smHYKdLADwkXOn1EmN1qk/HfnUcbVRZyYmZ4qpPea6sjB/pTJ0euyQp0Mk8ck+5T" crossorigin="anonymous"> 
 
 

 var heading1 = document.createElement('H1');
 var heading2 = document.createElement('H1');
 
//  heading1.setAttribute("class" , "center-block");
 var heading1Text = document.createTextNode('FILL THIS FORM FOR ENROLL: ');
 var heading2Text = document.createTextNode('H1');
 
 heading2.appendChild(heading2Text);
 
 
 heading1.setAttribute('class' , 'container ')
 document.body.appendChild(heading2)

 var input = document.createElement('Input');
    input.setAttribute('type' , 'text' );
    input.setAttribute('class' , 'form-control')
var em   = document.createElement('input');

em.setAttribute('type' , 'text');    
 
 heading1.appendChild(heading1Text);
document.body.appendChild(heading1);
document.body.appendChild(input);
document.body.appendChild(em);