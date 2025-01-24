<script module lang="ts">
	import { defineMeta } from '@storybook/addon-svelte-csf'
	import ReceiptPercentSvelte from '../../../lib/24/outline/receipt-percent.svelte'

	const { Story } = defineMeta({
		title: 'Heroicons/Outline',
		component: ReceiptPercentSvelte,
		args: { class: 'w-6 h-6' },
	})
</script>

<Story name="ReceiptPercent" />
