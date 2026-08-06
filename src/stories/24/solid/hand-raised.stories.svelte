<script module lang="ts">
	import { defineMeta } from '@storybook/addon-svelte-csf'
	import HandRaisedSvelte from '../../../lib/24/solid/hand-raised.svelte'

	const { Story } = defineMeta({
		title: 'Heroicons/Solid',
		component: HandRaisedSvelte,
		args: { class: '' },
	})
</script>

<Story name="HandRaised" />
