<template>
  <select v-model="$colorMode.preference" class="border w-48 dark:bg-gray-900 dark:border-gray-700">
    <option value="system">System</option>
    <option value="light">Light</option>
    <option value="dark">Dark</option>
    <option value="sepia">Sepia</option>
  </select>
</template>
