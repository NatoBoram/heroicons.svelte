<script module lang="ts">
	import { defineMeta } from '@storybook/addon-svelte-csf'
	import EnvelopeOpenSvelte from '../../../lib/24/solid/envelope-open.svelte'

	const { Story } = defineMeta({
		title: 'Heroicons/Solid',
		component: EnvelopeOpenSvelte,
		args: { class: 'w-6 h-6' },
	})
</script>

<Story name="EnvelopeOpen" />
