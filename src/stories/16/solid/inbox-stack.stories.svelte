<script module lang="ts">
	import { defineMeta } from '@storybook/addon-svelte-csf'
	import InboxStackSvelte from '../../../lib/16/solid/inbox-stack.svelte'

	const { Story } = defineMeta({
		title: 'Heroicons/Micro',
		component: InboxStackSvelte,
		args: { class: 'w-4 h-4' },
	})
</script>

<Story name="InboxStack" />
