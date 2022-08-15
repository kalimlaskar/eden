import styled from 'styled-components';

export const WelcomeKit = styled.div`


.timeline{
    counter-reset: test 0;
    position: relative;
    width: 356px;
    display: flex;
    margin-left: -38px;
    justify-content: space-evenly;
  }
  
  .timeline li{
    list-style: none;
    float: left;
    width: 33.3333%;
    position: relative;
    text-align: center;
    text-transform: uppercase;
  }
  
  
  
  .timeline li:before{
    counter-increment: test;
    content: counter(test);
    width: 30px;
    height: 30px;
    border: 1px solid #ddd;
    border-radius: 50%;
    display: block;
    text-align: center;
    line-height: 29px;
    margin: 0 auto 10px auto;
    background: #fff;
    color: #000;
    transition: all ease-in-out .3s;
    cursor: pointer;
  }
  
  .timeline li:after{
    content: "";
    position: absolute;
    width: 60px;
    height: 1px;
    background-color: grey;
    top: 17px;
    right: 60px;
    z-index: -999;
    -webkit-transition: all ease-in-out .3s;
    transition: all ease-in-out .3s;
  }
  
  .timeline li:first-child:after{
    content: none;
  }
  .timeline li.active-tl{
    color: #555555;
  }
  .timeline li.active-tl:before{
    background: #664de5;
    color: #F1F1F1;
  }
  
  .timeline li.active-tl + li:after{
    background: #664de5;
  }


.welcomeContainer {
    display: flex;
    flex-direction: column;  
    align-items: center;
    width:356px;
    margin:auto;
    position:absolute;
    left:50%;
    top:50%;
    transform: translate(-50%,-50%);
}
h2{
    font-size:24px;
    line-height:36px;
    font-weight:bold;
    color:#262c38;
    width: max-content;
    margin:0px;
    padding:0px;
}
p{
    font-size:16px;
    line-height:28px;
    font-weight:500;
    color:#00000085;
    margin:0px;
    padding:0px; 
}
input{
width: 100%;
border-radius: 4px;
border: 1px solid #ddd;
padding: 12px 16px;
margin-bottom: 10px;
}
.btn.btn-primary{
    width:100%;
    background:#664de5;
    color:#fff;
    padding:14px;
    border-radius:6px;
    border:none;
    margin:20px 0px;
    cursor:pointer;
    font-size:16px;
    font-weight:500;
}
.welcomeForm{
    display: flex;
    flex-wrap: wrap;
    padding-top:20px;
}
.welcomeForm label{
    margin: 10px 0px;
    font-weight:500;
}
`;


export const HomeKit = styled.div`
.timeline{
    counter-reset: test 0;
    position: relative;
    width: 356px;
    display: flex;
    margin-left: -38px;
    justify-content: space-evenly;
  }
  
  .timeline li{
    list-style: none;
    float: left;
    width: 33.3333%;
    position: relative;
    text-align: center;
    text-transform: uppercase;
  }
  
  
  
  .timeline li:before{
    counter-increment: test;
    content: counter(test);
    width: 30px;
    height: 30px;
    border: 1px solid #ddd;
    border-radius: 50%;
    display: block;
    text-align: center;
    line-height: 29px;
    margin: 0 auto 10px auto;
    background: #fff;
    color: #000;
    transition: all ease-in-out .3s;
    cursor: pointer;
  }
  
  .timeline li:after{
    content: "";
    position: absolute;
    width: 60px;
    height: 1px;
    background-color: grey;
    top: 17px;
    right: 60px;
    z-index: -999;
    -webkit-transition: all ease-in-out .3s;
    transition: all ease-in-out .3s;
  }
  
  .timeline li:first-child:after{
    content: none;
  }
  .timeline li.active-tl{
    color: #555555;
  }
  .timeline li.active-tl:before{
    background: #664de5;
    color: #F1F1F1;
  }
  
  .timeline li.active-tl + li:after{
    background: #664de5;
  }

.HomeKitContainer {
    display: flex;
    flex-direction: column;  
    align-items: center;
    width:356px;
    margin:auto;
    position:absolute;
    left:50%;
    top:50%;
    transform: translate(-50%,-50%);
}
.homeKitForm label{
    margin: 10px 0px;
    font-weight:500;
}
.homeKitForm{
    display: flex;
    flex-wrap: wrap;
    padding-top:20px;
}

h2{
    font-size:24px;
    line-height:36px;
    font-weight:bold;
    color:#262c38;
    margin:0px;
    padding:0px;
    width: max-content;
}
p{
    font-size:16px;
    line-height:28px;
    font-weight:500;
    color:#00000085;
    margin:0px;
    padding:0px; 
}
    input{
    width: 100%;
    border-radius: 4px;
    border: 1px solid #ddd;
    padding: 12px 16px;
    margin-bottom: 10px;
    }
    .btn.btn-primary{
        width:100%;
        background:#664de5;
        color:#fff;
        padding:14px;
        border-radius:6px;
        border:none;
        margin:20px 0px;
        cursor:pointer;
        font-size:16px;
        font-weight:500;
    }
    .homeKitUrl{
        display:flex;
        width:100%;
    }
    .homeKitUrl input:nth-child(1){
        border-right:0px;
        border-radius: 4px 0px 0px 4px;
    }
    .homeKitUrl input:nth-child(2){        
        border-radius: 0px 4px 4px 0px;
    }
`;

