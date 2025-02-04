let nav_link=document.querySelectorAll(".nav-link");
nav_link.forEach(element => {
    element.addEventListener('click',()=>{
        nav_link.forEach(element=>{

            element.classList.remove('active');
        }
        )
        element.classList.add('active');

    })
});

let menuselector=document.querySelectorAll(".menus button");
let item=document.getElementsByClassName("items");
menuselector.forEach(element=>{
    element.addEventListener('click',()=>{
        menuselector.forEach(element=>{
            element.classList.remove('activemenu')
        })
        element.classList.add('activemenu');
        Array.from(item).forEach(item=>{
            if(element.id=="all"){
                item.style.display="block";
            }
            else if(element.id=="drinks"){
                if(item.classList[1]=="drinks"){
                    item.style.display="block"
                    item.style.animation='hide 1s'

                }
                else{
                    item.style.display="none"
                }
            }
            else if(element.id=="lunch"){
                if(item.classList[1]=="lunch"){
                    item.style.display="block"
                    item.style.animation='hide 1s'

                }
                else{
                    item.style.display="none"
                }
            }
            else if(element.id=="dinner"){
                if(item.classList[1]=="dinner"){
                    item.style.display="block"
                    item.style.animation='hide 1s'
                }
                else{
                    item.style.display="none"
                }
            }
            
        })
    })
})

