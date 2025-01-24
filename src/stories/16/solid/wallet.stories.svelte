<script module lang="ts">
	import { defineMeta } from '@storybook/addon-svelte-csf'
	import WalletSvelte from '../../../lib/16/solid/wallet.svelte'

	const { Story } = defineMeta({
		title: 'Heroicons/Micro',
		component: WalletSvelte,
		args: { class: 'w-4 h-4' },
	})
</script>

<Story name="Wallet" />