export const PlanningKit = styled.div`
.timeline{
    counter-reset: test 0;
    position: relative;
    width: 356px;
    display: flex;
    margin-left: -38px;
    justify-content: space-evenly;
  }
  
  .timeline li{
    list-style: none;
    float: left;
    width: 33.3333%;
    position: relative;
    text-align: center;
    text-transform: uppercase;
  }
  
  
  
  .timeline li:before{
    counter-increment: test;
    content: counter(test);
    width: 30px;
    height: 30px;
    border: 1px solid #ddd;
    border-radius: 50%;
    display: block;
    text-align: center;
    line-height: 29px;
    margin: 0 auto 10px auto;
    background: #fff;
    color: #000;
    transition: all ease-in-out .3s;
    cursor: pointer;
  }
  
  .timeline li:after{
    content: "";
    position: absolute;
    width: 60px;
    height: 1px;
    background-color: grey;
    top: 17px;
    right: 60px;
    z-index: -999;
    -webkit-transition: all ease-in-out .3s;
    transition: all ease-in-out .3s;
  }
  
  .timeline li:first-child:after{
    content: none;
  }
  .timeline li.active-tl{
    color: #555555;
  }
  .timeline li.active-tl:before{
    background: #664de5;
    color: #F1F1F1;
  }
  
  .timeline li.active-tl + li:after{
    background: #664de5;
  }
.PlanContainer {
    display: flex;
    flex-direction: column;  
    align-items: center;
    width:356px;
    margin:auto;
    position:absolute;
    left:50%;
    top:50%;
    transform: translate(-50%,-50%);
}
.planForm label{
    margin: 10px 0px;
    font-weight:500;
}
.planForm{
    display: flex;
    flex-wrap: wrap;
    padding-top:20px;
}
.planForm div{
    display:inline-flex;
}
h2{
    font-size:24px;
    line-height:36px;
    font-weight:bold;
    color:#262c38;
    margin:0px;
    padding:0px;
    width: max-content;
}
p{
    font-size:16px;
    line-height:28px;
    font-weight:500;
    color:#00000085;
    margin:0px;
    padding:0px; 
}
input{
    width: 100%;
    border-radius: 4px;
    border: 1px solid #ddd;
    padding: 12px 16px;
    margin-bottom: 10px;
    }
    .btn.btn-primary{
        width:100%;
        background:#664de5;
        color:#fff;
        padding:14px;
        border-radius:6px;
        border:none;
        margin:20px 0px;
        cursor:pointer;
        font-size:16px;
        font-weight:500;
    }
    .planKitUrl{
        display:flex;
        width:100%;
    }
    .planKitUrl input:nth-child(1){
        border-right:0px;
        border-radius: 4px 0px 0px 4px;
    }
    .planKitUrl input:nth-child(2){        
        border-radius: 0px 4px 4px 0px;
    }
    .radioBtn {
        display: flex;
        flex-direction: row;
        flex-wrap: wrap;
        text-align:left; 
        padding: 20px 20px 20px 20px;
        margin: 20px 20px 0px 0px;
        background: #ffffff57;
        border: 1px solid #664de5;
        width: 156px;  
        border-radius:6px;
    }
    .radioBtn:nth-child(2){
        margin-right:0px;
    }
    .radioBtn h5{
        font-size:18px;
        line-height:39px;
        font-weight:bold;
        color:#262c38;
        margin:0px;
        padding:0px;
        width: max-content;
    }
    .radioBtn p{
        font-size:14px;
        line-height:24px;
        font-weight:500;
        color:#00000085;
        margin:0px;
        padding:0px; 
    }

.plans .plan input[type="radio"] {
    position: absolute;
    opacity: 0;
  }
  
  .plans .plan {
    cursor: pointer;
  }
  
  .plans .plan .plan-content {
    display: -webkit-box;
    display: -ms-flexbox;
    -webkit-box-sizing: border-box;
    box-sizing: border-box;
    border: 2px solid #e1e2e7;
    border-radius: 10px;
    -webkit-transition: -webkit-box-shadow 0.4s;
    transition: -webkit-box-shadow 0.4s;
    -o-transition: box-shadow 0.4s;
    transition: box-shadow 0.4s;
    transition: box-shadow 0.4s, -webkit-box-shadow 0.4s;
    position: relative;
    display: flex;
    flex-wrap: wrap;
    padding: 20px;
    width: 200px;
    margin-right: 30px;
  }
  
  .plans .plan .plan-content img {
    margin-right: 30px;
    width: 32px;
    padding-bottom:20px;
  }
  .plans .plan .plan-details{
    display: flex;
    flex-wrap: wrap;
    justify-content: flex-start;
    align-items: center;
  }
  .plans .plan .plan-details span {
    margin-bottom: 10px;
    display: block;
    font-size: 20px;
    line-height: 24px;
    color: #252f42;
  }
  .plans .plan .plan-details p {
    color: #646a79;
    font-size: 14px;
    line-height: 18px;
    text-align:left;
  }
  
  .plans .plan .plan-content:hover {
    -webkit-box-shadow: 0px 3px 5px 0px #e8e8e8;
    box-shadow: 0px 3px 5px 0px #e8e8e8;
  }
  
  .plans .plan input[type="radio"]:checked + .plan-content:after {
    content: "";
    position: absolute;
    height: 8px;
    width: 8px;
    background: #216fe0;
    right: 20px;
    top: 20px;
    border-radius: 100%;
    border: 3px solid #fff;
    -webkit-box-shadow: 0px 0px 0px 2px #0066ff;
    box-shadow: 0px 0px 0px 2px #0066ff;
  }
  
  .plans .plan input[type="radio"]:checked + .plan-content {
    border: 2px solid #216ee0;
    background: #eaf1fe;
    -webkit-transition: ease-in 0.3s;
    -o-transition: ease-in 0.3s;
    transition: ease-in 0.3s;
  }
  
  .plans .plan .plan-content:nth-child(4){
    margin-right:0px;
  }
   
`;

