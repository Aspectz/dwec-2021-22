import { Main } from "./main";
import { Menu } from "./topmenu";
export { Login };
class Login {
  constructor() {}
  renderLogin(container) {
    container.classList.remove("mainContainer");
    container.innerHTML = `<section class="vh-100 bg-light">
        <div class="container-fluid h-custom">
          <div class="row d-flex justify-content-center align-items-center h-100">
            <div class="col-md-8 col-lg-6 col-xl-4">
              <form id="form_login">
      
                <!-- Email input -->
                <div class="form-outline mb-4 mt-5">
                  <input type="email" name="email" class="form-control form-control-lg"
                    placeholder="Enter a valid email address" />
                  <label class="form-label" for="form3Example3">Email address</label>
                </div>
      
                <!-- Password input -->
                <div class="form-outline mb-3">
                  <input type="password" name="password" class="form-control form-control-lg"
                    placeholder="Enter password" />
                  <label class="form-label" for="form3Example4">Password</label>
                </div>
      
                <div class="d-flex justify-content-between align-items-center">
                  <!-- Checkbox -->
                  <div class="form-check mb-0">
                    <input class="form-check-input me-2" type="checkbox" value="" name="remember" />
                    <label class="form-check-label" for="remember">
                      Remember me
                    </label>
                  </div>
                  <a href="#!" class="text-body">Forgot password?</a>
                </div>
      
                <div class="text-center text-lg-start mt-4 pt-2">
                  <button type="submit" class="btn btn-primary btn-lg"
                    style="padding-left: 2.5rem; padding-right: 2.5rem;">Login</button>
                  <p class="small fw-bold mt-2 pt-1 mb-0">Don't have an account? <a href="#!"
                      class="link-danger">Register</a></p>
                </div>
      
              </form>
            </div>
          </div>
        </div>
      </section>`;
    console.log(localStorage);
    document.querySelector("#form_login").addEventListener("submit", (e) => {
      this.loginSubmit(e);
    });
  }

  loginSubmit(event) {
    let formData = new FormData(document.querySelector("#form_login"));
    let objectFormData = Object.fromEntries(formData);
    objectFormData.returnSecureToken = true;
    delete objectFormData.remember;
    let datos = JSON.stringify(objectFormData);

    fetch(
      "https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=AIzaSyCQfKFKhNmRnUKNFUXRxIpywZct5hclFCM",
      {
        method: "post",
        headers: {
          "Content-type": "application/json; charset=UTF-8",
        },
        body: datos,
      }
    )
      .then((response) => {
        if (response.ok) {
          return response.json();
        } else {
          return response.json().then((text) => {
            throw new Error(text.error.message);
          });
        }
      })
      .then((datos) => {
        console.log(datos);
        localStorage.setItem("IDToken", datos.idToken);
        localStorage.setItem("email", datos.email);
        localStorage.setItem("nickname", datos.displayName);

        let menu = new Menu();
        menu.getMenu();
        let main = new Main(document.querySelector("#container"));
        main.renderMain();
      })
      .catch((error) => {
        console.error(error);
      });

    event.preventDefault();
  }
}
