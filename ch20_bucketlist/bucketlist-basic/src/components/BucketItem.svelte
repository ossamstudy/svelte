<script>
    import Icon from '@iconify/svelte';
</script>

<div class="bucketitem">
    <input type="checkbox" id="chk" />
    <label for="chk" class="checkcircle">
        <Icon icon="ic:round-check" />
    </label>
    <p>버킷리스트 적기</p>
    <button class="remove">
        <Icon icon="gridicons:trash" />
    </button>
</div>