const bg=document.querySelector('.baguetteBoxOne');
const bgb=document.querySelectorAll('.baguetteBox-button');
if(bg){ 
    baguetteBox.run('.baguetteBoxOne');
}
if(document.querySelector('.reservation')){
const datepicker=document.querySelector(".datepicker");
const time=document.querySelector('.time');
const dateInput= document.querySelector('.date-input');
const timeInput= document.querySelector('.time-input');
const clear=document.querySelector('.clear');
const close=document.querySelector('.close');
const todayb=document.querySelector('.todayb');
const dates=document.querySelector('.dates');
const prev=document.querySelector('.prev');
const next=document.querySelector('.next');
let yeari=document.querySelector('.Year');
let monthi=document.querySelector('.month');
let datevalue=null;
let timevalue=null;
let personvalue=null;

let selectedDate=new Date();
let year=selectedDate.getFullYear();
let month=selectedDate.getMonth();
let c=0;

const monthNames = [
    "January", "February", "March", "April", "May", "June",
    "July", "August", "September", "October", "November", "December"
];





dateInput.addEventListener('click',()=>{
    datepicker.hidden=false;
})

timeInput.addEventListener('focusin',()=>{
    time.hidden=false;
    time.innerHTML=""
    for(let i=null;i!=12;i++){   
        if(i===null){
            i=12
        }
        const span1=document.createElement('span');
        const span2=document.createElement('span');

        span1.classList.add('timebutton');
        span1.textContent=i+":00 AM";
        time.appendChild(span1);
        span2.classList.add('timebutton');
        span2.textContent=i+":30 AM";
        time.appendChild(span2);
        
        if(i==12 ){
            i=0;
        }
    }
    for(let i=null;i!=12;i++){   
        if(i===null){
            i=12
        }
        const span1=document.createElement('span');
        const span2=document.createElement('span');

        span1.textContent=i+":00 PM";
        span1.classList.add('timebutton');
        time.appendChild(span1);
        span2.textContent=i+":30 PM";
        span2.classList.add('timebutton');

        time.appendChild(span2);
        
        if(i==12 ){
            i=0;
        }
    }
    const button=document.createElement("button");
    button.classList.add('timeclear');
    button.textContent="Clear";
    time.appendChild(button);
let span=document.querySelectorAll('.timebutton');
let clear=document.querySelector('.timeclear');

    span.forEach(element=>{
element.addEventListener('click',()=>{
   timeInput.value=element.textContent; 
   time.hidden=true;
})
})   

clear.addEventListener('click',()=>{
    timeInput.value="";
    time.hidden=true;
})
})

let personInput=document.querySelector('.person-input');
let person=document.querySelector('.person');
personInput.addEventListener('focusin',()=>{
    person.hidden=false;
    person.innerHTML="";
    let spanp=document.createElement('span');
    spanp.textContent="Select Person*";
    spanp.classList.add('sp');
    person.appendChild(spanp);      
    for(let i=1;i<=7;i++){   
        spanp=document.createElement('span');
        spanp.textContent=i;
        spanp.classList.add('sp');
        person.appendChild(spanp);
    }
    let sp=document.querySelectorAll('.sp');
    sp.forEach(element=>{
        element.addEventListener('click',()=>{
            personInput.value=element.textContent;
            person.hidden=true;
        })
    })
})


const names=document.querySelector('.names');
const name_input=document.querySelector('.name-input');
const spann=document.createElement('span');
name_input.addEventListener('focusout',()=>{
    if(name_input.value===''){
        spann.classList.add('error');
        spann.textContent="Please enter your name";
        names.appendChild(spann);
    }
})
const email=document.querySelector('.email');
const email_input=document.querySelector('.email-input');

const spane=document.createElement('span');
email_input.addEventListener('focusout',()=>{
    if(email_input.value===''){
        spane.classList.add('error');
        spane.textContent="Please enter your email";
        email.appendChild(spane);
    }
})
const number=document.querySelector('.number');
const number_input=document.querySelector('.number-input');

const spannu=document.createElement('span');
number_input.addEventListener('focusout',()=>{
    if(number_input.value===''){
        spannu.classList.add('error');
        spannu.textContent="Please enter your number";
        number.appendChild(spannu);
    }
})

const bt=document.querySelector('.bt');
const h3=document.createElement('h3');
bt.addEventListener('click',()=>{
    if(name_input.value===''){
        spann.classList.add('error');
        spann.textContent="Please enter your name";
        names.appendChild(spann);
    }else{
        spann.remove()
    }
    if(email_input.value===''){
        spane.classList.add('error');
        spane.textContent="Please enter your email";
        email.appendChild(spane);
    }else{
        spane.remove()
    }
    if(number_input.value===''){
        spannu.classList.add('error');
        spannu.textContent="Please enter your number";
        number.appendChild(spannu);
    }else{
        spannu.remove()
    }
    if(name_input.value==''||email_input.value==''||number_input.value==''||timeInput.value==''||personInput.value==''||dateInput.value==''){
        h3.textContent='Did you fill in the form properly?';
        h3.classList.add('error')
        document.querySelector('.ec').appendChild(h3);
        document.querySelector('.form').classList.add('errors');
        setTimeout(()=>{
        document.querySelector('.form').classList.remove('errors');
        },1000);
    }
    else{
        h3.remove()
    }
})


const createButton = (text,isDisabled=false,isToday=false) => { 
    const button=document.createElement("button");
    button.textContent=text;
    button.disabled=isDisabled;
    button.classList.toggle("today",isToday);
    button.classList.add('datesButton');

    return button;
  }
const displayDate = () => {
    dates.innerHTML=""
    let cm=1;
let lastOfPrevMonth=new Date(year,month+cm-1,0);
let nextMonth=new Date(year,month+cm,1);
let lastOfCurrentMonth=new Date(year,month+cm,0);
yeari.textContent=lastOfCurrentMonth.getFullYear();
monthi.textContent=monthNames[lastOfCurrentMonth.getMonth()];
    const today=new Date().getDate();
    let count=1;
    
    for(let i=1;i<=lastOfCurrentMonth.getDate();i++){
        if(i===1){
            for(let i=0;i<=lastOfPrevMonth.getDay();i++){
                const text=lastOfPrevMonth.getDate()-lastOfPrevMonth.getDay()+i;
                const button=createButton(text,true,false);
                dates.appendChild(button);
                count++;
            }
        }
        if(lastOfCurrentMonth.getFullYear()===selectedDate.getFullYear()){
            if(lastOfCurrentMonth.getFullYear()===selectedDate.getFullYear()&&lastOfCurrentMonth.getMonth()===selectedDate.getMonth()&&i===selectedDate.getDate()){            
            const button=createButton(i,false,false);
            count++;    
            button.classList.add('today');
            dates.appendChild(button);
            }
            else{
                const button=createButton(i,false,false);
                count++;
                dates.appendChild(button);
            }
        }
        else{
            const button=createButton(i,true,false);
            count++;
            dates.appendChild(button);
        }
         
        if(i===lastOfCurrentMonth.getDate()){
            for(let i=1;count<=42;i++){
                const button=createButton(i,true,false);
                count++;
                dates.appendChild(button);
                
            }
        }
        
        
    }
    
    prev.addEventListener('click',()=>{
        dates.innerHTML="";
        cm--;
        lastOfPrevMonth=new Date(year,month+cm,0);
        yeari.textContent=lastOfPrevMonth.getFullYear();
        monthi.textContent=monthNames[lastOfPrevMonth.getMonth()];
        for(let i=1;i<=lastOfPrevMonth.getDate();i++){
             if(count===43){
            
            count=1;
        }
            if(i===1){
                let lastOfPrevMonths=new Date(year,month+cm-1,0);
                for(let i=0;i<=lastOfPrevMonths.getDay();i++){
                const text=lastOfPrevMonths.getDate()-lastOfPrevMonths.getDay()+i;
                const button=createButton(text,true,false);
                dates.appendChild(button);
                count++;
            }
            }
            
            if(lastOfPrevMonth.getMonth()==selectedDate.getMonth() &&lastOfPrevMonth.getFullYear()===selectedDate.getFullYear()){
            if(lastOfCurrentMonth.getFullYear()===selectedDate.getFullYear()&&lastOfCurrentMonth.getMonth()===selectedDate.getMonth()&&i===selectedDate.getDate()){            
            const button=createButton(i,false,false);
            count++;    
            button.classList.add('today');
            dates.appendChild(button);
            }
            else{
                const button=createButton(i,false,false);
                count++;
                dates.appendChild(button);
            }

            }
            else{
            const button=createButton(i,true,false);
            dates.appendChild(button)
                count++;
                

            }
            if(i===lastOfPrevMonth.getDate()){
                
                for(let i=1;count<=42;i++){
                const button=createButton(i,true,false);
                count++;

                dates.appendChild(button);
                }
            }
            
            
        }
    })
    next.addEventListener('click',()=>{
        dates.innerHTML="";
        lastOfPrevMonth=new Date(year,month+cm,0);
        cm++;
        nextMonth=new Date(year,month+cm,0);
        yeari.textContent=nextMonth.getFullYear()
        monthi.textContent=monthNames[nextMonth.getMonth()];
          
        for(let i=1;i<=nextMonth.getDate();i++){
            if(count===43){
            
            count=1;
        }
            if(i===1){
            for(let i=0;i<=lastOfPrevMonth.getDay();i++){
                const text=lastOfPrevMonth.getDate()-lastOfPrevMonth.getDay()+i;
                const button=createButton(text,true,false);
                dates.appendChild(button);
                count++;
            }
            }
            
            if(nextMonth.getMonth()==selectedDate.getMonth() &&nextMonth.getFullYear()===selectedDate.getFullYear()){
            if(lastOfCurrentMonth.getFullYear()===selectedDate.getFullYear()&&lastOfCurrentMonth.getMonth()===selectedDate.getMonth()&&i===selectedDate.getDate()){            
            
            const button=createButton(i,false,false);
            count++;    
            button.classList.add('today');
            dates.appendChild(button);    
            }
            else{
                const button=createButton(i,false,false);
                count++;
                dates.appendChild(button);
            }
            }
            else{
            const button=createButton(i,true,false);
                count++;
            dates.appendChild(button);
            }
            if(i===nextMonth.getDate()){
            for(let i=1;count<=42;i++){
                const button=createButton(i,true,false);    
                
                count++;
                dates.appendChild(button);
                
            }
        }
            
            
        }
    })
    
    
 }

 displayDate();
const datesButton=document.querySelectorAll('.datesButton');

 datesButton.forEach(element => {
    element.addEventListener('click',()=>{
        datesButton.forEach(elements=>{
            elements.classList.remove('selected')
        })
        if(element.disabled==false){
            element.classList.add('selected')
        }
        dateInput.value=element.textContent+" "+monthi.textContent+", "+yeari.textContent;
        datevalue=()=>{
            return element.textContent+" "+monthi.textContent+", "+yeari.textContent;
        };
        datepicker.hidden=true;
    })
 });
todayb.addEventListener('click',()=>{
        dateInput.textContent=selectedDate.getDate()+" "+monthNames[selectedDate.getMonth()]+", "+selectedDate.getFullYear();
        datepicker.hidden=true;
        datevalue=()=>{
            return selectedDate.getDate()+" "+monthNames[selectedDate.getMonth()]+", "+selectedDate.getFullYear();
        }
        console.log(datevalue());
        
        
})
function dateInputValue(){
        datevalue=selectedDate.getDate()+" "+monthNames[selectedDate.getMonth()]+", "+selectedDate.getFullYear();
        
        return datevalue;
    }
clear.addEventListener('click',()=>{
        dateInput.value="";
        datepicker.hidden=true;
});
close.addEventListener('click',()=>{
        datepicker.hidden=true;
})}