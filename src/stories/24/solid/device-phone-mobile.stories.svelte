<script module lang="ts">
	import { defineMeta } from '@storybook/addon-svelte-csf'
	import DevicePhoneMobileSvelte from '../../../lib/24/solid/device-phone-mobile.svelte'

	const { Story } = defineMeta({
		title: 'Heroicons/Solid',
		component: DevicePhoneMobileSvelte,
		args: { class: '' },
	})
</script>

<Story name="DevicePhoneMobile" />
