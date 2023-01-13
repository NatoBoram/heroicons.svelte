<script lang="ts">
	import type { Hst } from '@histoire/plugin-svelte'
	import { UserMinus } from '../../../lib/24/solid'

	export let Hst: Hst
	let className = 'w-6 h-6'
</script>

<Hst.Story title="Solid/UserMinus" icon="heroicons:user-minus">
	<svelte:fragment slot="controls">
		<Hst.Text bind:value={className} title="Class" />
	</svelte:fragment>

	<Hst.Variant title="UserMinus" icon="heroicons:user-minus">
		<UserMinus class={className} />
	</Hst.Variant>
</Hst.Story>
