<script module lang="ts">
	import { defineMeta } from '@storybook/addon-svelte-csf'
	import QrCodeSvelte from '../../../lib/24/solid/qr-code.svelte'

	const { Story } = defineMeta({
		title: 'Heroicons/Solid',
		component: QrCodeSvelte,
		args: { class: 'w-6 h-6' },
	})
</script>

<Story name="QrCode" />
