<script module lang="ts">
	import { defineMeta } from '@storybook/addon-svelte-csf'
	import WalletSvelte from '../../../lib/24/outline/wallet.svelte'

	const { Story } = defineMeta({
		title: 'Heroicons/Outline',
		component: WalletSvelte,
		args: { class: '' },
	})
</script>

<Story name="Wallet" />
