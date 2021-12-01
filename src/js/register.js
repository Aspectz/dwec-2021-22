import { Main } from "./main";
import { Menu } from "./topmenu";
export { Register };
class Register {
  constructor() {
    this.container = app.container;
  }
  renderRegister(error) {
    container.classList.remove("mainContainer");
    container.innerHTML = `<section class="vh-100 bg-light">
              <div class="container-fluid h-custom">
                <div class="row d-flex justify-content-center align-items-center h-100">
                  <div class="col-md-8 col-lg-6 col-xl-4">
                    <form id="form_register">
                      <div class="form-outline mb-4 mt-5">
                      <label class="form-label" for="email">NickName</label>
                      <input type="text" name="nickname" id="nickname" class="form-control form-control-lg"
                        placeholder="Choose a nickname" />
                        <div id="nickerror"></div>
                      
                    </div>
                      <!-- Email input -->
                      <div class="form-outline mb-4">
                      <label class="form-label" for="email">Email address</label>
                        <input type="email" name="email" class="form-control form-control-lg"
                          placeholder="Enter a valid email address" />
                       
                      </div>
            
                      <!-- Password input -->
                      <div class="form-outline mb-3">
                      <label class="form-label" id="passwordLabel" for="password">Password</label>
                        <input type="password" name="password" id="password" class="form-control form-control-lg"
                          placeholder="Enter password" />
                       
                      </div>
                      <div class="form-outline mb-3">
                      <label class="form-label" for="password2">Password</label>
                        <input type="password" name="password2" id="password2" class="form-control form-control-lg"
                          placeholder="Enter password" />
                        
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

    document.querySelector("#form_register").addEventListener("submit", (e) => {
      this.registerSubmit(e);
    });
  }

  async registerSubmit(event) {
    event.preventDefault();
    let creado = false;
    let passwd1 = document.getElementById("password");
    let passwd2 = document.getElementById("password2");
    let nickname = document.getElementById("nickname");
    if (passwd1.value != passwd2.value) {
      document.querySelector("#passwordLabel").innerHTML =
        "Las contraseñas deben coincidir";
      return;
    }
    //Check nickname
    let resp = await fetch(
      "https://projectjs-b6bfe-default-rtdb.europe-west1.firebasedatabase.app/users.json"
    );
    let data = await resp.json();
    if (data != null) {
      let users = Object.entries(data);
      users.map((p) => {
        if (p[1].nickname == nickname.value) {
          document.querySelector("#nickerror").innerHTML = "Usuario ya creado";
          creado = true;
          return;
        }
      });
    }

    if (creado) return;

    //Create user
    let datosFormData = new FormData(document.querySelector("#form_register"));
    let objecteFormData = Object.fromEntries(datosFormData);
    delete objecteFormData.password2;
    objecteFormData.displayName = objecteFormData.nickname;
    delete objecteFormData.nickname;
    objecteFormData.returnSecureToken = true;
    let datos = JSON.stringify(objecteFormData);

    await fetch(
      "https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=AIzaSyCQfKFKhNmRnUKNFUXRxIpywZct5hclFCM",
      {
        method: "post",
        headers: {
          "Content-type": "application/json;charset=UTF-8",
        },
        body: datos,
      }
    )
      .then((response) => {
        if (response.ok) return response.json();
        else {
          return response.json().then((text) => {
            throw new Error(text.error.message);
          });
        }
      })
      .then((data) => {
        localStorage.setItem("localId", data.localId);
        localStorage.setItem("email", data.email);
        localStorage.setItem("nickname", data.displayName);

        //Registrar usuario bda
        let userFormData = Object.fromEntries(datosFormData);
        delete userFormData.password2;
        delete userFormData.password;
        let userDatos = JSON.stringify(userFormData);

        fetch(
          `https://projectjs-b6bfe-default-rtdb.europe-west1.firebasedatabase.app/users/${data.localId}/.json`,
          {
            method: "put",
            headers: {
              "Content-type": "application/json;charset=UTF-8",
            },
            body: userDatos,
          }
        )
          .then((response) => {
            return response.json();
          })
          .then(() => {
            let menu = new Menu();
            menu.getMenu();
            let main = new Main(document.querySelector("#container"));
            main.renderMain();
          });
      })
      .catch((error) => {
        console.error("Error;", error);
      });
  }
}
