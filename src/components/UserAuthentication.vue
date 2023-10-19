<template>
  <div class="authentication">
    <div v-if="isSignIn" class="form-container signin-form">
      <h2>Sign In</h2>
      <form @submit.prevent="signIn">
        <input type="text" v-model="signInUsername" placeholder="Username" />
        <span class="error">{{ signInErrors.username }}</span>
        <input type="password" v-model="signInPassword" placeholder="Password" />
        <span class="error">{{ signInErrors.password }}</span>
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
        <span class="error">{{ signUpErrors.username }}</span>
        <input type="email" v-model="signUpEmail" placeholder="Email" />
        <span class="error">{{ signUpErrors.email }}</span>
        <input type="password" v-model="signUpPassword" placeholder="Password" />
        <span class="error">{{ signUpErrors.password }}</span>
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

const signInErrors = ref({ username: '', password: '' });
const signUpErrors = ref({ username: '', email: '', password: '' });

const toggleMode = () => {
  isSignIn.value = !isSignIn.value;
};

const validateEmail = (email: string) => {
  const emailRegex = /^[a-zA-Z0-9._-]+@[a-zAZ0-9.-]+\.[a-zA-Z]{2,4}$/;
  return emailRegex.test(email);
};

const authenticateUser = (username: string, password: string) => {
  if (username === 'demo' && password === 'demo') {
    return true;
  }
  return false;
};

const validateAndSaveUser = (username: string, email: string, password: string) => {
  if (!username) {
    signUpErrors.value.username = 'Username is required';
    return false;
  }

  if (!email || !validateEmail(email)) {
    signUpErrors.value.email = email ? 'Invalid email format' : 'Email is required';
    return false;
  }

  if (!password || password.length < 8) {
    signUpErrors.value.password = password ? 'Password must be at least 8 characters' : 'Password is required';
    return false;
  }

  const user = { username, email, password };
  localStorage.setItem('userData', JSON.stringify(user));

  return true;
};

const signIn = () => {
  const username = signInUsername.value;
  const password = signInPassword.value;

  if (!username || !password) {
    signInErrors.value.username = username ? '' : 'Username is required';
    signInErrors.value.password = password ? '' : 'Password is required';
    return;
  }

  signInErrors.value.username = '';
  signInErrors.value.password = '';

  if (authenticateUser(username, password)) {
    
    const authenticatedUser = { username, password };
    localStorage.setItem('userData', JSON.stringify(authenticatedUser));

    router.push('/dashboard');
  }
};

const signUp = () => {
  const username = signUpUsername.value;
  const email = signUpEmail.value;
  const password = signUpPassword.value;

  if (validateAndSaveUser(username, email, password)) {
    router.push('/dashboard');
  }
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
  border: 1px solid #cecece;
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
  background-color: #FD8535;
}

a {
  cursor: pointer;
  color: #008000;
  text-decoration: underline;
  font-weight: bold;
}

.error {
  color: #f02626; 
  font-size: 14px;
  margin-top: 5px;
}
</style>
