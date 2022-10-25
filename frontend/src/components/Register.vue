<template>
    <div>
        <section class="login-content">
            <div class="row m-0 align-items-center bg-white vh-100">
                <div class="col-md-6 d-md-block d-none bg-primary p-0 mt-n1 vh-100 overflow-hidden">
                    <img src="../assets/images/auth/05.png" class="img-fluid gradient-main animated-scaleX"
                        alt="images">
                </div>
                <div class="col-md-6">
                    <div class="row justify-content-center">
                        <div class="col-md-10">
                            <div class="card card-transparent auth-card shadow-none d-flex justify-content-center mb-0">
                                <div class="card-body">
                                    <h2 class="mb-2 text-center">Sign Up</h2>
                                    <p class="text-center">Create your {{ appName }} account.</p>
                                    <form ref="frm_signup" name="frm_signup" id="frm_signup" @submit.prevent="signUp()">
                                        <div class="row">
                                            <div class="col-lg-6">
                                                <div class="form-group">
                                                    <label for="fname" class="form-label">First Name<span
                                                            class="text-danger">*
                                                        </span></label>
                                                    <input type="text" class="form-control" id="fname" name="fname"
                                                        v-model="fname" placeholder=" ">
                                                    <span v-if="v$.fname.$error" class="text-danger">
                                                        {{ v$.fname.$errors[0].$message }}
                                                    </span>
                                                </div>
                                            </div>
                                            <div class="col-lg-6">
                                                <div class="form-group">
                                                    <label for="last-name" class="form-label">Last Name<span
                                                            class="text-danger">*
                                                        </span></label>
                                                    <input type="text" class="form-control" id="last-name"
                                                        v-model="lname" placeholder=" ">
                                                    <span v-if="v$.lname.$error" class="text-danger">
                                                        {{ v$.lname.$errors[0].$message }}
                                                    </span>
                                                </div>
                                            </div>
                                            <div class="col-lg-12">
                                                <div class="form-group">
                                                    <label for="email" class="form-label">Email<span
                                                            class="text-danger">*
                                                        </span></label>
                                                    <input type="text" class="form-control" id="email" placeholder=" "
                                                        v-model="email">
                                                    <span v-if="v$.email.$error" class="text-danger">
                                                        {{ v$.email.$errors[0].$message }}
                                                    </span>
                                                </div>
                                            </div>
                                            <div class="col-lg-6">
                                                <div class="form-group">
                                                    <label for="password" class="form-label">Password<span
                                                            class="text-danger">*
                                                        </span></label>
                                                    <input type="password" class="form-control" id="password"
                                                        placeholder=" " v-model="password">
                                                    <span v-if="v$.password.$error" class="text-danger">
                                                        {{ v$.password.$errors[0].$message }}
                                                    </span>
                                                </div>
                                            </div>
                                            <div class="col-lg-6">
                                                <div class="form-group">
                                                    <label for="confirm_password" class="form-label">Confirm
                                                        Password<span class="text-danger">*
                                                        </span></label>
                                                    <input type="password" class="form-control" id="confirm_password"
                                                        placeholder=" " v-model="confirm_password">
                                                    <span v-if="v$.confirm_password.$error" class="text-danger">
                                                        {{ v$.confirm_password.$errors[0].$message }}
                                                    </span>
                                                </div>
                                            </div>
                                        </div>
                                        <div class="d-flex justify-content-center">
                                            <button type="submit" class="btn btn-primary">Sign Up</button>
                                        </div>
                                        <p class="mt-3 text-center">
                                            Already have an Account <router-link :to="{ name: 'SignIn' }">Click here
                                                to sign in.
                                            </router-link>
                                        </p>
                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="sign-bg sign-bg-right">
                        <svg width="280" height="230" viewBox="0 0 421 359" fill="none"
                            xmlns="http://www.w3.org/2000/svg">
                            <g opacity="0.05">
                                <rect x="-15.0845" y="154.773" width="543" height="77.5714" rx="38.7857"
                                    transform="rotate(-45 -15.0845 154.773)" fill="#3A57E8" />
                                <rect x="149.47" y="319.328" width="543" height="77.5714" rx="38.7857"
                                    transform="rotate(-45 149.47 319.328)" fill="#3A57E8" />
                                <rect x="203.936" y="99.543" width="310.286" height="77.5714" rx="38.7857"
                                    transform="rotate(45 203.936 99.543)" fill="#3A57E8" />
                                <rect x="204.316" y="-229.172" width="543" height="77.5714" rx="38.7857"
                                    transform="rotate(45 204.316 -229.172)" fill="#3A57E8" />
                            </g>
                        </svg>
                    </div>
                </div>
            </div>
        </section>
    </div>
</template>
<script>
import axios from 'axios';
import useVuelidate from '@vuelidate/core'
import { required, email, helpers } from '@vuelidate/validators'

export default {
    name: 'SignUp',
    setup() {
        return { v$: useVuelidate() }
    },
    data() {
        return {
            fname: '',
            lname: '',
            email: '',
            password: '',
            confirm_password: ''
        }

    },
    validations() {
        return {
            fname: { required: helpers.withMessage("First Name is required", required) }, // Matches this.firstName
            lname: { required: helpers.withMessage("Last Name is required", required) }, // Matches this.firstName
            email: { required: helpers.withMessage("Email is required", required), email: helpers.withMessage("Please enter a valid email address", email) }, // Matches this.firstName
            password: { required: helpers.withMessage("Password is required", required) }, // Matches this.firstName
            confirm_password: { required: helpers.withMessage("Confirm Password is required", required) }, // Matches this.firstName
        }
    },
    methods: {
        async signUp() {

            // return false;
            var formData = {
              first_name: this.fname,
              last_name: this.lname,
                email: this.email,
                password: this.password,
                password_confirmation: this.confirm_password,
            };

            await this.v$.$validate()

            if (!this.v$.$error) {

                // alert('Form successfully submitted.')

                await axios({
                    method: 'post',
                    url: 'register',
                    data: formData
                }).then((response) => {
                    this.$router.push('/signin');
                }, (error) => {
                    this.$toast.error(error.response.data.errors);
                });
            }
        }
    }
}
</script>
