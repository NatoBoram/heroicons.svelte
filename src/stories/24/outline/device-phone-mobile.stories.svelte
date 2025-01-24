<script module lang="ts">
	import { defineMeta } from '@storybook/addon-svelte-csf'
	import DevicePhoneMobileSvelte from '../../../lib/24/outline/device-phone-mobile.svelte'

	const { Story } = defineMeta({
		title: 'Heroicons/Outline',
		component: DevicePhoneMobileSvelte,
		args: { class: 'w-6 h-6' },
	})
</script>

<Story name="DevicePhoneMobile" />
