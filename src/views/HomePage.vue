<template>
  <div class="min-h-screen bg-gradient-to-br from-emerald-900 via-gray-900 to-black">
    <!-- Promotional Banner -->
    <div class="bg-emerald-100/10 backdrop-blur-sm text-white py-3 px-4 text-center relative">
      <div class="flex items-center justify-center gap-2">
        <span class="text-emerald-400">🎋</span>
        <p class="font-medium">Join our early access program today. Limited spots available.</p>
        <button class="ml-4 bg-emerald-500 hover:bg-emerald-600 text-white px-4 py-1 rounded-full text-sm transition-colors">
          Join Now
        </button>
      </div>
      <button @click="closeBanner" class="absolute right-4 top-1/2 -translate-y-1/2 text-white/60 hover:text-white">
        <XIcon class="w-5 h-5" />
      </button>
    </div>

    <!-- Navigation -->
    <nav class="container mx-auto px-6 py-6">
      <div class="flex items-center justify-between">
        <div class="flex items-center gap-2">
          <div class="w-12 h-12 relative">
            <span class="text-4xl animate-wave">🐼</span>
          </div>
          <span class="text-white text-xl font-bold">Panda's Links</span>
        </div>
        
        <div class="hidden md:flex items-center space-x-8 text-gray-300">
          <a href="#features" class="hover:text-white transition-colors">Features</a>
          <a href="#how-it-works" class="hover:text-white transition-colors">How It Works</a>
          <a href="#pricing" class="hover:text-white transition-colors">Pricing</a>
          <a href="#faq" class="hover:text-white transition-colors">FAQ</a>
        </div>

        <div class="flex items-center gap-4">
          <router-link to="/login" class="text-white hover:text-emerald-400 transition-colors">
            Log in
          </router-link>
          <router-link to="/signup" class="bg-white text-gray-900 px-6 py-2 rounded-full hover:bg-emerald-400 hover:text-white transition-colors">
            Sign up free
          </router-link>
        </div>
      </div>
    </nav>

    <!-- Hero Section -->
    <div class="container mx-auto px-6 py-24 flex flex-col lg:flex-row items-center gap-12">
      <div class="flex-1 text-center lg:text-left">
        <h1 class="text-5xl md:text-7xl font-bold mb-8">
          <span class="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-green-300">
            One Link.
          </span>
          <br />
          <span class="text-white">Endless Possibilities.</span>
        </h1>
        <p class="text-gray-400 text-xl mb-12 max-w-2xl">
          Join thousands of creators using Panda's Links to share everything they create, curate, and sell from a single, customizable bio link.
        </p>
        
        <div class="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
          <div class="relative">
            <input 
              v-model="username"
              type="text" 
              placeholder="pandaslinks.bio/yourname"
              class="w-full sm:w-80 px-6 py-4 rounded-full bg-white/10 text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-emerald-500"
            />
          </div>
          <button 
            @click="claimLink"
            class="px-8 py-4 rounded-full bg-emerald-500 hover:bg-emerald-600 text-white font-medium transition-colors"
          >
            Claim your link
          </button>
        </div>
      </div>

      <!-- Preview Card -->
      <div class="flex-1 relative">
        <div class="absolute top-0 left-0 w-full h-full bg-gradient-to-b from-emerald-500/20 to-transparent rounded-3xl blur-3xl"></div>
        <div class="relative bg-gray-900/50 backdrop-blur-xl rounded-3xl p-8 border border-white/10">
          <div class="flex flex-col items-center">
            <div class="w-24 h-24 bg-white rounded-full flex items-center justify-center mb-4">
              <span class="text-6xl animate-wave">🐼</span>
            </div>
            <h2 class="text-white text-2xl font-bold mb-2">@pandacreator</h2>
            <p class="text-gray-400 mb-8">Digital Artist & Content Creator</p>
            
            <div class="space-y-4 w-full max-w-md">
              <a 
                v-for="(link, index) in previewLinks" 
                :key="index"
                :href="link.url"
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

    <!-- Features Section -->
    <section id="features" class="py-24 bg-gray-900">
      <div class="container mx-auto px-6">
        <h2 class="text-4xl font-bold text-center text-white mb-16">Why Choose Panda's Links?</h2>
        <div class="grid grid-cols-1 md:grid-cols-3 gap-12">
          <div v-for="feature in features" :key="feature.title" class="text-center">
            <div class="bg-emerald-500 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-6">
              <component :is="feature.icon" class="w-8 h-8 text-white" />
            </div>
            <h3 class="text-2xl font-semibold text-white mb-4">{{ feature.title }}</h3>
            <p class="text-gray-400">{{ feature.description }}</p>
          </div>
        </div>
      </div>
    </section>

    <!-- How It Works Section -->
    <section id="how-it-works" class="py-24">
      <div class="container mx-auto px-6">
        <h2 class="text-4xl font-bold text-center text-white mb-16">How It Works</h2>
        <div class="grid grid-cols-1 md:grid-cols-3 gap-12">
          <div v-for="(step, index) in howItWorks" :key="step.title" class="relative">
            <div class="bg-emerald-500 rounded-full w-12 h-12 flex items-center justify-center mb-6">
              <span class="text-2xl font-bold text-white">{{ index + 1 }}</span>
            </div>
            <h3 class="text-2xl font-semibold text-white mb-4">{{ step.title }}</h3>
            <p class="text-gray-400">{{ step.description }}</p>
            <div v-if="index < howItWorks.length - 1" class="hidden md:block absolute top-0 left-full w-full h-0.5 bg-emerald-500 transform -translate-x-1/2 translate-y-6"></div>
          </div>
        </div>
      </div>
    </section>

    <!-- Call to Action -->
    <section class="py-24 bg-emerald-900">
      <div class="container mx-auto px-6 text-center">
        <h2 class="text-4xl font-bold text-white mb-8">Ready to Simplify Your Online Presence?</h2>
        <p class="text-xl text-gray-300 mb-12 max-w-2xl mx-auto">Join Panda's Links today and start sharing your content, products, and services with a single, powerful link.</p>
        <button class="px-8 py-4 rounded-full bg-white text-emerald-900 font-medium hover:bg-emerald-100 transition-colors text-lg">
          Get Started for Free
        </button>
      </div>
    </section>

    <!-- Footer -->
    <footer class="bg-gray-900 py-12">
      <div class="container mx-auto px-6">
        <div class="flex flex-wrap justify-between">
          <div class="w-full md:w-1/4 mb-8 md:mb-0">
            <div class="flex items-center gap-2 mb-4">
              <div class="w-10 h-10 relative">
                <span class="text-3xl animate-wave">🐼</span>
              </div>
              <span class="text-white text-xl font-bold">Panda's Links</span>
            </div>
            <p class="text-gray-400">Simplify your online presence with a single, powerful link.</p>
          </div>
          <div class="w-full md:w-1/4 mb-8 md:mb-0">
            <h4 class="text-white font-semibold mb-4">Quick Links</h4>
            <ul class="space-y-2">
              <li><a href="#" class="text-gray-400 hover:text-white transition-colors">Home</a></li>
              <li><a href="#features" class="text-gray-400 hover:text-white transition-colors">Features</a></li>
              <li><a href="#how-it-works" class="text-gray-400 hover:text-white transition-colors">How It Works</a></li>
              <li><a href="#pricing" class="text-gray-400 hover:text-white transition-colors">Pricing</a></li>
            </ul>
          </div>
          <div class="w-full md:w-1/4 mb-8 md:mb-0">
            <h4 class="text-white font-semibold mb-4">Legal</h4>
            <ul class="space-y-2">
              <li><a href="#" class="text-gray-400 hover:text-white transition-colors">Terms of Service</a></li>
              <li><a href="#" class="text-gray-400 hover:text-white transition-colors">Privacy Policy</a></li>
              <li><a href="#" class="text-gray-400 hover:text-white transition-colors">Cookie Policy</a></li>
            </ul>
          </div>
          <div class="w-full md:w-1/4">
            <h4 class="text-white font-semibold mb-4">Connect With Us</h4>
            <div class="flex space-x-4">
              <a href="#" class="text-gray-400 hover:text-white transition-colors">
                <TwitterIcon class="w-6 h-6" />
              </a>
              <a href="#" class="text-gray-400 hover:text-white transition-colors">
                <InstagramIcon class="w-6 h-6" />
              </a>
              <a href="#" class="text-gray-400 hover:text-white transition-colors">
                <FacebookIcon class="w-6 h-6" />
              </a>
              <a href="#" class="text-gray-400 hover:text-white transition-colors">
                <LinkedinIcon class="w-6 h-6" />
              </a>
            </div>
          </div>
        </div>
        <div class="border-t border-gray-800 mt-12 pt-8 text-center">
          <p class="text-gray-400">&copy; {{ new Date().getFullYear() }} Panda's Links. All rights reserved.</p>
        </div>
      </div>
    </footer>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import { useRouter } from 'vue-router'
