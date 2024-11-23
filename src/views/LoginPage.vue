<template>
  <div class="min-h-screen bg-gradient-to-br from-emerald-900 via-gray-900 to-black flex items-center justify-center px-4 sm:px-6 lg:px-8">
    <div class="max-w-md w-full space-y-8 bg-gray-800 p-8 rounded-xl shadow-lg">
      <div>
        <div class="w-20 h-20 mx-auto relative">
          <span class="text-6xl animate-wave">🐼</span>
        </div>
        <h2 class="mt-6 text-center text-3xl font-extrabold text-white">
          Log in to Panda's Links
        </h2>
        <p class="mt-2 text-center text-sm text-gray-400">
          Or
          <router-link to="/signup" class="font-medium text-emerald-400 hover:text-emerald-300">
            create a new account
          </router-link>
        </p>
      </div>
      <form class="mt-8 space-y-6" @submit.prevent="handleLogin">
        <input type="hidden" name="remember" value="true" />
        <div class="rounded-md shadow-sm -space-y-px">
          <div>
            <label for="email-address" class="sr-only">Email address</label>
            <input
              id="email-address"
              name="email"
              type="email"
              autocomplete="email"
              required
              v-model="email"
              class="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-700 placeholder-gray-500 text-white bg-gray-700 rounded-t-md focus:outline-none focus:ring-emerald-500 focus:border-emerald-500 focus:z-10 sm:text-sm"
              placeholder="Email address"
            />
          </div>
          <div>
            <label for="password" class="sr-only">Password</label>
            <input
              id="password"
              name="password"
              type="password"
              autocomplete="current-password"
              required
              v-model="password"
              class="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-700 placeholder-gray-500 text-white bg-gray-700 rounded-b-md focus:outline-none focus:ring-emerald-500 focus:border-emerald-500 focus:z-10 sm:text-sm"
              placeholder="Password"
            />
          </div>
        </div>

        <div class="flex items-center justify-between">
          <div class="flex items-center">
            <input
              id="remember-me"
              name="remember-me"
              type="checkbox"
              v-model="rememberMe"
              class="h-4 w-4 text-emerald-600 focus:ring-emerald-500 border-gray-700 rounded bg-gray-700"
            />
            <label for="remember-me" class="ml-2 block text-sm text-gray-400">
              Remember me
            </label>
          </div>

          <div class="text-sm">
            <a href="#" class="font-medium text-emerald-400 hover:text-emerald-300">
              Forgot your password?
            </a>
          </div>
        </div>

        <div>
          <button
            type="submit"
            class="group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-emerald-600 hover:bg-emerald-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-emerald-500"
          >
            <span class="absolute left-0 inset-y-0 flex items-center pl-3">
              <LockClosedIcon class="h-5 w-5 text-emerald-500 group-hover:text-emerald-400" aria-hidden="true" />
            </span>
            Sign in
          </button>
        </div>
      </form>
      <div class="mt-6">
        <div class="relative">
          <div class="absolute inset-0 flex items-center">
            <div class="w-full border-t border-gray-700"></div>
          </div>
          <div class="relative flex justify-center text-sm">
            <span class="px-2 bg-gray-800 text-gray-400">Or continue with</span>
          </div>
        </div>

        <div class="mt-6 grid grid-cols-3 gap-3">
          <div>
            <a
              href="#"
              class="w-full inline-flex justify-center py-2 px-4 border border-gray-700 rounded-md shadow-sm bg-gray-700 text-sm font-medium text-gray-400 hover:bg-gray-600"
            >
              <span class="sr-only">Sign in with Facebook</span>
              <FacebookIcon class="w-5 h-5" />
            </a>
          </div>

          <div>
            <a
              href="#"
              class="w-full inline-flex justify-center py-2 px-4 border border-gray-700 rounded-md shadow-sm bg-gray-700 text-sm font-medium text-gray-400 hover:bg-gray-600"
            >
              <span class="sr-only">Sign in with Twitter</span>
              <TwitterIcon class="w-5 h-5" />
            </a>
          </div>

          <div>
            <a
              href="#"
              class="w-full inline-flex justify-center py-2 px-4 border border-gray-700 rounded-md shadow-sm bg-gray-700 text-sm font-medium text-gray-400 hover:bg-gray-600"
            >
              <span class="sr-only">Sign in with GitHub</span>
              <GithubIcon class="w-5 h-5" />
            </a>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import { useRouter } from 'vue-router'
import { LockClosedIcon, FacebookIcon, TwitterIcon, GithubIcon } from 'lucide-vue-next'

const router = useRouter()
const email = ref('')
const password = ref('')
const rememberMe = ref(false)

const handleLogin = () => {
  // Here you would typically handle the login process
  // For now, we'll just simulate a successful login and redirect to a dashboard
  console.log('Login submitted', { email: email.value, password: password.value, rememberMe: rememberMe.value })
  router.push('/dashboard')
}
</script>

<style scoped>
@keyframes wave {
  0%, 100% { transform: rotate(0deg); }
  25% { transform: rotate(-10deg); }
  75% { transform: rotate(10deg); }
}

.animate-wave {
  display: inline-block;
  animation: wave 2s infinite;
}
</style>