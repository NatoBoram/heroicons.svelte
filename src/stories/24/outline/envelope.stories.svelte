<script module lang="ts">
	import { defineMeta } from '@storybook/addon-svelte-csf'
	import EnvelopeSvelte from '../../../lib/24/outline/envelope.svelte'

	const { Story } = defineMeta({
		title: 'Heroicons/Outline',
		component: EnvelopeSvelte,
		args: { class: '' },
	})
</script>

<Story name="Envelope" />
