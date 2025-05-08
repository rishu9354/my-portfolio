<template>

    <footer class="bg-white shadow-inner py-6 px-4 mt-8">
        <div class="max-w-7xl mx-auto text-center space-y-4">
            <!-- social icons -->
		<div class="flex text-zinc-700 gap-25 justify-center">
			<a href="https://www.instagram.com/_itsrisharma_/" class="hover:text-pink-500 transition-colors duration-300"><Icon icon="mdi:instagram" width="28" height="28"/></a>
			<a href="https://github.com/rishu9354" class="hover:text-zinc-800 transition-colors duration-300"><Icon icon="mdi:github" width="28" height="28"/></a>
			<a href="https://www.linkedin.com/in/risharma-21a4ba237/" class="hover:text-blue-600 transition-colors duration-300"><Icon icon="mdi:linkedin" width="28" height="28"/></a>
		</div>
        <!-- copyrights -->
        <p class="text-sm text-zinc-500">© {{ new Date().getFullYear() }} Rishabh Sharma. All rights reserved.</p>
	</div>
    </footer>
</template>

<script setup>
import { Icon } from "@iconify/vue";
</script>