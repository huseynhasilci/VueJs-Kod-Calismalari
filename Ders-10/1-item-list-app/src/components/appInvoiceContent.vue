<template>
  <section class="bg-gray-900 w-1/3 mx-auto mt-10 p-2 px-5 rounded-md shadow-2xl">
    <!-- FAtura Bilgileri -->

    <contactSection :contact="state.contact"></contactSection>
    <div class="mt-5">
      <heading title="Fatura Kalemleri"></heading>
      <invoiceItems :items="state.items" :addInoviceItem="addInoviceItem"></invoiceItems>
    </div>
    <!-- Summary -->
    <invoiceSummary :items="state.items"></invoiceSummary>

    <hr class="bg-gradient-to-r h-[1px] border-none from-gray-700 mt-5" />
    <div class="actionbar text-right my-5">
      <button @click="onSubmit" class="purple-button">Kaydet</button>
    </div>
  </section>
</template>

<script setup>
import { reactive, provide,watch } from "vue";
import invoiceItems from "./invoiceItems.vue";
import invoiceSummary from "./invoiceSummary.vue";
import contactSection from "./contactSection.vue";
const state = reactive({
  contact: {
    contact_name: null,
    email: null,
    city: null,
    country: null,
    zipcode: null,
  },
  items: [],
});
const props = defineProps({ saveInvoice: Function, activeInvoice: [Object,null]});
const addInoviceItem = (e) => {
  state.items.push({
    id: new Date().getTime(),
    name: null,
    qty: null,
    unit_price: 0.0,
    totalPrice: 0.0,
  });
};
const DeleteInvoiceItem = (invoiceItem) => {
  console.log(invoiceItem);
  state.items = state.items.filter((i) => i.id !== invoiceItem.id);
};
provide("DeleteInvoiceItem", DeleteInvoiceItem);
const onSubmit = () => {
  console.log(state);
  props.saveInvoice({ ...state, createdAt: new Date(), id: new Date().getTime() });
  state.contact = {
    contact_name: null,
    email: null,
    city: null,
    country: null,
    zipcode: null,
  };
  state.items = [];
};
watch(() => props.activeInvoice,(activeInvoice) => {
    if(activeInvoice){
        state.contact = {
            ...activeInvoice.contact
        };
        state.items = [ ...activeInvoice.items];
    }
    console.log("activeInvoice",activeInvoice);
})


</script>
