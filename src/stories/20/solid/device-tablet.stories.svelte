<script module lang="ts">
	import { defineMeta } from '@storybook/addon-svelte-csf'
	import DeviceTabletSvelte from '../../../lib/20/solid/device-tablet.svelte'

	const { Story } = defineMeta({
		title: 'Heroicons/Mini',
		component: DeviceTabletSvelte,
		args: { class: '' },
	})
</script>

<Story name="DeviceTablet" />
