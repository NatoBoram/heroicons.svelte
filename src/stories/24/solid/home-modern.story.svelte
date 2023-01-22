<script lang="ts">
	import type { Hst } from '@histoire/plugin-svelte'
	import { HomeModern } from '../../../lib/24/solid'

	export let Hst: Hst
	let className = 'w-6 h-6'
</script>

<Hst.Story title="Solid/HomeModern" icon="heroicons:home-modern">
	<svelte:fragment slot="controls">
		<Hst.Text bind:value={className} title="Class" />
	</svelte:fragment>

	<Hst.Variant title="HomeModern" icon="heroicons:home-modern">
		<HomeModern class={className} />
	</Hst.Variant>
</Hst.Story>
