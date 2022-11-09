<template>
    <div>
        <section class="login-content">
            <div class="row m-0 align-items-center bg-white vh-100">
                <div class="col-md-6">
                    <div class="row justify-content-center">
                        <div class="col-md-10">
                            <div class="card card-transparent shadow-none d-flex justify-content-center mb-0 auth-card">
                                <div class="card-body">
                                    <h2 class="mb-2 text-center">Sign In</h2>
                                    <p class="text-center">
                                        Login to stay connected.
                                    </p>
                                    <form ref="form" name="form" id="form" @submit.prevent="signIn()">
                                        <div class="row">
                                            <div class="col-lg-12">
                                                <div class="form-group">
                                                    <label for="email" class="form-label">Email<span
                                                        class="text-danger">*
                                          </span></label>
                                                    <input type="email" class="form-control" id="email"
                                                           aria-describedby="email"
                                                           placeholder=" " v-model="email"/>
                                                    <span v-if="v$.email.$error" class="text-danger">
                                          {{ v$.email.$errors[0].$message }}
                                       </span>
                                                </div>
                                            </div>
                                            <div class="col-lg-12">
                                                <div class="form-group">
                                                    <label for="password" class="form-label">Password<span
                                                        class="text-danger">*
                                          </span></label>
                                                    <input type="password" class="form-control" id="password"
                                                           aria-describedby="password" placeholder=" "
                                                           v-model="password"/>
                                                    <span v-if="v$.password.$error" class="text-danger">
                                          {{ v$.password.$errors[0].$message }}
                                       </span>
                                                </div>
                                            </div>
                                        </div>
                                        <div class="d-flex justify-content-center">
                                            <button type="submit" class="btn btn-primary">
                                                Sign In
                                            </button>
                                        </div>
                                        <p class="mt-3 text-center">
                                            Don’t have an account?
                                            <router-link :to="{ name: 'Register' }">Click here to sign up.
                                            </router-link>
                                        </p>
                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="sign-bg">
                        <svg width="280" height="230" viewBox="0 0 431 398" fill="none"
                             xmlns="http://www.w3.org/2000/svg">
                            <g opacity="0.05">
                                <rect x="-157.085" y="193.773" width="543" height="77.5714" rx="38.7857"
                                      transform="rotate(-45 -157.085 193.773)" fill="#3B8AFF"/>
                                <rect x="7.46875" y="358.327" width="543" height="77.5714" rx="38.7857"
                                      transform="rotate(-45 7.46875 358.327)" fill="#3B8AFF"/>
                                <rect x="61.9355" y="138.545" width="310.286" height="77.5714" rx="38.7857"
                                      transform="rotate(45 61.9355 138.545)" fill="#3B8AFF"/>
                                <rect x="62.3154" y="-190.173" width="543" height="77.5714" rx="38.7857"
                                      transform="rotate(45 62.3154 -190.173)" fill="#3B8AFF"/>
                            </g>
                        </svg>
                    </div>
                </div>
                <div class="col-md-6 d-md-block d-none bg-primary p-0 vh-100 overflow-hidden">
                    <img src="../assets/images/auth/01.png" class="img-fluid gradient-main animated-scaleX"
                         alt="images"/>
                </div>
            </div>
        </section>
    </div>
</template>
<script>
import axios from 'axios';
import {mapGetters, mapActions} from 'vuex'
import useVuelidate from '@vuelidate/core'
import {required, email, helpers} from '@vuelidate/validators'

export default {
    name: "SignIn",
    setup() {
        return {v$: useVuelidate()}
    },
    data() {
        return {
            email: '',
            password: ''
        }

    },
    validations() {
        return {
            email: {
                required: helpers.withMessage("Email is required", required),
                email: helpers.withMessage("Please enter a valid email address", email)
            }, // Matches this.firstName
            password: {required: helpers.withMessage("Password is required", required)}, // Matches this.firstName
        }
    },
    methods: {
        ...mapActions({
            loginUserAction: 'loginUser'
        }),
        async signIn() {

            var logindata = {
                email: this.email,
                password: this.password,
            };

            await this.v$.$validate()

            if (!this.v$.$error) {

                await this.loginUserAction(logindata)
                console.log('hello')
                console.log(this.stateIsLoginError)
                /*await axios({
                   method: 'post',
                   url: 'login',
                   data: logindata
                }).then((response) => {
                  console.log(response.data.token);
                   if ('error_message' in response.data) {
                      this.$toast.error("Incorrect Email/Password. Please try again.");
                   } else {
                      localStorage.setItem('token',response.data.token);
                      this.$router.push('/default');
                   }
                }, (error) => {
                   console.log(error);
                   this.$toast.error(error.response.data.errors);
                });*/
            }
        }
    },
    computed: {
        ...mapGetters({
            stateIsLoginError: 'isLoginError',
            stateLoginErrorMessage: 'loginErrorMessage',
        })
    }
};
</script>
