{#if $$slots.name && $$slots.release}
<div class="box">
    <h4>
        이름 : <slot name="name"></slot>
    </h4>
    <p>
        배포 년도 : <slot name="release"></slot>
    </p>
</div>
{/if}

<style>
    .box{
        width: 300px; padding: 10px;
        border: 2px solid black;   
        margin-bottom: 20px;
    }
</style>