<script module lang="ts">
	import { defineMeta } from '@storybook/addon-svelte-csf'
	import HandRaisedSvelte from '../../../lib/16/solid/hand-raised.svelte'

	const { Story } = defineMeta({
		title: 'Heroicons/Micro',
		component: HandRaisedSvelte,
		args: { class: '' },
	})
</script>

<Story name="HandRaised" />
