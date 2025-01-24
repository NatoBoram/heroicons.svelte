<script module lang="ts">
	import { defineMeta } from '@storybook/addon-svelte-csf'
	import DevicePhoneMobileSvelte from '../../../lib/20/solid/device-phone-mobile.svelte'

	const { Story } = defineMeta({
		title: 'Heroicons/Mini',
		component: DevicePhoneMobileSvelte,
		args: { class: 'w-5 h-5' },
	})
</script>

<Story name="DevicePhoneMobile" />
