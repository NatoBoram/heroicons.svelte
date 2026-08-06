<script module lang="ts">
	import { defineMeta } from '@storybook/addon-svelte-csf'
	import DeviceTabletSvelte from '../../../lib/24/outline/device-tablet.svelte'

	const { Story } = defineMeta({
		title: 'Heroicons/Outline',
		component: DeviceTabletSvelte,
		args: { class: '' },
	})
</script>

<Story name="DeviceTablet" />
