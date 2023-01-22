<script lang="ts">
	import type { Hst } from '@histoire/plugin-svelte'
	import { Hashtag } from '../../../lib/24/solid'

	export let Hst: Hst
	let className = 'w-6 h-6'
</script>

<Hst.Story title="Solid/Hashtag" icon="heroicons:hashtag">
	<svelte:fragment slot="controls">
		<Hst.Text bind:value={className} title="Class" />
	</svelte:fragment>

	<Hst.Variant title="Hashtag" icon="heroicons:hashtag">
		<Hashtag class={className} />
	</Hst.Variant>
</Hst.Story>
