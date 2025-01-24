<script module lang="ts">
	import { defineMeta } from '@storybook/addon-svelte-csf'
	import WifiSvelte from '../../../lib/24/solid/wifi.svelte'

	const { Story } = defineMeta({
		title: 'Heroicons/Solid',
		component: WifiSvelte,
		args: { class: 'w-6 h-6' },
	})
</script>

<Story name="Wifi" />
