<script module lang="ts">
	import { defineMeta } from '@storybook/addon-svelte-csf'
	import ReceiptRefundSvelte from '../../../lib/20/solid/receipt-refund.svelte'

	const { Story } = defineMeta({
		title: 'Heroicons/Mini',
		component: ReceiptRefundSvelte,
		args: { class: 'w-5 h-5' },
	})
</script>

<Story name="ReceiptRefund" />
