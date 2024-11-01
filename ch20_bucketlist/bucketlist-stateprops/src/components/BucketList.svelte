<script>
    import { fade, slide } from "svelte/transition";
    import { flip } from "svelte/animate";
    import BucketItem from "./BucketItem.svelte";

    export let buckets;
    export let onToggle;
    export let onRemove;
    export let editMode;
    export let onEditMode;
    export let onEditKeyup;
</script>

<div class="bucketlist" >
    {#each buckets as bucket, index(bucket) }
        <div in:fade out:slide animate:flip>
            <BucketItem {bucket} {onToggle} { onRemove } {editMode} {onEditMode} {onEditKeyup} />
        </div>
    {/each}
</div>