import { 
  XIcon, 
  ArrowRightIcon,
  InstagramIcon,
  YoutubeIcon,
  TwitterIcon,
  LinkIcon,
  FacebookIcon,
  LinkedinIcon,
  PaletteIcon,
  BarChartIcon,
  ShieldIcon
} from 'lucide-vue-next'

const router = useRouter()
const username = ref('')

const claimLink = () => {
  if (username.value) {
    router.push({ name: 'SignUp', params: { username: username.value } })
  } else {
    alert('Please enter a username')
  }
}

const previewLinks = ref([
  { 
    text: 'Follow on Instagram',
    url: '#',
    icon: InstagramIcon
  },
  { 
    text: 'Subscribe on YouTube',
    url: '#',
    icon: YoutubeIcon
  },
  { 
    text: 'Twitter Updates',
    url: '#',
    icon: TwitterIcon
  },
  { 
    text: 'My Portfolio',
    url: '#',
    icon: LinkIcon
  }
])

const features = [
  {
    title: 'Customizable Design',
    description: 'Personalize your link page with custom themes, colors, and layouts to match your brand.',
    icon: PaletteIcon
  },
  {
    title: 'Analytics Dashboard',
    description: 'Track your link performance with detailed analytics and insights.',
    icon: BarChartIcon
  },
  {
    title: 'Secure & Reliable',
    description: 'Your data is protected with industry-standard security measures.',
    icon: ShieldIcon
  }
]

const howItWorks = [
  {
    title: 'Sign Up',
    description: 'Create your free account in minutes and claim your unique Panda\'s Links URL.'
  },
  {
    title: 'Customize Your Page',
    description: 'Add your links, social media profiles, and customize the look and feel of your page.'
  },
  {
    title: 'Share & Grow',
    description: 'Share your Panda\'s Links URL across all your platforms and start tracking your growth.'
  }
]

const closeBanner = () => {
  // Add banner closing logic here
}
</script>

<style scoped>
@keyframes wave {
  0%, 100% { transform: rotate(0deg); }
  25% { transform: rotate(-10deg); }
  75% { transform: rotate(10deg); }
}
</style>