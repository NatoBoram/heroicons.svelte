<script module lang="ts">
	import { defineMeta } from '@storybook/addon-svelte-csf'
	import EnvelopeSvelte from '../../../lib/16/solid/envelope.svelte'

	const { Story } = defineMeta({
		title: 'Heroicons/Micro',
		component: EnvelopeSvelte,
		args: { class: 'w-4 h-4' },
	})
</script>

<Story name="Envelope" />
