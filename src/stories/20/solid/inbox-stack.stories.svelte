<script module lang="ts">
	import { defineMeta } from '@storybook/addon-svelte-csf'
	import InboxStackSvelte from '../../../lib/20/solid/inbox-stack.svelte'

	const { Story } = defineMeta({
		title: 'Heroicons/Mini',
		component: InboxStackSvelte,
		args: { class: '' },
	})
</script>

<Story name="InboxStack" />
