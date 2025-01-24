<script module lang="ts">
	import { defineMeta } from '@storybook/addon-svelte-csf'
	import EnvelopeOpenSvelte from '../../../lib/20/solid/envelope-open.svelte'

	const { Story } = defineMeta({
		title: 'Heroicons/Mini',
		component: EnvelopeOpenSvelte,
		args: { class: 'w-5 h-5' },
	})
</script>

<Story name="EnvelopeOpen" />
