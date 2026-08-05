<script module lang="ts">
	import { defineMeta } from '@storybook/addon-svelte-csf'
	import WalletSvelte from '../../../lib/20/solid/wallet.svelte'

	const { Story } = defineMeta({
		title: 'Heroicons/Mini',
		component: WalletSvelte,
		args: { class: '' },
	})
</script>

<Story name="Wallet" />
