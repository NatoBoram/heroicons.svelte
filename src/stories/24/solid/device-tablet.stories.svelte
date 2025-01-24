<script module lang="ts">
	import { defineMeta } from '@storybook/addon-svelte-csf'
	import DeviceTabletSvelte from '../../../lib/24/solid/device-tablet.svelte'

	const { Story } = defineMeta({
		title: 'Heroicons/Solid',
		component: DeviceTabletSvelte,
		args: { class: 'w-6 h-6' },
	})
</script>

<Story name="DeviceTablet" />
