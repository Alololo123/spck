let chkusers = JSON.parse(localStorage.getItem('users'))
const allUsers= []
// console.log(users,'users')


const signup =  function () {
     let users2 =  chkusers? JSON.parse(localStorage.getItem('users')):[]

     const username = document.getElementById('username').value 
     const password = document.getElementById('pw').value
     const password2 = document.getElementById('confirmed-pw').value
     if (password != password2){
         alert("nhap sai mat khau")
     } else {
      const user = {
         username,
         password
      }
 
      console.log(users2)
      if (user !== null){
           allUsers?.push(user, ...users2)
      }
 
       
 
 
        localStorage.setItem('users' , JSON.stringify(allUsers))
        alert('User Signup Successfully')
        navigate('login.html')
     }
}

const btnlogin = document.getElementById('login-form-button')
function login(){
   let flag =false;
   let users = chkusers?JSON.parse(localStorage.getItem("users")):[];
   const loginuser = document.getElementById('user');
   const loginpass = document.getElementById('psw');
   for (i=0; i<users.length;i++){
      if(users[i].username == loginuser.value && users[i].password == loginpass.value){
         console.log('Login successfully')
         localStorage.setItem('loggedin',true)
         flag =true
         localStorage.setItem('username',loginuser.value)
         navigate('index.html')
      }
      if (flag == false && i == users.length - 1){
      alert('sai mat khau hoac ten tai khoan');
      }
   }  
}
function navigate(target){
   window.location.href = `./${target}`;
}




