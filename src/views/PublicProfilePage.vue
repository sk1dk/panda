<template>
  <div class="min-h-screen bg-gradient-to-br from-indigo-900 via-gray-900 to-black flex items-center justify-center p-4">
    <div class="w-full max-w-md">
      <div class="relative bg-gray-900/50 backdrop-blur-xl rounded-3xl p-8 border border-white/10">
        <div class="flex flex-col items-center">
          <div class="w-24 h-24 bg-gradient-to-r from-indigo-500 to-purple-500 rounded-full flex items-center justify-center mb-4 overflow-hidden">
            <img v-if="profileImage" :src="profileImage" alt="Profile" class="w-full h-full object-cover" />
            <span v-else class="text-4xl font-bold text-white">{{ initials }}</span>
          </div>
          <h2 class="text-white text-2xl font-bold mb-2">{{ displayName }}</h2>
          <p class="text-gray-400 mb-8 text-center">{{ bio }}</p>
          
          <div class="space-y-4 w-full max-w-md">
            <a 
              v-for="(link, index) in links" 
              :key="index"
              :href="link.url"
              target="_blank"
              rel="noopener noreferrer"
              class="flex items-center gap-3 w-full p-4 rounded-xl bg-white/10 hover:bg-white/20 transition-colors text-white group"
            >
              <component :is="link.icon" class="w-5 h-5" />
              {{ link.text }}
              <ArrowRightIcon class="w-4 h-4 ml-auto opacity-0 group-hover:opacity-100 transition-opacity" />
            </a>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, computed, onMounted } from 'vue'
import { useRoute } from 'vue-router'
import { ArrowRightIcon, TwitterIcon, LinkIcon, GithubIcon, LinkedinIcon } from 'lucide-vue-next'

const route = useRoute()
const username = ref('')
const displayName = ref('')
const bio = ref('')
const links = ref([])
const profileImage = ref('')

const initials = computed(() => {
  return displayName.value
    .split(' ')
    .map(name => name[0])
    .join('')
    .toUpperCase()
    .slice(0, 2)
})

onMounted(() => {
  // In a real application, we would fetch the user data based on the username
  username.value = route.params.username || 'johndoe'
  displayName.value = 'John Doe'
  bio.value = 'Software Developer | Open Source Enthusiast | Tech Blogger'
  profileImage.value = '' // Set to empty string to show initials instead of image
  links.value = [
    { 
      text: 'GitHub',
      url: 'https://github.com/johndoe',
      icon: GithubIcon
    },
    { 
      text: 'LinkedIn',
      url: 'https://linkedin.com/in/johndoe',
      icon: LinkedinIcon
    },
    { 
      text: 'Twitter',
      url: 'https://twitter.com/johndoe',
      icon: TwitterIcon
    },
    { 
      text: 'Personal Blog',
      url: 'https://johndoe.com',
      icon: LinkIcon
    }
  ]
})
</script>

<style scoped>
/* No specific styles needed here */
</style>