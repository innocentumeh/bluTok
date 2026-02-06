import { defineStore } from "pinia";
import {
  ref,
  computed,
  onMounted,
  onUnmounted,
  $navigateTo,
} from 'nativescript-vue';
import { Contact } from '@nativescript/contacts';
import { useStorage } from '@nativescript-use/vue';
export const appStore = defineStore('counter', () => {
     const count = ref(0);
     const increment = () => count.value++;
     const decrement = () => count.value--;
     return { count, increment, decrement };
});