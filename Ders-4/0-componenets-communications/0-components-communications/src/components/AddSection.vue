<template>
    <button @click="newItem(new Date().getTime())">Set data</button>
</template>


<script>
    export default{
        inject:["newItem"]
    }

</script>