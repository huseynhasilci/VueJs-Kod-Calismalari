<template>
  <div class="w-screen h-screen bg-gray-800 flex flex-row text-white items-start justify-center">
    <appSidebarVue :invoiceList="invoiceList" :invoiceDetails="invoiceDetails"></appSidebarVue>
    <InvoiceContent :saveInvoice="saveInvoice" :activeInvoice="state.activeInvoice"></InvoiceContent>
  </div>
</template>

<script setup>
  import {ref, reactive} from "vue";
  import appSidebarVue from './components/appSidebar.vue';
  import InvoiceContent from './components/appInvoiceContent.vue';
  const invoiceList = ref([]);
  const state =  reactive({activeInvoice: null});
  const saveInvoice = (invoice) => {
    console.log('invoice :>> ', invoice);
    invoiceList.value.push(invoice);
  }
  const invoiceDetails = (invoice) => {
    console.log(invoice);
    state.activeInvoice = invoice;
  }
</script>