<template>
    <!-- {{item}} -->
    <li class="d-flex justify-content-between align-item-center">
        <span>{{item.text}}</span>
        <button class="sm red">Sil</button>
    </li>
    
</template>

<script>
    export default{
        props:["item"]

    }

</script>