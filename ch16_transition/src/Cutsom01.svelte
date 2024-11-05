<script>
    import { fade } from 'svelte/transition';
	import { elasticOut } from 'svelte/easing';

    let visible = false;

    function spin(node, { duration }){
        return {
            duration,
            css: (t) => {
                const eased = elasticOut(t);

                console.log(eased);
                return `
                    transform: scale(${eased}) rotate(${eased * 1080}deg);
                `;
            }
        }
    }
</script>

<label>
	<input type="checkbox" bind:checked={visible} /> 보임
</label>
{#if visible}
	<div class="centered" in:spin={{ duration: 8000 }} out:fade|global>
		<span>transitions!</span>
	</div>
{/if}

<style>
	.centered {
		position: absolute; left: 50%; top: 50%;
		transform: translate(-50%, -50%);
	}

	span {
		position: absolute; font-size: 4em;
		transform: translate(-50%, -50%);
	}
</style>