<script module lang="ts">
	import { defineMeta } from '@storybook/addon-svelte-csf'
	import EnvelopeOpenSvelte from '../../../lib/16/solid/envelope-open.svelte'

	const { Story } = defineMeta({
		title: 'Heroicons/Micro',
		component: EnvelopeOpenSvelte,
		args: { class: 'w-4 h-4' },
	})
</script>

<Story name="EnvelopeOpen" />
