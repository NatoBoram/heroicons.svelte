<script module lang="ts">
	import { defineMeta } from '@storybook/addon-svelte-csf'
	import HandRaisedSvelte from '../../../lib/20/solid/hand-raised.svelte'

	const { Story } = defineMeta({
		title: 'Heroicons/Mini',
		component: HandRaisedSvelte,
		args: { class: '' },
	})
</script>

<Story name="HandRaised" />
