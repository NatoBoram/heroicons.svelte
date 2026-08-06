<script module lang="ts">
	import { defineMeta } from '@storybook/addon-svelte-csf'
	import WalletSvelte from '../../../lib/16/solid/wallet.svelte'

	const { Story } = defineMeta({
		title: 'Heroicons/Micro',
		component: WalletSvelte,
		args: { class: '' },
	})
</script>

<Story name="Wallet" />
