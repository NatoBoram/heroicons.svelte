<script module lang="ts">
	import { defineMeta } from '@storybook/addon-svelte-csf'
	import InboxStackSvelte from '../../../lib/24/solid/inbox-stack.svelte'

	const { Story } = defineMeta({
		title: 'Heroicons/Solid',
		component: InboxStackSvelte,
		args: { class: 'w-6 h-6' },
	})
</script>

<Story name="InboxStack" />
