<template>
  <InputText id="name" class="p-inputtext-lg" type="text" v-model="name" />
  <label for="name">Имя</label>
  <InputText id="surname" class="p-inputtext-lg" type="text" v-model="surname" />
  <label for="surname">Фамилия</label>
  <Button label="Submit" @click="handleClick()" />
</template>
<script setup lang="ts">
import { ref } from 'vue';
import { supabase } from '../lib/SupabaseClient'

const name = ref('')
const surname = ref('')

const handleClick = async () => {
  if(name.value && name.value!='' && surname.value && surname.value!=''){
    const { data, error } = await supabase.from('countries').insert([
      { name: name.value, surname: surname.value },
    ])
  }
}

</script>