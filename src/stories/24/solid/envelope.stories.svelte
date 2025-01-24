<script module lang="ts">
	import { defineMeta } from '@storybook/addon-svelte-csf'
	import EnvelopeSvelte from '../../../lib/24/solid/envelope.svelte'

	const { Story } = defineMeta({
		title: 'Heroicons/Solid',
		component: EnvelopeSvelte,
		args: { class: 'w-6 h-6' },
	})
</script>

<Story name="Envelope" />
