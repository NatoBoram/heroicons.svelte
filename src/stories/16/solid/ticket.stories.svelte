<script module lang="ts">
	import { defineMeta } from '@storybook/addon-svelte-csf'
	import TicketSvelte from '../../../lib/16/solid/ticket.svelte'

	const { Story } = defineMeta({
		title: 'Heroicons/Micro',
		component: TicketSvelte,
		args: { class: 'w-4 h-4' },
	})
</script>

<Story name="Ticket" />
