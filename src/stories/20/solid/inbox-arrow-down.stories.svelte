<script module lang="ts">
	import { defineMeta } from '@storybook/addon-svelte-csf'
	import InboxArrowDownSvelte from '../../../lib/20/solid/inbox-arrow-down.svelte'

	const { Story } = defineMeta({
		title: 'Heroicons/Mini',
		component: InboxArrowDownSvelte,
		args: { class: '' },
	})
</script>

<Story name="InboxArrowDown" />
