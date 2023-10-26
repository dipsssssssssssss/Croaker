<template>
  <div class="dashboard">
    <div class="sidebar">
      <div class="profile-info">
        <img
          :src="profileImageUrl"
          alt="Profile Image"
          class="profile-image"
        >
        <p class="username">
          {{ username }}
        </p>
      </div>
      <nav>
        <ul>
          <li>
            <router-link to="/dashboard/home">
              Home
            </router-link>
          </li>
          <li>
            <router-link to="/dashboard/profiles">
              Profiles
            </router-link>
          </li>
          <li>
            <router-link to="/dashboard/notifications">
              Notifications
            </router-link>
          </li>
          <li>
            <router-link to="/dashboard/direct-messages">
              Messages
            </router-link>
          </li>
          <li>
            <router-link to="/dashboard/bookmarks">
              Bookmarks
            </router-link>
          </li>
          <li>
            <router-link to="/dashboard/lists">
              Lists
            </router-link>
          </li>
          <li>
            <router-link to="/dashboard/profile">
              Profile
            </router-link>
          </li>
          <li>
            <router-link to="/dashboard/following">
              Following
            </router-link>
          </li>
        </ul>
      </nav>
      <div class="actions">
        <button @click="logout">
          Logout
        </button>
      </div>
    </div>
    <div class="main-content">
      <div class="tweet-container">
        <textarea
          v-model="tweetText"
          class="tweet-input"
          placeholder="What's on your mind?"
        />
        <input
          type="file"
          accept="image/*"
          class="image-upload"
        >

        <button
          class="tweet-button"
          @click="postTweet"
        >
          Tweet
        </button>
      </div>
      <div class="tweets">
        <div
          v-for="(tweet, index) in tweets"
          :key="index"
          class="tweet"
        />
      </div>
      <router-view />
    </div>
  </div>
</template>

<script setup lang="ts">
import router from '@/router';
import { ref, reactive } from 'vue';


const profileImageUrl = 'profile.jpg';
const username = 'Dipshika';
const tweetText = ref('');
const uploadedImage = ref(null);
const tweets = reactive({ list: [] });

const postTweet = () => {
  tweetText.value = '';
  uploadedImage.value = null;
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

.main-content {
  flex: 1;
  padding: 20px;
}

.tweet-container {
  background-color: #ffffff;
  border: 1px solid #c4c4c4;
  border-radius: 5px;
  padding: 10px;
  margin-bottom: 20px;
}

.tweet-input {
  width: 100%;
  height: 100px;
  border: none;
  outline: none;
  resize: none;
}

.image-upload {
  margin-top: 10px;
}

.tweet-button {
  background-color: green;
  color: #fff;
  padding: 10px 20px;
  border: none;
  border-radius: 999px;
  cursor: pointer;
  margin-top: 10px;
}

.tweet-button:hover {
  background-color: #000000;
}
</style>