<script lang="ts">
	import type { Hst } from '@histoire/plugin-svelte'
	import { Hashtag } from '../../../lib/24/outline'

	export let Hst: Hst
	let className = 'w-6 h-6'
</script>

<Hst.Story title="Outline/Hashtag" icon="heroicons:hashtag">
	<svelte:fragment slot="controls">
		<Hst.Text bind:value={className} title="Class" />
	</svelte:fragment>

	<Hst.Variant title="Hashtag" icon="heroicons:hashtag">
		<Hashtag class={className} />
	</Hst.Variant>
</Hst.Story>
