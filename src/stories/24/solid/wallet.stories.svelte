<script module lang="ts">
	import { defineMeta } from '@storybook/addon-svelte-csf'
	import WalletSvelte from '../../../lib/24/solid/wallet.svelte'

	const { Story } = defineMeta({
		title: 'Heroicons/Solid',
		component: WalletSvelte,
		args: { class: '' },
	})
</script>

<Story name="Wallet" />
