<template>
    <div class="authentication">
        <div v-if="isSignIn" class="form-container signin-form">
            <h2>Sign In</h2>
            <form @submit.prevent="signIn">
                <input type="text" v-model="signInUsername" placeholder="Username" />
                <input type="password" id="password" v-model="signInPassword" placeholder="Password" />
                <button type="submit">Sign In</button>
            </form>
            <p>
                Don't have an account? <a @click="toggleMode">Sign Up</a>
            </p>
        </div>

        <div v-else class="form-container signup-form">
            <h2>Sign Up</h2>
            <form @submit.prevent="signUp">
                <input type="text" v-model="signUpUsername" placeholder="Username" />
                <input type="email" v-model="signUpEmail" placeholder="Email" />
                <input type="password" v-model="signUpPassword" placeholder="Password" />
                <button type="submit">Sign Up</button>
            </form>
            <p>
                Already have an account? <a @click="toggleMode">Sign In</a>
            </p>
        </div>
    </div>
</template>
  
<script setup lang="ts">
import { ref } from 'vue';
import { useRouter } from 'vue-router';

const isSignIn = ref(true);
const signInUsername = ref('');
const signInPassword = ref('');
const signUpUsername = ref('');
const signUpEmail = ref('');
const signUpPassword = ref('');
const router = useRouter();

const toggleMode = () => {
    isSignIn.value = !isSignIn.value;
};

const signIn = () => {
    const username = signInUsername.value;
    const password = signInPassword.value;

    const authenticatedUser: { username: string; password: string } = {
        username,
        password,
    
    };

    localStorage.setItem('userData', JSON.stringify(authenticatedUser));
};

const signUp = () => {

    const username = signUpUsername.value;
    const email = signUpEmail.value;
    const password = signUpPassword.value;

    router.push('/dashboard')

    const registeredUser: { username: string; email: string; password: string } = {
        username,
        email,
        password,
    };

    localStorage.setItem('userData', JSON.stringify(registeredUser));
};


</script>
  
<style scoped>
.authentication {
    display: flex;
    justify-content: center;
    align-items: center;
    height: 80vh;
    background-color: #ffffff;

}

.form-container {
    text-align: center;
    padding: 20px;
    border: 1px solid #ffffff;
    border-radius: 5px;
    background-color: #ffffff;
    width: 300px;
    box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.2);

}

.form-container h2 {
    margin-bottom: 20px;
    color: #008000;
}

form {
    display: flex;
    flex-direction: column;
    align-items: center;
}

input[type="text"],
input[type="email"],
input[type="password"] {
    width: 100%;
    margin: 10px 0;
    padding: 10px;
    border: 1px solid #5c5b5b;
    border-radius: 5px;
}

button {
    background-color: #000000;
    color: #fff;
    border: none;
    padding: 10px 20px;
    cursor: pointer;
    border-radius: 5px;
    font-weight: bold;
}

button:hover {
    background-color: #008000;
}

a {
    cursor: pointer;
    color: #008000;
    text-decoration: underline;
}
</style>