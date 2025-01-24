<script module lang="ts">
	import { defineMeta } from '@storybook/addon-svelte-csf'
	import EnvelopeOpenSvelte from '../../../lib/24/outline/envelope-open.svelte'

	const { Story } = defineMeta({
		title: 'Heroicons/Outline',
		component: EnvelopeOpenSvelte,
		args: { class: 'w-6 h-6' },
	})
</script>

<Story name="EnvelopeOpen" />
