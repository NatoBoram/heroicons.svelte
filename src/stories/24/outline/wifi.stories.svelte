<script module lang="ts">
	import { defineMeta } from '@storybook/addon-svelte-csf'
	import WifiSvelte from '../../../lib/24/outline/wifi.svelte'

	const { Story } = defineMeta({
		title: 'Heroicons/Outline',
		component: WifiSvelte,
		args: { class: '' },
	})
</script>

<Story name="Wifi" />
