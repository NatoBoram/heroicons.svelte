<script module lang="ts">
	import { defineMeta } from '@storybook/addon-svelte-csf'
	import DevicePhoneMobileSvelte from '../../../lib/16/solid/device-phone-mobile.svelte'

	const { Story } = defineMeta({
		title: 'Heroicons/Micro',
		component: DevicePhoneMobileSvelte,
		args: { class: 'w-4 h-4' },
	})
</script>

<Story name="DevicePhoneMobile" />
