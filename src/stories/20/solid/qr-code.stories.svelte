<script module lang="ts">
	import { defineMeta } from '@storybook/addon-svelte-csf'
	import QrCodeSvelte from '../../../lib/20/solid/qr-code.svelte'

	const { Story } = defineMeta({
		title: 'Heroicons/Mini',
		component: QrCodeSvelte,
		args: { class: 'w-5 h-5' },
	})
</script>

<Story name="QrCode" />
