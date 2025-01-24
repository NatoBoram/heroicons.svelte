<script module lang="ts">
	import { defineMeta } from '@storybook/addon-svelte-csf'
	import InboxStackSvelte from '../../../lib/20/solid/inbox-stack.svelte'

	const { Story } = defineMeta({
		title: 'Heroicons/Mini',
		component: InboxStackSvelte,
		args: { class: 'w-5 h-5' },
	})
</script>

<Story name="InboxStack" />
