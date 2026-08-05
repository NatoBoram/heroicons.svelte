<script module lang="ts">
	import { defineMeta } from '@storybook/addon-svelte-csf'
	import ReceiptRefundSvelte from '../../../lib/20/solid/receipt-refund.svelte'

	const { Story } = defineMeta({
		title: 'Heroicons/Mini',
		component: ReceiptRefundSvelte,
		args: { class: '' },
	})
</script>

<Story name="ReceiptRefund" />
