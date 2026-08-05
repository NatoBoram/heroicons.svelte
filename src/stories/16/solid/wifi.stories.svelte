<script module lang="ts">
	import { defineMeta } from '@storybook/addon-svelte-csf'
	import WifiSvelte from '../../../lib/16/solid/wifi.svelte'

	const { Story } = defineMeta({
		title: 'Heroicons/Micro',
		component: WifiSvelte,
		args: { class: '' },
	})
</script>

<Story name="Wifi" />
