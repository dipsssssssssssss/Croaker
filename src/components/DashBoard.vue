<template>
  <div class="sidebar-menu" :class="{ open: isOpen }">
    <div class="menu-header">
      <h2>Croaker</h2>
      <button @click="toggleSidebar">☰</button>
    </div>
    <div class="menu-items">
      <button @click="navigateToProfile">Profile</button>
      <button @click="navigateToDM">DM</button>
      <button @click="navigateToFollow">Follow</button>
      <button @click="deleteAccount">Delete</button>
      <button @click="logout">Logout</button>
    </div>
    <div class="search-bar">
      <input type="text" placeholder="Search Twitter" v-model="searchQuery" @input="searchTweets" />
    </div>
  </div>
  <div class="content">
    <div class="header">
      <img src="croaks.png" alt="Croaker Logo">
      <h1>Croaker</h1>
      <button @click="showNotifications">🔔</button> 
    </div>
    <textarea v-model="tweetContent" placeholder="What's happening?"></textarea>
    <button @click="createTweet">Tweet</button>
    <ul class="tweet-list">
      <li v-for="(tweet, index) in tweets" :key="index">{{ tweet }}</li>
    </ul>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue';

const isOpen = ref(false);
const searchQuery = ref('');
const tweetContent = ref('');
const tweets = ref([]);
const notifications = ref(0);

const toggleSidebar = () => {
  isOpen.value = !isOpen.value;
};

const navigateToProfile = () => {

};

const navigateToDM = () => {

};

const navigateToFollow = () => {

};

const deleteAccount = () => {

};

const logout = () => {

};

const searchTweets = () => {

};

const createTweet = () => {
  if (tweetContent.value.trim() !== '') {
    tweets.value.unshift(tweetContent.value);
    tweetContent.value = '';
  }
};

const showNotifications = () => {

  notifications.value = 0;
};
</script>

<style scoped></style>

