<script>
    import { bests } from '../store';
    import { links } from "svelte-routing"; 
</script>

<ul use:links>
    {#each $bests as best, index(best)}
        <li>
            <a href={`/${best.id}?like=${best.like}`}>
                <img src={best.image} alt={best.name} />
                <div class="box">
                    <h3>{best.name}</h3>
                </div>
            </a>
        </li>
    {/each}
</ul>