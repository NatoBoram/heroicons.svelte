<script module lang="ts">
	import { defineMeta } from '@storybook/addon-svelte-csf'
	import HandRaisedSvelte from '../../../lib/24/outline/hand-raised.svelte'

	const { Story } = defineMeta({
		title: 'Heroicons/Outline',
		component: HandRaisedSvelte,
		args: { class: 'w-6 h-6' },
	})
</script>

<Story name="HandRaised" />
