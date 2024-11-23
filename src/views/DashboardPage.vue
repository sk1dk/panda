<template>
  <div class="min-h-screen bg-gradient-to-br from-indigo-900 via-gray-900 to-black">
    <nav class="bg-gray-800 shadow-lg">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="flex items-center justify-between h-16">
          <div class="flex items-center">
            <div class="flex-shrink-0">
              <span class="text-2xl text-white">🔗</span>
            </div>
            <div class="hidden md:block">
              <div class="ml-10 flex items-baseline space-x-4">
                <router-link to="/dashboard" class="bg-gray-900 text-white px-3 py-2 rounded-md text-sm font-medium">Dashboard</router-link>
                <a :href="`/${username}`" target="_blank" class="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium">View Public Profile</a>
              </div>
            </div>
          </div>
          <div class="hidden md:block">
            <div class="ml-4 flex items-center md:ml-6">
              <button @click="logout" class="bg-gray-800 p-1 rounded-full text-gray-400 hover:text-white focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-white">
                <span class="sr-only">Log out</span>
                <LogOutIcon class="h-6 w-6" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </nav>

    <main class="max-w-7xl mx-auto py-6 sm:px-6 lg:px-8">
      <div class="px-4 py-6 sm:px-0">
        <h1 class="text-3xl font-bold text-white mb-6">Dashboard</h1>
        
        <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
          <!-- Profile Information -->
          <div class="bg-white overflow-hidden shadow-xl sm:rounded-lg">
            <div class="p-6 bg-white border-b border-gray-200">
              <h2 class="text-2xl font-bold mb-4">Profile Information</h2>
              <form @submit.prevent="updateProfile">
                <div class="mb-4">
                  <label for="displayName" class="block text-gray-700 text-sm font-bold mb-2">Display Name</label>
                  <input v-model="displayName" id="displayName" type="text" class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline">
                </div>
                <div class="mb-4">
                  <label for="bio" class="block text-gray-700 text-sm font-bold mb-2">Bio</label>
                  <textarea v-model="bio" id="bio" class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" rows="3"></textarea>
                </div>
                <div class="mb-4">
                  <label for="profileImage" class="block text-gray-700 text-sm font-bold mb-2">Profile Image URL</label>
                  <input v-model="profileImage" id="profileImage" type="text" class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline">
                </div>
                <button type="submit" class="bg-indigo-500 hover:bg-indigo-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline">
                  Update Profile
                </button>
              </form>
            </div>
          </div>

          <!-- Links Management -->
          <div class="bg-white overflow-hidden shadow-xl sm:rounded-lg">
            <div class="p-6 bg-white border-b border-gray-200">
              <h2 class="text-2xl font-bold mb-4">Manage Links</h2>
              <ul class="space-y-4">
                <li v-for="(link, index) in links" :key="index" class="flex items-center justify-between">
                  <div>
                    <p class="text-lg font-semibold">{{ link.text }}</p>
                    <p class="text-sm text-gray-500">{{ link.url }}</p>
                  </div>
                  <div class="flex space-x-2">
                    <button @click="editLink(index)" class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-1 px-2 rounded">Edit</button>
                    <button @click="deleteLink(index)" class="bg-red-500 hover:bg-red-700 text-white font-bold py-1 px-2 rounded">Delete</button>
                  </div>
                </li>
              </ul>
              <button @click="addNewLink" class="mt-4 bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded">
                Add New Link
              </button>
            </div>
          </div>
        </div>

        <!-- Profile Preview -->
        <div class="mt-6 bg-white overflow-hidden shadow-xl sm:rounded-lg">
          <div class="p-6 bg-white border-b border-gray-200">
            <h2 class="text-2xl font-bold mb-4">Profile Preview</h2>
            <div class="bg-gray-100 p-4 rounded-lg">
              <div class="flex items-center mb-4">
                <div class="w-16 h-16 bg-indigo-500 rounded-full flex items-center justify-center mr-4 overflow-hidden">
                  <img v-if="profileImage" :src="profileImage" alt="Profile" class="w-full h-full object-cover" />
                  <span v-else class="text-2xl font-bold text-white">{{ initials }}</span>
                </div>
                <div>
                  <h3 class="text-xl font-bold">{{ displayName }}</h3>
                  <p class="text-gray-600">{{ bio }}</p>
                </div>
              </div>
              <ul class="space-y-2">
                <li v-for="(link, index) in links" :key="index" class="bg-white p-2 rounded shadow">
                  <a :href="link.url" target="_blank" rel="noopener noreferrer" class="text-indigo-600 hover:text-indigo-800">
                    {{ link.text }}
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </main>
  </div>
</template>

<script setup>
import { ref, computed } from 'vue'
import { useRouter } from 'vue-router'
import { LogOutIcon } from 'lucide-vue-next'

const router = useRouter()

const username = ref('johndoe')
const displayName = ref('John Doe')
const bio = ref('Software Developer | Open Source Enthusiast | Tech Blogger')
const profileImage = ref('')
const links = ref([
  { text: 'GitHub', url: 'https://github.com/johndoe' },
  { text: 'LinkedIn', url: 'https://linkedin.com/in/johndoe' },
  { text: 'Twitter', url: 'https://twitter.com/johndoe' },
  { text: 'Personal Blog', url: 'https://johndoe.com' }
])

const initials = computed(() => {
  return displayName.value
    .split(' ')
    .map(name => name[0])
    .join('')
    .toUpperCase()
    .slice(0, 2)
})

const updateProfile = () => {
  // In a real application, this would send the updated profile data to a backend API
  console.log('Profile updated:', { displayName: displayName.value, bio: bio.value, profileImage: profileImage.value })
}

const addNewLink = () => {
  links.value.push({ text: 'New Link', url: 'https://example.com' })
}

const editLink = (index) => {
  // In a real application, this would open a modal or form to edit the link
  console.log('Editing link:', links.value[index])
}

const deleteLink = (index) => {
  links.value.splice(index, 1)
}

const logout = () => {
  // In a real application, this would handle the logout process
  router.push('/')
}
</script>