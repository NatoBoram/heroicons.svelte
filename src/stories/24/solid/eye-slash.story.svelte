<script lang="ts">
	import type { Hst } from '@histoire/plugin-svelte'
	import { EyeSlash } from '../../../lib/24/solid'

	export let Hst: Hst
	let className = 'w-6 h-6'
</script>

<Hst.Story title="Solid/EyeSlash" icon="heroicons:eye-slash">
	<svelte:fragment slot="controls">
		<Hst.Text bind:value={className} title="Class" />
	</svelte:fragment>

	<Hst.Variant title="EyeSlash" icon="heroicons:eye-slash">
		<EyeSlash class={className} />
	</Hst.Variant>
</Hst.Story>
