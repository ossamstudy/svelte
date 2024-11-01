<script>
    import PropsChild from "./PropsChild.svelte";

    export let num;
</script>

<div>
    <h2>Father 구역</h2>
    <hr />
    <PropsChild num={num} />
</div>