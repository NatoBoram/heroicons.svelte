<script module lang="ts">
	import { defineMeta } from '@storybook/addon-svelte-csf'
	import TicketSvelte from '../../../lib/20/solid/ticket.svelte'

	const { Story } = defineMeta({
		title: 'Heroicons/Mini',
		component: TicketSvelte,
		args: { class: '' },
	})
</script>

<Story name="Ticket" />
