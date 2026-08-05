<script module lang="ts">
	import { defineMeta } from '@storybook/addon-svelte-csf'
	import QrCodeSvelte from '../../../lib/16/solid/qr-code.svelte'

	const { Story } = defineMeta({
		title: 'Heroicons/Micro',
		component: QrCodeSvelte,
		args: { class: '' },
	})
</script>

<Story name="QrCode" />
