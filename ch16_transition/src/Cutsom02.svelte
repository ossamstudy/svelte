<script>
    import { fade } from 'svelte/transition';

	let visible = false;

	function typewriter(node, { speed = 1 }) {
		const valid = node.childNodes.length === 1 && node.childNodes[0].nodeType === Node.TEXT_NODE;

		if (!valid) {
			throw new Error(`이 전환은 자손으로 텍스트 노드가 혼자있는 요소에서만 작동합니다.`);
		}

		const text = node.textContent;
		const duration = text.length / (speed * 0.01);

		return {
			duration,
			tick: (t) => {
				const i = ~~(text.length * t);
				node.textContent = text.slice(0, i);
			}
		};
	}
</script>

<label>
	<input type="checkbox" bind:checked={visible} /> 보임
</label>

{#if visible}
	<p in:typewriter|global out:fade|global>안녕하세요!!! 오쌤의 니가스터디입니다.</p>
{/if}