<script module lang="ts">
	import { defineMeta } from '@storybook/addon-svelte-csf'
	import DeviceTabletSvelte from '../../../lib/24/outline/device-tablet.svelte'

	const { Story } = defineMeta({
		title: 'Heroicons/Outline',
		component: DeviceTabletSvelte,
		args: { class: 'w-6 h-6' },
	})
</script>

<Story name="DeviceTablet" />
