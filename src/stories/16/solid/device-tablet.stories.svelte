<script module lang="ts">
	import { defineMeta } from '@storybook/addon-svelte-csf'
	import DeviceTabletSvelte from '../../../lib/16/solid/device-tablet.svelte'

	const { Story } = defineMeta({
		title: 'Heroicons/Micro',
		component: DeviceTabletSvelte,
		args: { class: 'w-4 h-4' },
	})
</script>

<Story name="DeviceTablet" />
