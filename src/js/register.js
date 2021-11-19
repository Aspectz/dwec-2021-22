export {Register};
class Register{

    constructor(){}
        renderRegister(container){
            container.classList.remove("mainContainer");
              container.innerHTML=`<section class="vh-100 bg-light">
              <div class="container-fluid h-custom">
                <div class="row d-flex justify-content-center align-items-center h-100">
                  <div class="col-md-8 col-lg-6 col-xl-4">
                    <form id="form_register">
            
                      <!-- Email input -->
                      <div class="form-outline mb-4 mt-5">
                        <input type="email" name="email" class="form-control form-control-lg"
                          placeholder="Enter a valid email address" />
                        <label class="form-label" for="email">Email address</label>
                      </div>
            
                      <!-- Password input -->
                      <div class="form-outline mb-3">
                        <input type="password" name="password" id="password" class="form-control form-control-lg"
                          placeholder="Enter password" />
                        <label class="form-label" id="passwordLabel" for="password">Password</label>
                      </div>
                      <div class="form-outline mb-3">
                        <input type="password" name="password2" id="password2" class="form-control form-control-lg"
                          placeholder="Enter password" />
                        <label class="form-label" for="password2">Password</label>
                      </div>
                      <div class="text-center text-lg-start mt-4 pt-2">
                        <button type="submit"  class="btn btn-primary btn-lg"
                          style="padding-left: 2.5rem; padding-right: 2.5rem;">Login</button>
                        <p class="small fw-bold mt-2 pt-1 mb-0">Don't have an account? <a href="#!"
                            class="link-danger">Register</a></p>
                      </div>
                    </form>
                  </div>
                </div>
              </div>
            </section>`;
      
            document.querySelector("#form_register").addEventListener("submit",(e)=>{
              this.registerSubmit(e);
            }); 
          }

          

        registerSubmit(event){
          event.preventDefault();
          let passwd1=document.getElementById("password");
          let passwd2=document.getElementById("password2");
          if(passwd1.value!=passwd2.value){
            document.querySelector("#passwordLabel").innerHTML="Las contraseñas deben coincidir";
            return;
          }

          let datosFormData=new FormData(document.querySelector("#form_register"));
          let objecteFormData=Object.fromEntries(datosFormData);
          delete objecteFormData.password2;
          objecteFormData.returnSecureToken = true;
          let datos=JSON.stringify(objecteFormData);
          
          fetch("https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=AIzaSyCQfKFKhNmRnUKNFUXRxIpywZct5hclFCM",{
            method:"post",
            headers:{
              "Content-type":"application/json;charset=UTF-8",
            },
            body:datos,
          }).then((response)=>{

            if (response.ok) return response.json();
            else {
              return response.json().then((text) => {
                console.log(text);
                throw new Error(text.error.message);
              });
            }
          })
          .then((data) => {
            console.log(data);
            localStorage.setItem("IDToken",data.idToken);
            localStorage.setItem("email",data.email);
            document.querySelector("#dropdownMenuButton").innerHTML=localStorage.getItem("email");
          })
          .catch((error) => {
            console.error("Error;", error);
          });
          

        }
}