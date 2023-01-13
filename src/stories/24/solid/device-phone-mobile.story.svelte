<script lang="ts">
	import type { Hst } from '@histoire/plugin-svelte'
	import { DevicePhoneMobile } from '../../../lib/24/solid'

	export let Hst: Hst
	let className = 'w-6 h-6'
</script>

<Hst.Story title="Solid/DevicePhoneMobile" icon="heroicons:device-phone-mobile">
	<svelte:fragment slot="controls">
		<Hst.Text bind:value={className} title="Class" />
	</svelte:fragment>

	<Hst.Variant title="DevicePhoneMobile" icon="heroicons:device-phone-mobile">
		<DevicePhoneMobile class={className} />
	</Hst.Variant>
</Hst.Story>