export const CongrtsKit = styled.div`
.timeline{
    counter-reset: test 0;
    position: relative;
    width: 356px;
    display: flex;
    margin-left: -38px;
    justify-content: space-evenly;
  }
  
  .timeline li{
    list-style: none;
    float: left;
    width: 33.3333%;
    position: relative;
    text-align: center;
    text-transform: uppercase;
  }
  
  
  
  .timeline li:before{
    counter-increment: test;
    content: counter(test);
    width: 30px;
    height: 30px;
    border: 1px solid #ddd;
    border-radius: 50%;
    display: block;
    text-align: center;
    line-height: 29px;
    margin: 0 auto 10px auto;
    background: #fff;
    color: #000;
    transition: all ease-in-out .3s;
    cursor: pointer;
  }
  
  .timeline li:after{
    content: "";
    position: absolute;
    width: 60px;
    height: 1px;
    background-color: grey;
    top: 17px;
    right: 60px;
    z-index: -999;
    -webkit-transition: all ease-in-out .3s;
    transition: all ease-in-out .3s;
  }
  
  .timeline li:first-child:after{
    content: none;
  }
  .timeline li.active-tl{
    color: #555555;
  }
  .timeline li.active-tl:before{
    background: #664de5;
    color: #F1F1F1;
  }
  
  .timeline li.active-tl + li:after{
    background: #664de5;
  }
.congrtsContainer {
    display: flex;
    flex-direction: column;  
    align-items: center;
    width:356px;
    margin:auto;
    position:absolute;
    left:50%;
    top:50%;
    transform: translate(-50%,-50%);
}
.homeKitForm{
    display: flex;
    flex-wrap: wrap;
    width:100%;
}
h2{
    font-size:24px;
    line-height:36px;
    font-weight:bold;
    color:#262c38;
    width: max-content;
    margin:auto;
    padding:0px;
}
p{
    font-size:16px;
    line-height:28px;
    font-weight:500;
    color:#00000085;
    width:max-content;
    margin:0px;
    padding:0px; 
}
.btn.btn-primary{
    width:100%;
    background:#664de5;
    color:#fff;
    padding:14px;
    border-radius:6px;
    border:none;
    margin:20px 0px;
    cursor:pointer;
    font-size:16px;
    font-weight:500;
}
input{
    width: 100%;
    border-radius: 4px;
    border: 1px solid #ddd;
    padding: 12px 16px;
    margin-bottom: 10px;
    }
.congrtsRight {
  font-size: 20px;
  line-height: 15px;
  border: 1px solid #664de5;
  padding: 20px;
  background: #664de5;
  color: #fff;
  border-radius: 50%;
  margin-bottom:20px;
}    
`;