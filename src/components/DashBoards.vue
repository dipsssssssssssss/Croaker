<template>
  <div class="dashboard">
    <div class="sidebar">
      <div class="profile-info">
        <img :src="profileImageUrl" alt="Profile Image" class="profile-image" />
        <p class="username">{{ username }}</p>
      </div>
      <nav>
        <ul>
          <li><router-link to="/dashboard/home">Home</router-link></li>
          <li><router-link to="/dashboard/profiles">Profiles</router-link></li>
          <li><router-link to="/dashboard/notifications">Notifications</router-link></li>
          <li><router-link to="/dashboard/direct-messages">Messages</router-link></li>
          <li><router-link to="/dashboard/bookmarks">Bookmarks</router-link></li>
          <li><router-link to="/dashboard/lists">Lists</router-link></li>
          <li><router-link to="/dashboard/profile">Profile</router-link></li>
          <li><router-link to="/dashboard/following">Following</router-link></li>
        </ul>
      </nav>
      <div class="actions">
        <button @click="logout">Logout</button>
      </div>
    </div>
  
      <div class="container">
        <textarea v-model="tweetContent" placeholder="What's happening?"></textarea>
        <button @click="createTweet">Tweet</button>
        <ul class="tweet-list">
          <li v-for="(tweet, index) in tweets" :key="index">{{ tweet }}</li>
        </ul>
      </div>
      <div class="search-tweets">
        <input type="text" placeholder="Search Tweets" />
      </div>
      <router-view></router-view>
    </div>
</template>

<script setup lang="ts">
import router from '@/router';
import { ref } from 'vue';


const profileImageUrl = 'profile.jpg';
const username = 'Dipshika';

const tweetContent = ref('');
const tweets = ref<string[]>([]);

const createTweet = () => {
  if (tweetContent.value) {
    tweets.value.push(tweetContent.value);
    tweetContent.value = '';
  }
};


const logout = () => {

  router.push('/');
}
</script>

<style scoped>
.dashboard {
  display: flex;
  height: 100vh;
  width: 100%;
}

.sidebar {
  width: 150px;
  background-color: #d3ffbf;
  padding: 20px;
  border-right: 1px solid #c4c4c4;
  display: flex;
  flex-direction: column;
  align-items: center;
}

.profile-info {
  text-align: center;
  margin-bottom: 20px;
}

.profile-image {
  width: 80px;
  height: 80px;
  border-radius: 50%;
  object-fit: cover;
}

.username {
  font-weight: bold;
}

nav ul {
  list-style: none;
  padding: 0;
}

nav ul li {
  margin: 10px 0;
  display: flex;
  align-items: center;
}

nav a {
  text-decoration: none;
  color: #ffffff;
  margin-left: 10px;
  display: inline-flex;
  align-items: center;
  transition: color 0.3s;
}

nav a:hover {
  color: rgb(0, 0, 0);
}

nav li {
  background-color: green;
  padding: 10px;
  border-radius: 5px;


}

.actions {
  margin-top: auto;
  display: flex;
  justify-content: center;
  align-items: center;
}

.actions button {
  background-color: green;
  color: #fff;
  padding: 10px 20px;
  border: none;
  border-radius: 999px;
  cursor: pointer;
}

.actions button:hover {
  background-color: #000000;
}


.search-tweets {
  display: flex;
  align-items: center;
  margin: 10px 0;

}

.search-tweets input {
  flex: 1;
  padding: 10px;
  border: 1px solid #000000;
  border-radius: 5px;
}

.container {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh; 
}

textarea {
  max-width: 100%; 
}


.container button {
  background-color: green;
  color: #fff;
  padding: 10px 20px;
  border: none;
  border-radius: 999px;
  cursor: pointer;
}

.container button:hover {
  background-color: #000000;
}

textarea {
  flex: 1;
  padding: 10px;
  border: 1px solid #ccc;
  border-radius: 5px;
  margin-bottom: 10px;
}

.tweet-list {
  list-style: none;
  padding: 0;
}

.tweet-list li {
  background-color: #f0f0f0;
  padding: 10px;
  border-radius: 5px;
  margin: 5px 0;
}
</style>