<script lang="ts" setup>
import { ref, onMounted } from 'vue';
import { collection, getDocs, addDoc } from 'firebase/firestore';

const { $firestore } = <any> useNuxtApp();

const items = ref<any[]>([]);
const newItemName = ref('');

const fetchItems = async () => {
  try {
    const querySnapshot = await getDocs(collection($firestore, 'items'));
    items.value = querySnapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
  } catch (error) {
  }
};

const addItem = async () => {
  if (!newItemName.value.trim()) return;

  try {
    await addDoc(collection($firestore, 'items'), {
      name: newItemName.value,
      timestamp: new Date(),
    });

    newItemName.value = '';
    await fetchItems();
  } catch (error) {
    console.error(error);
  }
};

onMounted(() => {
  fetchItems();
});
</script>

<template>
  <div>
    <h1>Items</h1>
    <ul>
      <li v-for="item in items" :key="item.id">{{ item.name }}</li>
    </ul>
    <input v-model="newItemName" placeholder="New item name" />
    <button @click="addItem">Add Item</button>
  </div>
</template>
