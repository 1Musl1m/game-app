<script lang="ts" setup>
import { onAuthStateChanged, getAuth } from "firebase/auth";

const userName = ref<string | null>(null);

onMounted(() => {
  const auth = getAuth();
  onAuthStateChanged(auth, (user) => {
    userName.value = user?.displayName || null;
  });
});

</script>

<template>
  <div>
    <UiNavbar sticky>
      <UiContainer class="flex h-14 items-center justify-between">
        <NuxtLink class="text-lg font-semibold" to="/">Ashanti</NuxtLink>

        <div class="flex items-center gap-2">
          <UiButton 
          @click="$colorMode.preference = $colorMode.value == 'dark' ? 'light' : 'dark'" 
          size="icon-sm" 
          variant="ghost" 
          title="Цвет фона">
            <span class="sr-only">Сменить цвет</span>
            <Icon class="h-4 w-4" name="lucide:sun-medium"/>
          </UiButton>
        </div>
      </UiContainer>
    </UiNavbar>
    <h1 class="text-2xl font-semibold lg:text-3xl">Привет, {{ userName }}</h1>
  </div>
</template>
