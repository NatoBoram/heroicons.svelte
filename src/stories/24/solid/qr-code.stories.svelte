<script module lang="ts">
	import { defineMeta } from '@storybook/addon-svelte-csf'
	import QrCodeSvelte from '../../../lib/24/solid/qr-code.svelte'

	const { Story } = defineMeta({
		title: 'Heroicons/Solid',
		component: QrCodeSvelte,
		args: { class: '' },
	})
</script>

<Story name="QrCode" />
